import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 30px;
`;

export const TextAreaContainer = styled.View`
  background: #fff;
  border: 1px solid #ccc;
  padding: 5px;
`;

export const TextArea = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 8,
})`
  padding: 15px;
  height: 150px;
  justify-content: flex-start;
  text-align-vertical: top;
`;

export const OrderButton = styled(Button)`
  color: red;
  border: none;
  border-radius: 4px;
  margin-top: 25px;
`;
