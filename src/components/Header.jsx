import React from 'react';
import styled from '@emotion/styled';

const ContainerHeader = styled.header`
  background: #333;
  margin-bottom: 25px;
  padding: 15px 0;
`;

const H1 = styled.h1`
  color: #FFFFFF;
  font-family: 'Lobster', cursive;
  padding: 0 20px;
`;

const Header = () => {
  return (
    <ContainerHeader>
      <H1>Películas</H1>
    </ContainerHeader>
  );
}

export default Header;