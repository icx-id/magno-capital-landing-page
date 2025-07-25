'use client';

import React, { useMemo } from 'react';
import { OurValuesProps } from '../static';
import { Box, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useHover, useMediaQuery } from '@mantine/hooks';

const OurValuesCard: React.FC<OurValuesProps> = props => {
  const { name, image, descriptionOne, descriptionTwo, icon, iconSize } = props;
  const t = useTranslations('home.our_values');
  const desktop = useMediaQuery(`(min-width: 1200px)`);

  const { ref, hovered } = useHover();

  const hoverStateCondition = useMemo(() => {
    if (desktop) {
      return hovered;
    }
    return true;
  }, [desktop, hovered]);

  return (
    <Stack
      w="100%"
      h={{ base: '747px', md: '940px' }}
      ref={ref}
      px={{ base: '22px', sm: '40px', md: '80px' }}
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-color 0.4s ease',
        backgroundBlendMode: 'overlay',
        backgroundColor: hoverStateCondition ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.2)',
      }}
      pos="relative">
      <Stack
        w="100%"
        h="100%"
        justify="center"
        align="center"
        style={{
          textAlign: 'center',
          transition: 'all 0.4s ease',
        }}>
        <Stack w="100%" justify="center" align="center">
          <Box
            style={{
              transform: hoverStateCondition ? 'translateY(-16px)' : 'translateY(0)',
              transition: 'transform 0.4s ease',
            }}
            pos="relative"
            w={{ base: iconSize.base, md: iconSize.md }}
            h={{ base: iconSize.base, md: iconSize.md }}>
            <Image src={icon} alt={name} objectFit="cover" layout="fill" />
          </Box>
        </Stack>
        <Stack>
          <Text
            fw={500}
            fz={{ base: '24.39px', md: '32px' }}
            style={{
              opacity: hoverStateCondition ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
            c="white"
            ta="center">
            {name}
          </Text>

          <Text
            fw={300}
            fz={{ base: '18px', md: '24px' }}
            style={{
              opacity: hoverStateCondition ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
            c="white"
            ta="center">
            {t(descriptionOne)} <br />
            {t(descriptionTwo)}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OurValuesCard;
