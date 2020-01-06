import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Background from '~/components/Background';
import { Container, TextAreaContainer, TextArea, OrderButton } from './styles';
import api from '~/services/api';

export default function NewHelpOrder({ navigation }) {
  const user_id = useSelector(state => state.user.id);

  const [question, setQuestion] = useState('');

  async function handleAddHelpOrder() {
    await api.post(`students/${user_id}/help-orders`, {
      question,
    });

    navigation.navigate('HelpOrders');
  }

  return (
    <Background>
      <Container>
        <TextAreaContainer>
          <TextArea
            placeholder="Inclua seu pedido de auxílio"
            value={question}
            onChangeText={setQuestion}
          />
        </TextAreaContainer>
        <OrderButton onPress={handleAddHelpOrder}>Enviar pedido</OrderButton>
      </Container>
    </Background>
  );
}
