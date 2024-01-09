import { styled } from 'styled-components';
import { Padding, ScreenSizes } from 'theme/StyleConstants';

export const GameListLayout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0 ${Padding.destop};
    position: relative;

    @media (max-width: ${ScreenSizes.large}) {
        padding: 0 ${Padding.table};
    }

    @media (max-width: ${ScreenSizes.medium}) {
    }

    @media (max-width: ${ScreenSizes.small}) {
        .homepage-img-1 {
            width: 100%;
            height: auto;
        }
    }

    @media (max-width: ${ScreenSizes.mobile}) {
        padding: 0 ${Padding.mobile};
    }
`;
