interface OverrideProps {
    className?: string;
    style?: {};
}
interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
    overrideProps?: OverrideProps;
}
export type { IButtonProps, OverrideProps };
