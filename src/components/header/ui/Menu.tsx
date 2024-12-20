import React, { useState, useRef } from 'react';
import { Box, Popper, useTheme } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import CustomButton from '@/components/ui/button/CustomButton';
import { PageProps } from '@/context/withStaticPathsAndProps';
import langUk from '../../../../locales/uk.json';
import { darkTheme, lightTheme } from '@/theme';

const MenuComponent: React.FC<PageProps> = ({ translations, lang }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentSubMenu, setCurrentSubMenu] = useState<null | string>(null);
  const theme = useTheme();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems = translations?.menu || langUk.menu;

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menuTitle: string) => {
    setAnchorEl(event.currentTarget);
    setCurrentSubMenu(menuTitle);
  };

  const handleMenuCloseAndTrack = (label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    setAnchorEl(null);
    setCurrentSubMenu(null);

    if (typeof window.gtag === 'function') {
      window.gtag('event', `Переход на страницу: ${label}`, { event_category: 'Button', event_label: label });
    }
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>, menuTitle: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setAnchorEl(event.currentTarget);
    setCurrentSubMenu(menuTitle);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
      setCurrentSubMenu(null);
    }, 200);
  };

  return (
    <nav className="flex items-center gap-5 sm:gap-[30px] md:gap-[40px] lg:gap-[80px]">
      {menuItems.map((item) => (
        <Box
          key={item.title}
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
          onMouseEnter={(event) => handleMouseEnter(event, item.title)}
          onMouseLeave={handleMouseLeave}
        >
          {item.subMenu ? (
            <>
              <CustomButton ariaLabel={item.title} variant="menu-btn" onClick={(event) => handleMenuOpen(event, item.title)}>
                {item.title}
                <KeyboardArrowDownIcon
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: currentSubMenu === item.title ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </CustomButton>

              {/* Всплывающее меню */}
              <Popper
                open={currentSubMenu === item.title}
                anchorEl={anchorEl}
                placement="bottom-start"
                modifiers={[
                  {
                    name: 'offset',
                    options: {
                      offset: [10, 10],
                    },
                  },
                  {
                    name: 'preventOverflow',
                    options: {
                      boundary: 'viewport',
                      padding: 16,
                    },
                  },
                  {
                    name: 'flip',
                    options: {
                      fallbackPlacements: ['bottom-start', 'top-start'],
                    },
                  },
                ]}
                sx={{
                  zIndex: 1300,
                  mt: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: bgColor,
                  borderRadius: '4px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                  maxWidth: '90vw',
                }}
              >
                <Box>
                  {item.subMenu.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={`/${lang}/${subItem.href}/`}
                      className="hover:bg-[#c43c1e] transition-all duration-300 ease-in-out px-[15px] py-[10px] sm:p-1 md:p-1.5 lg:p-2 rounded-[3px] text-[14px] sm:text-[14px] md:text-[15px] lg:text-[17px] "
                      style={{
                        textDecoration: 'none',
                        display: 'block',
                        color: secondaryColor,
                      }}
                      onClick={() => handleMenuCloseAndTrack(subItem.title)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </Box>
              </Popper>
            </>
          ) : (
            <Link href={`/${lang}/${item.href}`} style={{ textDecoration: 'none' }}>
              <CustomButton ariaLabel={item.title} variant="menu-btn">
                {item.title}
              </CustomButton>
            </Link>
          )}
        </Box>
      ))}
    </nav>
  );
};

export default MenuComponent;
