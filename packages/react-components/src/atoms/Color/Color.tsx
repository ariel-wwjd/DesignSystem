import { Spacing } from '@design-system/foundation';

interface ColorProps {
  hexCode: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Color: React.FC<ColorProps> = ({ hexCode, width = Spacing.sm, height = Spacing.sm }) => {
  const classNames = `dse-width-${width} dse-height-${height}`;
  return (
    <div className={classNames} style={{
      backgroundColor: hexCode, 
    }}></div>
  )
}

export default Color;
