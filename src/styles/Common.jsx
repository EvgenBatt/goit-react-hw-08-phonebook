import styled from '@emotion/styled';

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1200px',
};

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: ${breakpoints.mobile}) {
    max-width: ${breakpoints.mobile};
  }

  @media (min-width: ${breakpoints.tablet}) {
    max-width: ${breakpoints.tablet};
  }

  @media (min-width: ${breakpoints.laptop}) {
    max-width: ${breakpoints.laptop};
  }
`;

export const Section = styled.section`
  padding-top: 25px;
  padding-bottom: 25px;
`;
