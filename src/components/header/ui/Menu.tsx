import React, { useState, useEffect, useRef } from 'react';
import { Box, Popper, Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Стрелка вниз
import { useRouter } from 'next/router';
import CustomButton from '@/components/ui/button/CustomButton';
import Link from 'next/link';
import langEn from '../../../../locales/en.json';
import { MenuProps, MenuItem } from '../types/types';

const MenuComponent: React.FC<MenuProps> = ({ translations }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openSubMenu, setOpenSubMenu] = useState<null | string>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const servicesMenu = (translations?.services as { [key: string]: string }) || langEn.services;
  const productsMenu = (translations?.product as { [key: string]: string }) || langEn.product;
  const router = useRouter();
  const { asPath } = router;
  const currentLang = `/${asPath.split('/')[1]}/`;

  const menuItems: MenuItem[] = [
    {
      title: servicesMenu.title,
      subMenu: [
        {
          title: servicesMenu.cncTurning,
          href: 'services/tokarni-roboty-chpu',
        },
        { title: servicesMenu.turning, href: 'services/tokarni-robot' },
        { title: servicesMenu.milling, href: 'services/frezerni-roboty' },
        { title: servicesMenu.heatTreatment, href: 'services/termichna-obrobka' },
        { title: servicesMenu.laserCutting, href: 'services/lazerna-rizka' },
        { title: servicesMenu.metalGinding, href: 'services/shlifovka-metalu' },
        {
          title: servicesMenu.customOrders,
          href: 'services/indyvidualni-zamovlennya',
        },
      ],
    },
    {
      title: productsMenu.title,
      subMenu: [
        {
          title: productsMenu.railwaySpareParts,
          href: 'production/zaliznychni-zapchastyny',
        },
        {
          title: productsMenu.sparePartsForAgricultural,
          href: 'production/zapchastyny-dlya-silhosptekhniky',
        },
      ],
    },
    { title: productsMenu.contacts, href: 'contact' }, // Этот пункт не имеет подменю
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
                <Paper
                  elevation={3}
                  sx={{
                    mt: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    width: '220px',
                    padding: '10px',
                  }}
                >
                  {item.subMenu
                    ? item.subMenu.map((subItem) => (
                        <Link
                          className="hover:text-[#c43c1e]"
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
