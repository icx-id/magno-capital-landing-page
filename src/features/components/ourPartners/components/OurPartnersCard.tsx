'use client';

import React from 'react';
import { OurPartner } from '../static';
import { Box, Flex, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const OurPartnersCard: React.FC<OurPartner> = props => {
  const { name, image, paragraphOne, paragraphOnePartTwo, paragraphTwo, paragraphThree } = props;
  const t = useTranslations('home.our_partners');

  return (
    <Stack>
      <Flex w="100%" justify="center">
        <Box
          w="100%"
          maw={{ base: '330px', md: '540px' }}
          h={{ base: '386px', md: '637px' }}
          pos="relative">
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </Box>
      </Flex>

      <Text
        fw={300}
        fz={{ base: '29.07px', md: '48px' }}
        c="white"
        mt={{ base: '43.94px', md: '73px' }}>
        {name}
      </Text>

      <Text
        fw={300}
        fz={{ base: '16px', md: '24px' }}
        c="white"
        mt={{ base: '11.63px', md: '19px' }}>
        {t(paragraphOne)}
      </Text>

      {paragraphOnePartTwo && (
        <Text
          fw={300}
          fz={{ base: '16px', md: '24px' }}
          c="white"
          mt={{ base: '11.63px', md: '19px' }}>
          {t(paragraphOnePartTwo)}
        </Text>
      )}

      {paragraphTwo && (
        <Text
          fw={300}
          fz={{ base: '16px', md: '24px' }}
          c="white"
          mt={{ base: '11.63px', md: '19px' }}>
          {t(paragraphTwo)}
        </Text>
      )}

      {paragraphThree && (
        <Text
          fw={300}
          fz={{ base: '16px', md: '24px' }}
          c="white"
          mt={{ base: '11.63px', md: '19px' }}>
          {t(paragraphThree)}
        </Text>
      )}
    </Stack>
  );
};

export default OurPartnersCard;
