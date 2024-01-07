import { CustomButtonLayout } from './Button.style';

import { ButtonProps } from 'antd';

export const CustomButton = (props: ButtonProps): JSX.Element => {
    return (
        <CustomButtonLayout {...props}>
            <div className="corner" />
            <div className="top" />
            {props.children}
            <div className="bottom" />
        </CustomButtonLayout>
    );
};
