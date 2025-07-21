export interface PortflioProps {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const portflioData: PortflioProps[] = [
  {
    id: 1,
    name: 'Olaif',
    image: '/assets/home/portfolio/olaif.webp',
    description: 'olaif',
  },
  {
    id: 2,
    name: 'Bythen',
    image: '/assets/home/portfolio/bythen.webp',
    description: 'bythen',
  },
  {
    id: 3,
    name: 'ICX',
    image: '/assets/home/portfolio/icx.webp',
    description: 'icx',
  },
];
