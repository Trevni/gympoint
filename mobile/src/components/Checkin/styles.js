import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #444;
`;

export const Time = styled.Text`
  font-size: 14px;
  color: #666;
`;
