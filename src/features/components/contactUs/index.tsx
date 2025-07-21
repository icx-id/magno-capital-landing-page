import { Box, Container, Flex, Text } from '@mantine/core';
import React from 'react';
import ContactUsForm from './components/ContactUsForm';

const ContactUsSection = () => {
  return (
    <Box
      id="contact-us-section"
      pt={{ base: '85px', md: '100.8px' }}
      pb={{ base: '66px', md: '98.4px' }}
      style={{
        backgroundColor: '#161515',
      }}>
      <Container fluid px={{ base: '36px', md: '48px' }} maw="1224.8px">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          w="100%"
          gap={{ base: '54px', md: '19.2px' }}>
          <Flex direction="column" align="start" justify="center">
            <Text fw={600} fz="16px" c="white" ta="start">
              Contact Us
            </Text>
            <Text
              fw={600}
              fz={{ base: '48px', md: '64px' }}
              c="white"
              mt={{ base: '12px', md: '32px' }}>
              Get in touch
            </Text>
            <Text fw={400} fz="16px" c="white" mt={{ base: '14px', md: '28px' }}>
              We’d love to hear from you. Please fill out this form.
            </Text>
          </Flex>
          <Box w={{ base: '100%', md: '446.4px' }}>
            <ContactUsForm />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactUsSection;
