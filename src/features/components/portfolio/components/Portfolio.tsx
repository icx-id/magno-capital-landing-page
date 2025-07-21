import React from 'react';
import { Grid, GridCol } from '@mantine/core';
import { portflioData } from '../static';
import { PortflioCard } from './PortfolioCard';

const Portfolio: React.FC = () => (
  <Grid gutter={{ base: 57, xl: 90 }} w="100%">
    {React.Children.toArray(
      portflioData.map(data => (
        <GridCol key={data.id} span={{ base: 12, md: 4 }}>
          <PortflioCard {...data} />
        </GridCol>
      )),
    )}
  </Grid>
);

export default Portfolio;
