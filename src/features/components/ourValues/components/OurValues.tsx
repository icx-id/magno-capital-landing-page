'use client';

import { Flex, Grid, GridCol } from '@mantine/core';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ourValuesData } from '../static';
import OurValuesCard from './OurValuesCard';
import { useMediaQuery } from '@mantine/hooks';

const OurValues: React.FC = () => {
  const desktop = useMediaQuery(`(min-width: 1200px)`);

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      },
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const animationCondition = useMemo(() => {
    if (desktop) {
      return visible;
    }
    return true;
  }, [desktop, visible]);

  return (
    <Flex
      id="our-values-section"
      pb={{ base: '80px', md: '133px' }}
      w="100%"
      ref={ref}
      style={{ backgroundColor: '#202020' }}>
      <Grid
        gutter={0}
        w="100%"
        style={{
          opacity: animationCondition ? 1 : 0,
          transform: animationCondition ? 'translateY(0px)' : 'translateY(40px)',
          transition: 'opacity 0.2s linear, transform 0.2s linear',
        }}>
        {React.Children.toArray(
          ourValuesData.map(ourValue => (
            <GridCol key={ourValue.id} span={{ base: 12, md: 4 }}>
              <OurValuesCard {...ourValue} />
            </GridCol>
          )),
        )}
      </Grid>
    </Flex>
  );
};

export default OurValues;
