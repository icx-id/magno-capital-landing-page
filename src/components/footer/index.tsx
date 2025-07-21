'use client';

import { Box, Flex, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import { magnoCapitalContacts } from './static';

interface MagnoCapitalContactCardProps {
  name: string;
  image: string;
  info: string;
  fontSize: {
    base: string;
    md: string;
  };
}

const MagnoCapitalContactCard: React.FC<MagnoCapitalContactCardProps> = props => {
  const { name, image, info, fontSize } = props;
  return (
    <Flex direction="row" gap={{ base: '12px', md: '9.6' }}>
      <Box w={fontSize} h={fontSize} pos="relative">
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </Box>
      <Flex
        direction="column"
        gap={{ base: '2px', md: '1.6px' }}
        fz={{ base: '16px', md: '12.8px' }}
        lh="20.83px">
        <Text inherit c="#4B5768" fw={400}>
          {name}
        </Text>
        <Text inherit c="#9E9D9D" fw={500}>
          {info}
        </Text>
      </Flex>
    </Flex>
  );
};

const Footer: React.FC = () => {
  return (
    <Box
      id="footer"
      p={{ base: '82px 36px', md: '40px 64px' }}
      style={{
        backgroundColor: '#161515',
        overflowX: 'hidden',
      }}>
      <Stack>
        <Flex w="100%" direction={{ base: 'column', md: 'row' }} justify="space-between">
          <Stack>
            <Flex justify={{ base: 'center', md: 'start' }}>
              <Box
                w={{ base: '165px', md: '239px' }}
                h={{ base: '41px', md: '59px' }}
                pos="relative">
                <Image
                  src="/assets/common/magno-capital-logo.webp"
                  alt="magno-capital"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Flex>
            <Text
              fz="20px"
              fw={400}
              lh="30px"
              mt={{ base: '76px', md: '37px' }}
              maw="522px"
              c="white">
              BEI Tower 1 Lt. 17, Unit 1709 Jl. Jend. Sudirman Kav. 52-53 Senayan, Kby. Baru Jakarta
              Selatan 12190
            </Text>
          </Stack>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: '40px', md: '80px' }}
            mt={{ base: '65px', md: 0 }}>
            {React.Children.toArray(
              magnoCapitalContacts.map(magnoCapitalContact => {
                return (
                  <MagnoCapitalContactCard
                    key={magnoCapitalContact.id}
                    name={magnoCapitalContact.name}
                    image={magnoCapitalContact.image}
                    info={magnoCapitalContact.info}
                    fontSize={magnoCapitalContact.fontSize}
                  />
                );
              }),
            )}
          </Flex>
        </Flex>

        <Flex
          w="100%"
          direction={{ base: 'column', md: 'row' }}
          justify="end"
          py={{ md: '19.2px' }}
          mt={{ base: '24px', md: '0' }}>
          <Text
            ta={{ md: 'right' }}
            fw={400}
            fz={{ base: '16px', md: '12.8px' }}
            lh={{ base: '20.83px', md: '16.68px' }}
            c="white"
            mt={{ base: '90px', md: 0 }}>
            © 2025 MAGNO CAPITAL. All Rights Reserved.
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Footer;
