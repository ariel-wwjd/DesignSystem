import { useEffect, useRef, useState } from "react";
import Text from '../../atoms/Text'

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  onOptionSelect?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
}

const Select: React.FC<SelectProps> = ({
  options = [],
  label = 'Select an option',
  onOptionSelect: handler,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [overlayTop, setOverlayTop] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const labelRef = useRef<HTMLButtonElement>(null);

  const classNames = `dse-select`;

  useEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10)
  }, [labelRef.current?.offsetHeight]);
  
  const onOptionSelect = (option: SelectOption, optionIndex: number) => {
    if (handler) {
      handler(option, optionIndex);
    }

    setSelectedIndex(optionIndex);
    setIsOpen(false);
  };

  const onLabelClick = () => {
    setIsOpen(!isOpen);
  };
 
  return (  
    <div className={classNames} >
      <button
        className="dse-select__label"
        onClick={() => (onLabelClick())}
        ref={labelRef}
      >
        <Text>{selectedIndex === null ? label : options[selectedIndex].label}</Text>
        <svg
          className={`dse-select__caret ${isOpen ? 'dse-select__caret--open' : 'dse-select__caret--close'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          width="1rem"
          height="1rem"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    {
      isOpen ? (
        <ul style={{ top: overlayTop }} className="dse-select__overlay">
          {options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;
            return (
              <li
                className={`dse-select__option ${isSelected
                  ? 'dse-select__option--selected'
                  : ''}`}
                key={option.value}
                onClick={() => (onOptionSelect(option, optionIndex))}
              >
                <Text>{option.label}</Text>
                {
                  isSelected
                  ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        width="1rem"
                        height="1rem"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    )
                  : null
                }
              </li>
            )
        })}
      </ul>
      ) : null
    }
    </div>
  )
}

export default Select;
