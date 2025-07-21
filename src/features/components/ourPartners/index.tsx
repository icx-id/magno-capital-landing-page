import { Box, Container, Flex, Text } from '@mantine/core';
import React from 'react';
import OurPartners from './components/OurPartners';

const OurPartnersSection = () => {
  return (
    <Box
      id="our-partners-section"
      //   pt={{ base: '54px', md: '187.3px', lg: '220px', xl: '208.8px' }}
      pb={{ base: '78.37px', md: '171px' }}
      style={{
        backgroundColor: '#202020',
      }}>
      <Container fluid px={{ base: '22px', md: '82px' }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          w="100%"
          gap={{ base: '44px', md: '77px' }}>
          <Text fw={300} fz={{ base: '48px', md: '64px' }} c="white">
            Our Partners
          </Text>
          <OurPartners />
        </Flex>
      </Container>
    </Box>
  );
};

export default OurPartnersSection;
