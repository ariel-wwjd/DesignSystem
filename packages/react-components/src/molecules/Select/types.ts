interface SelectOption {
  label: string;
  value: string;
}

//delete interface??
interface RenderOptionsProps {
  isSelected: boolean;
  option: SelectOption;
  getOptionRecommendedProps: (overrideProps?: Object) => Object;
}

interface SelectProps {
  onOptionSelect?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
  renderOption?: (props: RenderOptionsProps) => React.ReactNode;
}

export type {
  SelectOption,
  RenderOptionsProps,
  SelectProps,
};
