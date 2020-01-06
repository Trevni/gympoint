import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '~/components/Background';
import { Container, Question, Answer, Title, Time } from './styles';

export default function HelpOrderDetails({ navigation }) {
  const helpOrder = navigation.getParam('helpOrder');

  const formattedDate = useMemo(
    () =>
      formatRelative(parseISO(helpOrder.created_at), new Date(), {
        locale: pt,
      }),
    [helpOrder.created_at]
  );

  console.tron.log(helpOrder);

  return (
    <Background>
      <Container>
        <Question>
          <Title>
            PERGUNTA
            <Time>{formattedDate}</Time>
          </Title>
          {helpOrder.question}
        </Question>
        <Answer>
          <Title>RESPOSTA</Title>
          {helpOrder.question}
        </Answer>
      </Container>
    </Background>
  );
}

// HelpOrderDetails.navigationOptions = {
//   tabBarLabel: 'Pedir ajuda',
//   tabBarIcon: ({ tintColor }) => (
//     <Icon name="live-help" size={20} color={tintColor} />
//   ),
// };

// export default withNavigationFocus(HelpOrders);
