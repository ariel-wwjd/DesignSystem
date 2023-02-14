import { FontSize, FontWeight } from '@design-system/foundation';
interface OverrideProps {
    className?: string;
    style?: {};
}
interface TextProps {
    textColor?: string;
    size?: keyof typeof FontSize;
    weight?: keyof typeof FontWeight;
    children: JSX.Element | JSX.Element[] | string | string[];
    overrideProps?: OverrideProps;
}
export type { TextProps, OverrideProps };
