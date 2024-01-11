//blockchain endpoint
export const BLOCK_CHAIN_URL = import.meta.env.VITE_WAX_CHAIN_API ?? 'https://stg-chain.waxstg.net';

//wax js params
export const ALL_ACCESS_URL = import.meta.env.VITE_WAA_URL ?? 'https://stg-wallet-ui.waxstg.net';
export const SIGNING_URL =
    import.meta.env.VITE_SIGNING_URL ?? 'https://stg-api-idm.waxstg.net/v1/accounts/auto-accept/';
export const FREE_BANDWIDTH = import.meta.env.VITE_FREE_BANDWIDTH
    ? import.meta.env.VITE_FREE_BANDWIDTH === 'true'
    : false;
export const AUTO_LOGIN = import.meta.env.VITE_AUTO_LOGIN
    ? import.meta.env.VITE_AUTO_LOGIN === 'true'
    : true;
export const FEE_FALLBACK = import.meta.env.VITE_FEE_FALLBACK
    ? import.meta.env.VITE_FEE_FALLBACK === 'true'
    : true;

//formathelp
export const CACHE_DISABLED = import.meta.env.VITE_CACHE_DISABLED ?? false;
export const CACHE_LOCATION = import.meta.env.VITE_MEDIA_CACHE ?? 'https://media.wax.io';
export const IPFS_URL = import.meta.env.VITE_IPFS_URL ?? 'https://gateway.pinata.cloud/ipfs/';

//image
export const resizeImage = import.meta.env.VITE_APP_MEDIA_CACHE ?? 'https://mediacache.wax.io';
export const ipfsEndpoint = import.meta.env.VITE_APP_IPFS_ENDPOINT;
