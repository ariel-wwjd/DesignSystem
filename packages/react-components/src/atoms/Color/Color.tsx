import { Spacing } from '@design-system/foundation';
import { ColorProps, OverrideProps } from './types'; 

const Color: React.FC<ColorProps> = ({
    hexCode = '#bbbbbb',
    width = Spacing.sm,
    height = Spacing.sm,
    overrideProps = {},
  }) => {
  const classNames = `dse-width-${width} dse-height-${height}`;
  const renderProps = {
    recommendedProps: (overrideProps: OverrideProps) => ({
      className: classNames,
      ...overrideProps,
      style: {
        backgroundColor: hexCode, 
        ...overrideProps?.style,
      },
    })
  }

  return (
    <div
      {...renderProps.recommendedProps(overrideProps)}
    ></div>
  )
}

export default Color;
