import React, { useState, useRef, useEffect } from 'react';
import { Box, Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import CustomButton from '@/components/ui/button/CustomButton';
import { PageProps } from '@/context/withStaticPathsAndProps';
import langUk from '../../../../locales/uk.json';

const MenuComponent: React.FC<PageProps> = ({ translations, lang }) => {
  const [openSubMenu, setOpenSubMenu] = useState<null | string>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems = translations?.menu || langUk.menu;

  const handleSubMenuOpen = (menuTitle: string | null) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setOpenSubMenu(menuTitle);
  };

  // Задержка в 200 мс перед закрытием
  const handleSubMenuClose = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenSubMenu(null);
    }, 200);
  };

  // Закрытие меню при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenSubMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center gap-5 sm:gap-[30px] md:gap-[40px] lg:gap-[80px]" ref={menuRef}>
      {menuItems.map((item) => (
        <Box
          key={item.title}
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
          onMouseEnter={() => handleSubMenuOpen(item.title)}
          onMouseLeave={handleSubMenuClose}
        >
          {item.subMenu ? (
            <>
              <CustomButton variant="menu-btn">
                {item.title}
                <KeyboardArrowDownIcon
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: openSubMenu === item.title ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </CustomButton>

              {/* Всплывающее меню */}
              {openSubMenu === item.title && (
                <Paper
                  elevation={3}
                  sx={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    mt: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 1300,
                    whiteSpace: {
                      xs: 'wrap',
                      md: 'nowrap',
                      lg: 'nowrap',
                    },
                    width: {
                      xs: '180px',
                      md: 'auto',
                      lg: 'auto',
                    },
                  }}
                  onMouseEnter={() => handleSubMenuOpen(item.title)}
                  onMouseLeave={handleSubMenuClose}
                >
                  {item.subMenu.map((subItem) => (
                    <Link
                      key={subItem.title}
                      className="hover:bg-[#c43c1e] no-wrap transition-all duration-300 ease-in-out p-1 sm:p-1 md:p-1.5 lg:p-2 rounded-[3px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px]"
                      href={`/${lang}/${subItem.href}/`}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </Paper>
              )}
            </>
          ) : (
            <Link href={`/${lang}/${item.href}`} style={{ textDecoration: 'none' }}>
              <CustomButton variant="menu-btn">{item.title}</CustomButton>
            </Link>
          )}
        </Box>
      ))}
    </nav>
  );
};

export default MenuComponent;
