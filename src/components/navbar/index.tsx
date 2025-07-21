'use client';
import { Box, Button, Group, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { navbarMenus } from './static';
import MenuNav from './components/MenuNav';
import { useMediaQuery } from '@mantine/hooks';

interface NavbarContentProps {
  setOpen: (boolean: boolean) => void;
  desktop: boolean | undefined;
  onClickMenu: (id: string, mobile: boolean) => void;
}

const NavbarContent: React.FC<NavbarContentProps> = props => {
  const { desktop, onClickMenu, setOpen } = props;

  if (desktop) {
    return (
      <Group justify="space-between" h="100%">
        <Link href="/">
          <Box
            pos="relative"
            w={{ base: '121px', md: '239px' }}
            h={{ base: '30px', md: '59.05px' }}>
            <Image
              alt="magno-capital-logo"
              src="/assets/common/magno-capital-logo.webp"
              objectFit="cover"
              layout="fill"
            />
          </Box>
        </Link>
        <Group
          justify="space-between"
          gap="56px"
          p="27px 67.52px"
          style={{
            borderRadius: '45px',
            backgroundColor: 'white',
          }}>
          {React.Children.toArray(
            navbarMenus.map(menu => (
              <Text
                key={menu.id}
                fw={400}
                fz="18px"
                lh="100%"
                c="black"
                onClick={() => onClickMenu(menu.href, false)}
                style={{
                  cursor: 'pointer',
                }}>
                {menu.name}
              </Text>
            )),
          )}
        </Group>
      </Group>
    );
  }

  return (
    <Group justify="space-between" h="100%">
      <Link href="/">
        <Box pos="relative" w={{ base: '121px', md: '239px' }} h={{ base: '30px', md: '59.05px' }}>
          <Image
            alt="magno-capital-logo"
            src="/assets/common/magno-capital-logo.webp"
            objectFit="cover"
            layout="fill"
          />
        </Box>
      </Link>

      <Button style={{ backgroundColor: 'transparent' }} p={0} onClick={() => setOpen(true)}>
        <Box w="30px" h="30px">
          <Image src="/assets/navbar/hamburger.svg" alt="menu" layout="fill" />
        </Box>
      </Button>
    </Group>
  );
};

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const desktop = useMediaQuery(`(min-width: 1200px)`);
  const [open, setOpen] = useState(false);

  const onClickMenu = (id: string, mobile: boolean) => {
    const el = document.getElementById(id);
    if (mobile) {
      setOpen(false);
    }

    if (el) {
      const valueScroll = el.offsetTop;
      window.scrollTo({
        behavior: 'smooth',
        top: valueScroll - (mobile ? 140 : 100),
      });
    }
  };

  //Hide navbar when scrolling down
  const handleScroll = useCallback(() => {
    const fixedNavbar = document.getElementById('fixed-navbar');

    const { scrollY } = window;

    const isScrolling = scrollY > lastScrollY;
    const navbarCondition = scrollY > 1 || isScrolling;

    if (fixedNavbar) {
      fixedNavbar.style.backgroundColor = navbarCondition ? '#161515' : 'transparent';

      fixedNavbar.style.top = isScrolling ? '-148.05px' : '0';
    }

    setLastScrollY(scrollY);
  }, [setLastScrollY, lastScrollY]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
    <>
      <Box
        id="fixed-navbar"
        // p={{ base: '21px 35px', xl: '71px 111px' }}
        p={{ base: '30px 28px', md: '19.2px 42.4px' }}
        style={{
          width: '100%',
          position: 'fixed',
          overflowX: 'hidden',
          zIndex: 5,
          transition: 'background-color 0.3s, top 0.3s',
          backgroundColor: 'transparent',
        }}>
        <NavbarContent setOpen={setOpen} onClickMenu={onClickMenu} desktop={desktop} />
      </Box>

      <MenuNav open={open} setOpen={setOpen} onClickMenu={onClickMenu} />
    </>
  );
};

export default Navbar;
