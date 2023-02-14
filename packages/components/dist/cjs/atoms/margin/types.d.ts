import { Spacing, Side } from '@design-system/foundation';
interface OverrideProps {
    className?: string;
    style?: {};
}
interface MarginProps {
    size?: keyof typeof Spacing;
    side?: keyof typeof Side;
    children: JSX.Element | JSX.Element[] | string | string[];
    overrideProps?: OverrideProps;
}
export type { OverrideProps, MarginProps };
