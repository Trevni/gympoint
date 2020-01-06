import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container, Name, Time } from './styles';

export default function Checkin({ data }) {
  const parsedDate = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.createdAt]);

  return (
    <Container>
      <Name>{`Check-in #${data.id}`}</Name>
      <Time>{parsedDate}</Time>
    </Container>
  );
}
