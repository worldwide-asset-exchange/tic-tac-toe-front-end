import { ipfsEndpoint, resizeImage } from 'config/config';

type GetURLProps = {
    source: string;
    local?: string;
    size?: number | string;
};

const randomDefaultMediaImage = () => {
    return '/static/img/default_media.png';
};

// This function resizes the image at the specified URL to the specified size
export const imageResize = (url: string, size: number | string = '250x250'): string => {
    let urlWithSize = '';

    // Determine if the size parameter is a number or a string
    if (!size) {
        urlWithSize = `${url}`;
    } else if (!isNaN(Number(size))) {
        urlWithSize = `${url}/${size}x${size}`;
    } else {
        urlWithSize = `${url}/${size}`;
    }

    // If a resizeImage endpoint is available, return the resized image URL
    if (!!resizeImage) {
        return `${resizeImage}/${urlWithSize}`;
    } else {
        // Otherwise, return the original IPFS URL
        return `${ipfsEndpoint}/${url}`;
    }
};

// This function returns the URL for the specified media source
export const getURL = ({ source, local, size }: GetURLProps) => {
    // If no source is provided, return a default media image
    if (!source || source.trim().length === 0) return randomDefaultMediaImage();

    // If the source is local, return it as is
    if (local) return source;

    // Otherwise, check if the source is an IPFS hash
    const url = source.replace(/\s/g, '');
    const isIPFS = url.includes('/ipfs/');

    if (isIPFS && url.match('^(https?://).*$')) {
        // If the source is an IPFS hash, resize the image and return the new URL
        const arrUrls = url.split('/ipfs/');
        const hash = arrUrls[arrUrls.length - 1];

        if (!hash) {
            return randomDefaultMediaImage();
        }
        const newHash = hash.replace(/\s/g, '');

        return imageResize(newHash, size);
    }

    // If the source is not an IPFS hash but is a valid URL, return it as is
    if (!isIPFS && url.match('^(https?://).*$')) return url;

    // If the source is not an IPFS hash and is not a valid URL, resize the image and return the new URL
    return imageResize(url, size);
};

// Converts a Medium CDN image URL to a thumbnail URL with a specified maximum size
export const mediumCdnImageToUrl = (mediumImageUrl: string, maxSize: number): string => {
    try {
        // Parse the input URL into a URL object
        const url = new URL(mediumImageUrl);
        // Split the pathname of the URL by '/' and remove any empty strings
        const paths = url.pathname.split('/').filter(p => p);
        // If the pathname has at least 3 parts (i.e. '/username/image/max/maxSize/hash')
        if (paths.length > 2) {
            // Find the index of the 'max' part in the pathname
            const maxIdx = paths.indexOf('max');
            // If the 'max' part is at the beginning of the pathname (i.e. '/max/maxSize/hash')
            if (maxIdx === 0) {
                // Extract the hash value from the pathname
                const hash = paths[maxIdx + 2];
                // Construct the thumbnail URL with the specified maximum size and hash value
                const thumbnailUrl = `${url.origin}/max/${maxSize}/${hash}`;
                // Return the thumbnail URL
                return thumbnailUrl;
            }
        }
    } catch (error) {}
    // If there's an error or the input URL doesn't match the expected pattern, return the input URL
    return mediumImageUrl;
};

// Checks if the extension of an image URL matches any of the allowed formats
export const isMediaCacheAllowedExtension = (
    imgUrl: string = '', // The input image URL
    formats: string[] = ['.png', '.jpg', '.jpeg'], // An array of allowed file formats
) => {
    // It uses the .some() method to check if the input URL includes any of the allowed formats
    return formats.some(v => imgUrl.includes(v));
};
