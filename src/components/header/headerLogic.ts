import { useState } from 'react';

import preventBodyScroll from '@/utils/preventBodyScrollHelper';

interface HeaderLogicReturn {
  handleSidebarToggle: () => void;
  navbarOpen: boolean;
  handleSidebarClose: () => void;
}

function useHeaderLogic(): HeaderLogicReturn {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  const handleSidebarToggle = () => {
    preventBodyScroll(!navbarOpen);
    setNavbarOpen(!navbarOpen);
  };

  const handleSidebarClose = () => {
    setNavbarOpen(false);
    preventBodyScroll(false);
  };

  return {
    handleSidebarToggle,
    handleSidebarClose,
    navbarOpen,
  };
}

export default useHeaderLogic;
