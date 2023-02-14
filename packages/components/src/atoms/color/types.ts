import { Spacing } from '@design-system/foundation';

interface OverrideProps {
    className?: string;
    style?: {};
}

interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
    overrideProps?: OverrideProps;
}

export type { OverrideProps, ColorProps };
