import React from 'react';

import logo_left from '../../assets/logo_left.png';
import logo_right from '../../assets/logo_right.png';

import { Container, Left, Right, DotWrapper, Dot, LogoImage } from './styles';

export default function Logo(props) {
  console.tron.log(props);
  return (
    <Container {...props}>
      <Left {...props}>
        <LogoImage source={logo_left} {...props} />
        <DotWrapper {...props}>
          <Dot {...props} />
        </DotWrapper>
      </Left>
      <Right {...props}>
        <LogoImage source={logo_right} {...props} />
        <DotWrapper {...props}>
          <Dot {...props} />
        </DotWrapper>
      </Right>
    </Container>
  );
}
