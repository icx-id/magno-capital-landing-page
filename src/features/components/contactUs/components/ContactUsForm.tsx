'use client';

import { Form, Formik } from 'formik';
import React from 'react';
import { ContactUsSchema } from '../schemas/ContactUsSchema';
import { Button, Stack, Text, Textarea, TextInput } from '@mantine/core';

interface ErrorLabelProps {
  children: string;
}

interface ContactUsFormValues {
  fullName: string;
  company: string;
  phoneNumber: string;
  email: string;
  message: string;
}

const ErrorLabel: React.FC<ErrorLabelProps> = ({ children }) => (
  <Text c="red" fw={400} fz={{ base: '12px', md: '12.8px' }} mt="3.2px">
    {children}
  </Text>
);

const ContactUsForm: React.FC = () => {
  return (
    <Formik
      validationSchema={ContactUsSchema}
      initialValues={{
        fullName: '',
        company: '',
        phoneNumber: '',
        email: '',
        message: '',
      }}
      onSubmit={(values: ContactUsFormValues, { resetForm }) => {
        const mailContact = 'raffaelwdj@gmail.com';
        const { fullName, company, phoneNumber, email, message } = values;

        const subject = `Magno Capital Enquiry from ${fullName}`;

        const mailMessage = `Halo Magno Capital Group, saya: 
                \nNama: ${fullName} 
                \nCompany: ${company} 
                \nEmail: ${email} 
                \nPhone Number: ${phoneNumber} 
                \n\nMessage: \n${message}`;

        const encodedMessage = encodeURIComponent(mailMessage);

        const mailtoLink = `mailto:${mailContact}?subject=${subject}&body=${encodedMessage}`;
        window.location.href = mailtoLink;

        resetForm();
      }}>
      {({ getFieldProps, values, errors, touched }) => (
        <Form>
          <Stack w="100%" maw={{ md: '446.4px' }}>
            {/* Full Name */}
            <Stack w="100%">
              <TextInput
                {...getFieldProps('fullName')}
                variant="unstyled"
                w="100%"
                placeholder="Full Name"
                c="white"
                fw={400}
                fz="16px"
                style={{
                  backgroundColor: 'transparent',
                  borderBottom: '1px solid #D9D9D9',
                }}
                styles={{
                  input: {
                    color: 'white',
                    fontWeight: 400,
                    fontSize: '16px',
                  },
                }}
              />
              {errors.fullName && touched.fullName && <ErrorLabel>{errors.fullName}</ErrorLabel>}
            </Stack>

            {/* Company */}
            <Stack w="100%" mt={{ base: '23px', md: '22.4px' }}>
              <TextInput
                {...getFieldProps('company')}
                variant="unstyled"
                w="100%"
                placeholder="Company Name"
                c="white"
                fw={400}
                fz="16px"
                style={{
                  backgroundColor: 'transparent',
                  borderBottom: '1px solid #D9D9D9',
                }}
                styles={{
                  input: {
                    color: 'white',
                    fontWeight: 400,
                    fontSize: '16px',
                  },
                }}
              />
              {errors.company && touched.company && <ErrorLabel>{errors.company}</ErrorLabel>}
            </Stack>

            {/* Phone Number */}
            <Stack w="100%" mt={{ base: '23px', md: '22.4px' }}>
              <TextInput
                {...getFieldProps('phoneNumber')}
                variant="unstyled"
                w="100%"
                placeholder="Phone Number"
                c="white"
                fw={400}
                fz="16px"
                style={{
                  backgroundColor: 'transparent',
                  borderBottom: '1px solid #D9D9D9',
                }}
                styles={{
                  input: {
                    color: 'white',
                    fontWeight: 400,
                    fontSize: '16px',
                  },
                }}
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <ErrorLabel>{errors.phoneNumber}</ErrorLabel>
              )}
            </Stack>

            {/* Email */}
            <Stack w="100%" mt={{ base: '23px', md: '22.4px' }}>
              <TextInput
                {...getFieldProps('email')}
                variant="unstyled"
                w="100%"
                placeholder="Email Address"
                c="white"
                fw={400}
                fz="16px"
                style={{
                  backgroundColor: 'transparent',
                  borderBottom: '1px solid #D9D9D9',
                  '.input': {
                    color: 'white',
                  },
                }}
                styles={{
                  input: {
                    color: 'white',
                    fontWeight: 400,
                    fontSize: '16px',
                  },
                }}
              />
              {errors.email && touched.email && <ErrorLabel>{errors.email}</ErrorLabel>}
            </Stack>

            {/* message */}
            <Stack w="100%" mt={{ base: '23px', md: '22.4px' }}>
              <Textarea
                {...getFieldProps('message')}
                variant="unstyled"
                w="100%"
                placeholder="Message"
                c="white"
                fw={400}
                fz="16px"
                style={{
                  backgroundColor: 'transparent',
                  borderBottom: '1px solid #D9D9D9',
                  '.input': {
                    color: 'white',
                  },
                }}
                styles={{
                  input: {
                    color: 'white',
                    fontWeight: 400,
                    fontSize: '16px',
                  },
                }}
                rows={1}
              />
              <Text fw={400} fz="11.2px" c="#FFFFFF7A" ta="right">
                {values.message.length}/1000 Characters
              </Text>
              {errors.message && touched.message && <ErrorLabel>{errors.message}</ErrorLabel>}
            </Stack>

            <Button
              w="100%"
              c="black"
              type="submit"
              mt={{ base: '55px', md: '44px' }}
              h={{ base: '47px', md: '45.6px' }}
              p="8px 6.4px"
              style={{
                backgroundColor: 'white',
              }}>
              Send
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
