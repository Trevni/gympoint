import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';
import Checkin from '~/components/Checkin';

import { Container, CheckinButton, List } from './styles';
import api from '~/services/api';

function Checkins({ isFocused }) {
  const [checkins, setCheckins] = useState([]);
  const user_id = useSelector(state => state.user.id);

  console.tron.log(user_id, checkins);

  async function loadCheckins() {
    const response = await api.get(`students/${user_id}/checkins`);

    setCheckins(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadCheckins();
    }
  }, [isFocused]); // eslint-disable-line

  async function handleNew() {
    await api.post(`students/${user_id}/checkins`);
    await loadCheckins();
  }

  return (
    <Background>
      <Container>
        <CheckinButton onPress={handleNew}>Novo check-in</CheckinButton>

        <List
          data={checkins.reverse()}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Checkin data={item} />}
        />
      </Container>
    </Background>
  );
}

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Checkins);
