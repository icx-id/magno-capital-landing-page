import React from 'react';
import { ourPartners } from '../static';
import OurPartnersCard from './OurPartnersCard';
import { Grid, GridCol } from '@mantine/core';

const OurPartners: React.FC = () => (
  <Grid gutter={{ base: 57, md: 112 }} w="100%">
    {React.Children.toArray(
      ourPartners.map(partner => (
        <GridCol key={partner.id} span={{ base: 12, sm: 6, md: 12, xl: 6 }}>
          <OurPartnersCard {...partner} />
        </GridCol>
      )),
    )}
  </Grid>
);

export default OurPartners;
