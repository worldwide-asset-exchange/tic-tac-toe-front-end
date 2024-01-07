import { Button } from 'antd';
import styled from 'styled-components';
import { Colors } from 'theme/StyleConstants';

export const CustomButtonLayout = styled(Button)`
    font-family: 'Titillium Web', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    width: 100%;
    height: 100%;
    min-height: 40px;
    position: relative;
    border-color: ${Colors.black};
    border-width: 1.5px;
    filter: drop-shadow(0px 1.394px 0px #000) drop-shadow(0px 4.881px 1.394px rgba(0, 0, 0, 0.25));
    background: ${Colors.orange};
    overflow: hidden;
    transform: skewX(-6deg);

    span {
        color: ${Colors.neutralWhite};
        text-align: center;
        text-shadow: 0px 2.789px 0px ${Colors.darkCharcoal};
        font-family: Titillium Web;
        font-size: 34px;
        font-style: normal;
        font-weight: 900;
        line-height: 48px;
    }

    .corner {
        position: absolute;
        top: -6px;
        right: 0;
        width: 6px;
        height: 18px;
        transform: rotate(-43.361deg);
        flex-shrink: 0;
        background: #fff;
    }

    .top {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 12%;
        opacity: 0.7;
        background: ${Colors.black};
        mix-blend-mode: overlay;
        z-index: -1;
    }

    .bottom {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 12%;
        opacity: 0.7;
        background: ${Colors.white};
        mix-blend-mode: overlay;
        z-index: -1;
    }
`;
