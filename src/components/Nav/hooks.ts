import { RefObject, useEffect, useState } from 'react';

/**
 * A hook for controling a toggle.
 */
export const useToggleControls = (): [
  isOpen: boolean,
  toggle: () => void,
  open: () => void,
  close: () => void,
] => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isProfileDropdownOpen) => !isProfileDropdownOpen);
  }

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return [isOpen, toggle, open, close];
};

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  onClick: (event: MouseEvent) => void,
) => {
  useEffect(() => {
    const onDocumentClick = (e: MouseEvent) => {
      const element = ref.current;
      if (!element) {
        return;
      }

      if (element.contains(e.target as Node)) {
        return;
      }

      onClick(e);
    };

    document.addEventListener('click', onDocumentClick);

    return () => {
      document.removeEventListener('click', onDocumentClick);
    };
  }, [ref, onClick]);
};
