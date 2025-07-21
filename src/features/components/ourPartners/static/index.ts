export type OurPartner = {
  id: number;
  name: string;
  image: string;
  paragraphOne: string;
  paragraphOnePartTwo?: string;
  paragraphTwo: string;
  paragraphThree?: string;
};

export const ourPartners: OurPartner[] = [
  {
    id: 1,
    name: 'Romario Sumargo',
    image: '/assets/home/our-partners/romario-sumargo.webp',
    paragraphOne: 'description.romario_sumargo.first_paragraph',
    paragraphTwo: 'description.romario_sumargo.second_paragraph',
  },
  {
    id: 2,
    name: 'Tomy',
    image: '/assets/home/our-partners/tomy.webp',
    paragraphOne: 'description.tomy.first_paragraph',
    paragraphOnePartTwo: 'description.tomy.first_paragraph_two',
    paragraphTwo: 'description.tomy.second_paragraph',
    paragraphThree: 'description.tomy.third_paragraph',
  },
];
