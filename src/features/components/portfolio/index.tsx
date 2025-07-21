import { Box, Container, Text } from '@mantine/core';
import React from 'react';
import Portfolio from './components/Portfolio';

const PortfolioSection = () => {
  return (
    <Box
      id="portfolio-section"
      pb={{ base: '118.48px', md: '307px' }}
      style={{
        backgroundColor: '#202020',
      }}>
      <Container fluid px={{ base: '28px', md: '82px' }}>
        <Text fw={300} fz={{ base: '48px', md: '96px' }} c="white">
          Portfolio
        </Text>
        <Portfolio />
      </Container>
    </Box>
  );
};

export default PortfolioSection;
