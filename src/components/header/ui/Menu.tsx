import React, { useState, useEffect, useRef } from 'react';
import { Box, Popper, Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Стрелка вниз
import { useRouter } from 'next/router';
import CustomButton from '@/components/ui/button/CustomButton';
import Link from 'next/link';

interface MenuProps {
  translations: { [key: string]: string };
}

const MenuComponent: React.FC<MenuProps> = ({ translations }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openSubMenu, setOpenSubMenu] = useState<null | string>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const { asPath } = router;
  const currentLang = `/${asPath.split('/')[1]}/`;

  const menuItems = [
    {
      title: translations?.services || 'Послуги',
      subMenu: [
        {
          title: 'ТОКАРНІ Токарні роботи ЧПУ',
          href: 'services/tokarni-roboty-chpu',
        },
        { title: 'ТОКАРНІ РОБОТ', href: 'services/tokarni-robot' },
        { title: 'ФРЕЗЕРНІ РОБОТИ', href: 'services/frezerni-roboty' },
        { title: 'ТЕРМІЧНА ОБРОБКА', href: 'services/termichna-obrobka' },
        { title: 'ЛАЗЕРНА РІЗКА', href: 'services/lazerna-rizka' },
        { title: 'ШЛІФОВКА МЕТАЛУ', href: 'services/shlifovka-metalu' },
        {
          title: 'ІНДИВІДУАЛЬНІ ЗАМОВЛЕННЯ',
          href: 'services/indyvidualni-zamovlennya',
        },
      ],
    },
    {
      title: translations?.product || 'Продукція',
      subMenu: [
        {
          title: 'ЗАЛІЗНИЧНІ ЗАПЧАСТИНИ',
          href: 'production/zaliznychni-zapchastyny',
        },
        {
          title: 'ЗАПЧАСТИНИ ДЛЯ СІЛЬГОСПТЕХНІКИ',
          href: 'production/zapchastyny-dlya-silhosptekhniky',
        },
      ],
    },
    { title: translations?.contacts || 'Контакти', href: 'contact' }, // Этот пункт не имеет подменю
  ];

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menuTitle: string) => {
    setAnchorEl(event.currentTarget);

    setOpenSubMenu(openSubMenu === menuTitle ? null : menuTitle);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenSubMenu(null);
  };

  // Обработчик кликов вне меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleMenuClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // поддержку клавиши Escape, чтобы закрывать меню с клавиатуры.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleMenuClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <nav className="flex items-center gap-5  sm:gap-[30px] md:gap-[40px] lg:gap-[80px]" ref={menuRef}>
      {menuItems.map((item) => (
        <Box
          key={item.title}
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {item.subMenu ? (
            <>
              <CustomButton variant="menu-btn" onClick={(event) => handleMenuOpen(event, item.title)}>
                {item.title}
                <KeyboardArrowDownIcon />
              </CustomButton>

              {/* Всплывающее меню */}
              <Popper
                open={openSubMenu === item.title}
                anchorEl={anchorEl}
                placement="bottom-start"
                disablePortal
                style={{ zIndex: 1300 }}
              >
                <Paper elevation={3} sx={{ mt: 1 }}>
                  {item.subMenu
                    ? item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={`${currentLang}${subItem.href}`}
                          onClick={handleMenuClose}
                        >
                          {subItem.title}
                        </Link>
                      ))
                    : null}
                </Paper>
              </Popper>
            </>
          ) : (
            <Link href={`${currentLang}${item.href}`} style={{ textDecoration: 'none' }}>
              <CustomButton variant="menu-btn">{item.title}</CustomButton>
            </Link>
          )}
        </Box>
      ))}
    </nav>
  );
};

export default MenuComponent;
