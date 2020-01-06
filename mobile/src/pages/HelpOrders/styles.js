import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  // contentContainerStyle: { padding: 30 },
})`
  margin-top: 25px;
`;

export const OrderButton = styled(Button)`
  color: red;
  border: none;
  border-radius: 4px;
`;
