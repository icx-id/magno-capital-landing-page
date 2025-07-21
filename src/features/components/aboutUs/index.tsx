'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { useTranslations } from 'next-intl';

const AboutUsSection: React.FC = () => {
  const t = useTranslations('home.about_us');

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% visible
      },
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <Stack
      id="about-us-section"
      ref={ref}
      h={{ base: '843.2px', md: '900px', xl: '1281px' }}
      pt={{ base: '88px', md: '115px' }}
      px="9px"
      style={{
        backgroundImage: 'url(/assets/home/about-us/about-us-background.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      pos="relative">
      <Stack justify="center" align="center">
        <Text
          fw={400}
          fz={{ base: '32px', md: '64px' }}
          lh="100%"
          c="black"
          ta="center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0px)' : 'translateY(40px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}>
          About Us
        </Text>
        <Text
          fw={400}
          fz={{ base: '16px', md: '32px' }}
          ta="center"
          c="black"
          mt={{ base: '24px', md: '15px' }}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0px)' : 'translateY(40px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
          maw={{ md: '687px' }}>
          {t('description_one')} <br />
          {t('description_two')} <br />
          {t('description_three')}
        </Text>
      </Stack>
    </Stack>
  );
};

export default AboutUsSection;
