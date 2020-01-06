import React from 'react';
import { StatusBar } from 'react-native';

import Logo from '~/components/Logo/index';

import { Wrapper, Container, Title } from './styles';

export default function AppStatusBar() {
  return (
    <Wrapper>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        <Logo size={22} />
        <Title>GYMPOINT</Title>
      </Container>
    </Wrapper>
  );
}
