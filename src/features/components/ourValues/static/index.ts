export interface OurValuesProps {
  id: number;
  name: string;
  image: string;
  icon: string;
  description: string;
  iconSize: {
    base: string;
    md: string;
  };
}

export const ourValuesData: OurValuesProps[] = [
  {
    id: 1,
    name: 'Clarity in Growth',
    image: '/assets/home/our-values/clarity-in-growth.webp',
    icon: '/assets/home/our-values/shield.svg',
    description: 'description_one',
    iconSize: {
      base: '122.72px',
      md: '161px',
    },
  },
  {
    id: 2,
    name: 'Strategic Access',
    image: '/assets/home/our-values/strategic-access.webp',
    icon: '/assets/home/our-values/compass.svg',
    description: 'description_two',
    iconSize: {
      base: '125.77px',
      md: '165px',
    },
  },
  {
    id: 3,
    name: 'True Partnership',
    image: '/assets/home/our-values/true-partnership.webp',
    icon: '/assets/home/our-values/target.svg',
    description: 'description_three',
    iconSize: {
      base: '109.76px',
      md: '144px',
    },
  },
];
