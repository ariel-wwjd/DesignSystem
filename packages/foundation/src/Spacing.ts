const spaces: {
  none: 'none',
  xxxs: 'xxxs',
  xxs: 'xxs',
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
  xxxl: 'xxxl',
} = {
  none: 'none', // 0px
  xxxs: 'xxxs', // 4px
  xxs: 'xxs', // 8px
  xs: 'xs', // 12px
  sm: 'sm', // 16px
  md: 'md', // 24px
  lg: 'lg', // 32px
  xl: 'xl', // 48px
  xxl: 'xxl', // 72px
  xxxl: 'xxxl', // 96px
};

// this helps to no override the spaces variable
export default Object.freeze(spaces);
