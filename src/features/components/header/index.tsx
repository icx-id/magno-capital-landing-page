'use client';

import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mantine/core';
import { useTranslations } from 'next-intl';

interface AnimatedTextProps {
  text: string;
  delayOffset?: number;
  isSubtitle?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = props => {
  const { text, delayOffset = 0, isSubtitle } = props;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // start after mount
  }, []);

  if (isSubtitle) {
    return (
      <Box
        fw={300}
        fz={{ base: '20px', sm: '22px', xl: '24px' }}
        lh="100%"
        c="white"
        mt={{ base: '14px', sm: '20px' }}
        maw={{ base: '271px', sm: '674px' }}
        display="flex"
        ta="center"
        style={{
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.5rem',
        }}>
        {text.split(' ').map((word, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              transform: animate ? 'translateY(0)' : 'translateY(100%)',
              opacity: animate ? 1 : 0,
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transitionDelay: `${(i + delayOffset) * 0.2}s`,
              whiteSpace: 'nowrap',
            }}>
            {word}
          </span>
        ))}
      </Box>
    );
  }

  return (
    <Box
      fw={500}
      fz={{ base: '36px', sm: '48px', xl: '67px' }}
      lh="100%"
      c="white"
      ta="center"
      maw={{ base: '372px', sm: '872px' }}
      display="flex"
      style={{
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0.5rem',
      }}>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            transform: animate ? 'translateY(0)' : 'translateY(100%)',
            opacity: animate ? 1 : 0,
            transition: 'transform 0.6s ease, opacity 0.6s ease',
            transitionDelay: `${(i + delayOffset) * 0.2}s`,
            whiteSpace: 'nowrap',
          }}>
          {word}
        </span>
      ))}
    </Box>
  );
};

const HeaderSection: React.FC = () => {
  const t = useTranslations('home.header');
  const title = t('title');

  return (
    <Stack
      id="header-section"
      h={{ base: '887px', md: '1080px' }}
      pt={{ base: '275px', sm: '348px' }}
      px="38px"
      style={{
        backgroundImage: 'url(/assets/home/header/header-background.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      pos="relative">
      <Stack w="100%" justify="center" align="center">
        <AnimatedText text={title} />
      </Stack>
    </Stack>
  );
};

export default HeaderSection;
