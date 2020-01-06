import styled from 'styled-components/native';

export const Container = styled.View`
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;

  display: flex;
  align-items: flex-start;
`;

export const Question = styled.Text`
  color: #666;
  font-size: 14px;
  line-height: 26px;

  margin-top: 4px;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;

export const Status = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${({ color }) => color};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StatusText = styled.Text``;

export const Time = styled.Text`
  color: #666;
  font-size: 14px;
`;
