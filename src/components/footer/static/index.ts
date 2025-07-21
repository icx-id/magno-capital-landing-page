export type MagnoCapitalContacts = {
  id: number;
  name: string;
  image: string;
  info: string;
  fontSize: {
    base: string;
    md: string;
  };
};

export const magnoCapitalContacts: MagnoCapitalContacts[] = [
  {
    id: 1,
    name: 'Tel',
    image: '/assets/footer/ic_phone.svg',
    info: '+62 21 51401627',
    fontSize: {
      base: '32px',
      md: '25.6px',
    },
  },
  {
    id: 2,
    name: 'Whatsapp',
    image: '/assets/footer/ic_whatsapp.svg',
    info: '+6281381862878',
    fontSize: {
      base: '39px',
      md: '31.2px',
    },
  },
  {
    id: 3,
    name: 'Mail',
    image: '/assets/footer/ic_mail.svg',
    info: 'corporate@icxgroup.id',
    fontSize: {
      base: '32px',
      md: '25.6px',
    },
  },
];
