// interface OverrideProps {
// }

interface IButtonBProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string;
    style?: {};
    // onClick?(): void;
    state?: 'primary' | 'secondary';
    title: string;
    // overrideProps?: OverrideProps;
}

export type { IButtonBProps };
