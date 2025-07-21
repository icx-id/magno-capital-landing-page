'use client';
import React from 'react';
import { Box, Drawer, DrawerCloseButton, DrawerContent, Group, Stack, Text } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { navbarMenus } from '../static';

interface MenuNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onClickMenu: (id: string, mobile: boolean) => void;
}

const MenuNav: React.FC<MenuNavProps> = ({ open, setOpen, onClickMenu }) => (
  <Drawer
    size="100%"
    opened={open}
    onClose={() => setOpen(false)}
    withCloseButton={false}
    style={{ backgroundColor: 'white' }}
    styles={{
      body: {
        padding: 0,
      },
    }}>
    <DrawerContent h="100%" style={{ backgroundColor: 'white' }}>
      <Stack w="100%" h="100%" p="35px 33px" style={{ backgroundColor: 'white' }}>
        <Group w="100%" justify="space-between">
          <Link href="/">
            <Box pos="relative" w={{ base: '121px', md: '239px' }} h={{ base: '30px', md: '59px' }}>
              <Image
                alt="magno-capital-logo"
                src="/assets/common/magno-capital-logo.webp"
                objectFit="cover"
                layout="fill"
                style={{
                  filter: 'invert(1)',
                }}
              />
            </Box>
          </Link>
          <DrawerCloseButton size="xl" c="black" />
        </Group>
        <Stack gap="25px" mt="93px">
          {React.Children.toArray(
            navbarMenus.map(navItem => (
              <>
                <Text
                  key={navItem.id}
                  fw={400}
                  fz="48px"
                  lh="100%"
                  c="black"
                  onClick={() => onClickMenu(navItem.href, true)}
                  style={{
                    cursor: 'pointer',
                  }}>
                  {navItem.name}
                </Text>
              </>
            )),
          )}
        </Stack>
      </Stack>
    </DrawerContent>
  </Drawer>
);

export default MenuNav;
