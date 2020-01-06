// import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

// const Background = styled(LinearGradient).attrs({
//   colors: ['#7159c1', '#ab59c1'],
// })`
//   flex: 1;
// `;

const Background = styled.View`
  flex: 1;
  background: ${p => (p.color ? p.color : '#eee')};
`;

export default Background;
