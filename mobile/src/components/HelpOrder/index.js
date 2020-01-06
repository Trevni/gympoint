import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Question, Info, Status, StatusText, Time } from './styles';

export default function HelpOrder({ data }) {
  const parsedDate = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.createdAt]);

  return (
    <Container past={data.past}>
      <Info>
        {data.answerAt ? (
          <Status color="#42cb59">
            <Icon name="check-circle" size={20} color="#42cb59" />
            <StatusText>Respondido</StatusText>
          </Status>
        ) : (
          <Status color="#999">
            <Icon name="check-circle" size={20} color="#999" />
            <StatusText>Sem Resposta</StatusText>
          </Status>
        )}
        <Time>{parsedDate}</Time>
      </Info>
      <Question>{data.question}</Question>
    </Container>
  );
}
