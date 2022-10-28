import { createRef, KeyboardEventHandler, useEffect, useRef, useState } from "react";
import { KEY_CODES, getNextOptionIndex, getPreviousOptionIndex } from "./utilities";
import { SelectOption, SelectProps } from "./types";
import Text from '../../atoms/Text'
import SelectItem from "../SelectItem";

const Select: React.FC<SelectProps> = ({
  options = [],
  label = 'Select an option',
  onOptionSelect: handler,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [overlayTop, setOverlayTop] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hightlightedIndex, setHightlightedIndex] = useState<number | null>(null);
  const [optionsRefs, setOptionRefs] = useState<React.RefObject<HTMLLIElement>[]>([]);

  const labelRef = useRef<HTMLButtonElement>(null);

  const classNames = `dse-select`;

  useEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10)
  }, [labelRef.current?.offsetHeight]);

  useEffect(() => {
    setOptionRefs(options.map((_) => (createRef<HTMLLIElement>())))
  }, [options]);

  useEffect(() => {
    if (hightlightedIndex !== null && isOpen) {
      const ref = optionsRefs[hightlightedIndex];

      if (ref && ref.current) {
        ref.current.focus();
      }
    }
  }, [isOpen, hightlightedIndex, optionsRefs]);
  
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

  const highlightOption = (optionIndex: number | null) => {
    setHightlightedIndex(optionIndex);
  };

  const onButtonKeyDown: KeyboardEventHandler = (event) => {
    event.preventDefault();
    if ([KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.ARROW_DOWN].includes(event.code)) {
      setIsOpen(true);
      highlightOption(0);
    }
  };

  const onOptionDown: KeyboardEventHandler = (event) => {
    switch (event.code) {
      case KEY_CODES.ESCAPE:
        setIsOpen(false);
        break;
      case KEY_CODES.ARROW_DOWN:
        highlightOption (getNextOptionIndex(hightlightedIndex, options));
        break;
      case KEY_CODES.ARROW_UP:
        highlightOption(getPreviousOptionIndex(hightlightedIndex, options));
        break;
      case KEY_CODES.ENTER:
        onOptionSelect(options[hightlightedIndex!], hightlightedIndex!);
        break;
      default:
        break;
    } 
  };
 
  return (    
    <div className={classNames} >
      <button
        onKeyDown={onButtonKeyDown}
        aria-haspopup={true}
        aria-expanded={isOpen ? true : undefined}
        aria-controls='dse-select-list'
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
        <ul role='menu' style={{ top: overlayTop }} className="dse-select__overlay" id='dse-select-list' >
          {options.map((option, optionIndex) => {
            return (
              <SelectItem 
                isSelected={selectedIndex === optionIndex}
                isHightlighted={hightlightedIndex === optionIndex}
                ref={optionsRefs[optionIndex]}
                option={option}
                optionIndex={optionIndex}
                onOptionDown={onOptionDown}
                highlightOption={highlightOption}
                onOptionSelect={onOptionSelect}
                renderOption={renderOption}
              />
            )
          }
        )}
      </ul>
      ) : null
    }
    </div>
  )
}

export default Select;
