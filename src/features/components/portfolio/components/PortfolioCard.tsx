'use client';

import React from 'react';
import { PortflioProps } from '../static';
import { useTranslations } from 'next-intl';
import { Box, Flex, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import { useMediaQuery } from '@mantine/hooks';

export const PortflioCard: React.FC<PortflioProps> = props => {
  const { name, description, image, url } = props;
  const mobile = useMediaQuery(`(max-width: 600px)`);
  const t = useTranslations('home.portfolio');

  return (
    <Stack
      style={{ cursor: 'pointer' }}
      onClick={() => {
        window.open(url, '_blank');
      }}>
      <Flex w="100%" justify="center">
        <Box
          w="100%"
          pos="relative"
          style={{
            borderRadius: mobile ? '12px' : '20px',
            aspectRatio: '16 / 9',
          }}>
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            style={{
              borderRadius: mobile ? '12px' : '20px',
            }}
          />
        </Box>
      </Flex>

      <Text
        fw={400}
        fz={{ base: '29.07px', md: '48px' }}
        c="white"
        mt={{ base: '12.78px', md: '22px' }}>
        {name}
      </Text>

      <Text
        fw={300}
        fz={{ base: '16px', md: '24px' }}
        c="white"
        mt={{ base: '12.78px', md: '22px' }}>
        {t(description)}
      </Text>
    </Stack>
  );
};
