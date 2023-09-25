import { Outlet } from 'react-router-dom';
import background from './img/background.png';
import styled from 'styled-components';

const Background = styled.div({
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  height: '100vh'
});

export function Layout() {
  return (
    <Background>
      <Outlet />
    </Background>
  );
}
