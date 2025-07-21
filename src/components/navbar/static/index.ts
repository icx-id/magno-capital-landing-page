export type NavbarMenu = {
  id: number;
  name: string;
  href: string;
};

export const navbarMenus: NavbarMenu[] = [
  {
    id: 1,
    name: 'About Us',
    href: 'about-us-section',
  },
  {
    id: 2,
    name: 'Our Values',
    href: 'our-values-section',
  },
  {
    id: 3,
    name: 'Portfolio',
    href: 'portfolio-section',
  },
  // {
  //     id: 4,
  //     name: 'Our Partners',
  //     href: 'partners-section',
  // },
  // {
  //     id: 5,
  //     name: 'Contact Us',
  //     href: 'contact-us-section',
  // },
];
