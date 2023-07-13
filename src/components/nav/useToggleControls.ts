import { useState } from "react";

export const useToggleControls = (): [open: boolean, toggle: () => void] => {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((isProfileDropdownOpen) => !isProfileDropdownOpen);
  }

  return [open, toggle];
};
