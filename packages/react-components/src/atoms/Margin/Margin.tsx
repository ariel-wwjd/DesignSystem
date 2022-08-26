import { Spacing, Side } from '@design-system/foundation';

interface MarginProps {
  size?: keyof typeof Spacing;
  side?: keyof typeof Side;
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Margin: React.FC<MarginProps> = ({ size = 'xxxs', side, children }) => {
  const classNames = side? `dse-margin-${String(side)}-${size}` : `dse-margin-${size}`;
  return (
    <div className={classNames} >
      {children}
    </div>
  )
}

export default Margin;