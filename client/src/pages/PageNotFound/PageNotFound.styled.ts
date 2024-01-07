import { styled } from 'styled-components';
import { Colors, ScreenSizes } from 'theme/StyleConstants';

export const PageNotFoundLayout = styled.div`
    width: 100%;
    /* flex: 1; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .page-not-found-div-1 {
        position: relative;
    }

    .page-not-found-div-2 {
        color: ${Colors.purple_light};
        text-align: center;
        font-family: Titillium Web;
        font-size: 350px;
        font-style: normal;
        font-weight: 700;
        line-height: 400px; /* 114.286% */
        text-transform: uppercase;
        opacity: 0.1;
    }

    .page-not-found-img-1 {
        width: 527px;
        height: 527px;
        position: absolute;
        object-fit: contain;
        z-index: 1;
    }

    .page-not-found-div-3 {
        margin-top: 116px;
        color: ${Colors.purple};
        text-align: center;
        /* Display/48 */
        font-family: Titillium Web;
        font-size: 48px;
        font-style: normal;
        font-weight: 600;
        line-height: 48px; /* 100% */
        text-transform: uppercase;
    }

    .page-not-found-div-4 {
        max-width: 374px;
        margin-top: 16px;
        color: ${Colors.text_light};
        text-align: center;
        /* Body/Regular/S */
        font-family: Titillium Web;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
    }

    .page-not-found-div-5 {
        margin-top: 32px;
        width: 374px;
        a {
            text-decoration: none;
        }
    }

    @media (max-width: ${ScreenSizes.small}) {
        .page-not-found-div-1 {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .page-not-found-div-2 {
            width: 100%;
            color: ${Colors.purple_light};
            font-size: 50vw;
            font-style: normal;
            font-weight: 700;
        }

        .page-not-found-img-1 {
            width: 100%;
            height: auto;
        }

        .page-not-found-div-3 {
            margin-top: 50px;
            width: 90%;
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 30px; /* 100% */
        }

        .page-not-found-div-5 {
            width: 80%;
        }
    }
`;
