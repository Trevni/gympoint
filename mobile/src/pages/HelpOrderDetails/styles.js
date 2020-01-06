import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Question = styled.View`
  flex: 1;
  font-size: 14px;
  color: #666;
  line-height: 26px;
`;

export const Answer = styled.View`
  flex: 1;
  font-size: 14px;
  color: #666;
  line-height: 26px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #444;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Time = styled.Text`
  font-weight: normal;
  font-size: 14px;
  color: #666;
`;
