import { FontSize } from '@design-system/foundation';

interface TextProps {
  size?: keyof typeof FontSize;
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Text: React.FC<TextProps> = ({ size, children }) => {
  const classNames = `dse-text dse-text-${size}`;
  
  return (
    <p className={classNames}>{children}</p>
  );
}

export default Text;
