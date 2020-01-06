import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import logo from '~/assets/logo.png';

import { Container, Title, Form, FormInput, SubmitButton } from './styles';

import Background from '~/components/Background';
import { signInRequest } from '../../store/modules/auth/actions';
import Logo from '../../components/Logo/index';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [id, setId] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Background color="#fff">
      <Container>
        <Logo size={50} />
        <Title>GYMPOINT</Title>

        <Form>
          <FormInput
            // icon="lock-outline"
            // keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe seu ID de cadastro"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={id}
            onChangeText={setId}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Entrar no sistema
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
