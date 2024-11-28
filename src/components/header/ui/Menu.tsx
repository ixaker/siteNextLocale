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
  // const observerRef = useRef<IntersectionObserver | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems = translations?.menu || langUk.menu;

  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;
  const bgColor = currentTheme.palette.background.default;
  const secondaryColor = currentTheme.palette.secondary.main;

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menuTitle: string) => {
    setAnchorEl(event.currentTarget);
    setCurrentSubMenu(menuTitle);
  };

  const handleMenuClose = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    setAnchorEl(null);
    setCurrentSubMenu(null);
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
    }, 200); // Добавляем небольшую задержку перед закрытием
  };

  // Проверка видимости элемента с использованием IntersectionObserver
  // useEffect(() => {
  //   if (anchorEl) {
  //     observerRef.current = new IntersectionObserver(
  //       ([entry]) => {
  //         if (!entry.isIntersecting) {
  //           handleMenuClose();
  //         }
  //       },
  //       {
  //         root: null, // Следим за видимостью в пределах viewport
  //         threshold: 0.1, // Считаем невидимым, если менее 10% элемента видно
  //       }
  //     );

  //     observerRef.current.observe(anchorEl);
  //   }

  //   return () => {
  //     if (observerRef.current && anchorEl) {
  //       observerRef.current.unobserve(anchorEl); // Убираем наблюдение при размонтировании
  //       observerRef.current.disconnect();
  //     }
  //   };
  // }, [anchorEl]);

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
              <CustomButton
                ariaLabel={item.title}
                variant="menu-btn"
                onClick={(event) => handleMenuOpen(event, item.title)}
              >
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
                      offset: [10, 10], // Отступы: 10px по горизонтали, 10px по вертикали
                    },
                  },
                  {
                    name: 'preventOverflow',
                    options: {
                      boundary: 'viewport',
                      padding: 16, // Минимальный отступ от краёв экрана
                    },
                  },
                  {
                    name: 'flip',
                    options: {
                      fallbackPlacements: ['bottom-start', 'top-start'], // Попытка расположить меню сверху или снизу
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
                  maxHeight: '300px',
                  overflowY: 'auto',
                  maxWidth: '90vw',
                }}
              >
                {/* <ClickAwayListener onClickAway={handleMenuClose}> */}
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
                      onClick={handleMenuClose}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </Box>
                {/* </ClickAwayListener> */}
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
