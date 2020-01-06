import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';
import HelpOrder from '~/components/HelpOrder';

import { Container, List, OrderButton } from './styles';
import api from '~/services/api';

function HelpOrders({ isFocused, navigation }) {
  const [helpOrders, setHelpOrders] = useState([]);
  const user_id = useSelector(state => state.user.id);

  console.tron.log(user_id, helpOrders);

  async function loadHelpOrders() {
    const response = await api.get(`students/${user_id}/help-orders`);

    setHelpOrders(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadHelpOrders();
    }
  }, [isFocused]); // eslint-disable-line

  function handleNew() {
    navigation.navigate('NewHelpOrder');
  }

  return (
    <Background>
      <Container>
        <OrderButton onPress={handleNew}>Novo pedido de auxilio</OrderButton>

        <List
          data={helpOrders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <HelpOrder data={item} />}
        />
      </Container>
    </Background>
  );
}

HelpOrders.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(HelpOrders);
