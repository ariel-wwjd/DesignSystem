interface IButtonBProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string;
    style?: {};
    state?: 'primary' | 'secondary';
    title: string;
}
export type { IButtonBProps };
