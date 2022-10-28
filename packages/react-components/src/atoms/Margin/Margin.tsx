import { MarginProps, OverrideProps } from "./types";

const Margin: React.FC<MarginProps> = ({
  size = 'xxxs',
  side, children,
  overrideProps = {},
}) => {
  const classNames = side? `dse-margin-${String(side)}-${size}` : `dse-margin-${size}`;
  
  const renderProps = {
    recommendedProps: (overrideProps: OverrideProps) => ({
      className: classNames,
      ...overrideProps,
      style: {
        ...overrideProps?.style,
      },
    })
  }
  
  return (
    <div {...renderProps.recommendedProps(overrideProps)}>
      {children}
    </div>
  )
}

export default Margin;
