import React from "react";

interface DropdownSelectProps<T> {
  options: T[];
  onSelect: (option: T) => void;
  handleLoad: () => void;
}

const DropdownSelect = <T extends { id?: number; name?: string }>({
  options,
  onSelect,
  handleLoad,
}: DropdownSelectProps<T>) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedOption, setSelectedOption] = React.useState<T | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleOptionClick = (option ) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
    toggleDropdown();
  };
  const handleLoadClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    event.stopPropagation(); // Impede que o evento se propague para o elemento pai (dropdown)
    handleLoad();
  };
  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);
  };

  const closeDropdown = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  return (
    <div className="relative inline-block text-slate-200">
      <div
        ref={dropdownRef}
        className="bg-zinc-800 rounded-lg border border-blue-500 max-w-xs w-64 cursor-pointer select-none"
        onClick={toggleDropdown}
      >
        <div className="py-2 px-4">
          {selectedOption ? selectedOption.name : 'Escolha uma opção'}
        </div>
        {isOpen && (
          <div className="absolute z-10 mt-2 w-full max-h-48 overflow-y-auto bg-zinc-900 rounded-lg border border-blue-500">
            {options.map(option => (
              <div
                key={option.id}
                className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                onClick={() => handleOptionClick(option)}
              >
                {option.name}
              </div>
            ))}
            <div className=" bg-zinc-700 w-full max-h-48 border-t border-blue-500 flex items-center justify-center">
              <button
              onClick={handleLoadClick}
              className='px-4 py-2 text-slate-200 w-full text-center'
              >Load More</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownSelect;
