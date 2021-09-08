/// <reference types="react" />
import { ButtonProps } from '../../types/Button';
declare const Button: {
    ({ classes, variant, height, ...otherProps }: ButtonProps): JSX.Element;
    defaultProps: {
        variant: string;
    };
};
export default Button;
