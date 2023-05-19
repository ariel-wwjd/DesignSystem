interface OverrideProps {
    className?: string;
    style?: {};
}

interface IButtonAProps {
    onClick?(): void;
    state: 'primary' | 'secondary';
    title: string;
    overrideProps?: OverrideProps;
}

export type { IButtonAProps, OverrideProps };
