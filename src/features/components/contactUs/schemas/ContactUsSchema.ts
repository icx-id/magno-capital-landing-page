import * as Yup from 'yup';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const phoneNumberRegex = /^(\+62|62)?[\s-]?0?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/;

export const ContactUsSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name must not be empty'),
  company: Yup.string().required('Company name must not be empty'),
  phoneNumber: Yup.string()
    .matches(phoneNumberRegex, 'Invalid phone number format')
    .required('Phone number must not be empty'),
  email: Yup.string()
    .matches(emailRegex, 'Invalid email format')
    .required('Email address must not be empty'),
  message: Yup.string().max(1000).required('Message must not be empty'),
});
