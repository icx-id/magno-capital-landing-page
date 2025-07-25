export interface OurValuesProps {
  id: number;
  name: string;
  image: string;
  icon: string;
  descriptionOne: string;
  descriptionTwo: string;
  iconSize: {
    base: string;
    md: string;
  };
}

export const ourValuesData: OurValuesProps[] = [
  {
    id: 1,
    name: 'Strategic Alignment',
    image: '/assets/home/our-values/1.webp',
    icon: '/assets/home/our-values/shield.svg',
    descriptionOne: 'strategic_alignment.description_one',
    descriptionTwo: 'strategic_alignment.description_two',
    iconSize: {
      base: '122.72px',
      md: '161px',
    },
  },
  {
    id: 2,
    name: 'Quiet Strength',
    image: '/assets/home/our-values/2.webp',
    icon: '/assets/home/our-values/compass.svg',
    descriptionOne: 'quiet_strength.description_one',
    descriptionTwo: 'quiet_strength.description_two',
    iconSize: {
      base: '125.77px',
      md: '165px',
    },
  },
  {
    id: 3,
    name: 'Catalysts for the Next Phase',
    image: '/assets/home/our-values/3.webp',
    icon: '/assets/home/our-values/target.svg',
    descriptionOne: 'catalysts.description_one',
    descriptionTwo: 'catalysts.description_two',
    iconSize: {
      base: '109.76px',
      md: '144px',
    },
  },
];
