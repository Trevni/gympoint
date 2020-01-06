import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Right = styled.View`
  position: relative;
  left: -${({ size }) => (13 * size) / 62}px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => (53 * size) / 62}px;
`;

export const Left = styled.View`
  position: relative;
  left: ${({ size }) => (13 * size) / 62}px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => (53 * size) / 62}px;
`;

export const LogoImage = styled(Image)`
  position: absolute;

  width: ${({ size }) => size}px;
  height: ${({ size }) => (53 * size) / 62}px;
`;

export const DotWrapper = styled.View`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => (53 * size) / 62}px;
  /* background: #ee4d64; */

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.View`
  /* display: inline-block; */
  background: #ee4d64;
  width: ${({ size }) => (4 * size) / 62}px;
  height: ${({ size }) => (4 * size) / 62}px;
  border-radius: ${({ size }) => (4 * size) / 124}px;
`;
