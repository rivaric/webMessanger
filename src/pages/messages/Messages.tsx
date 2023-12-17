import './Messages.scss';

import { ChatsList } from '../../components/chatsList/ChatsList';
import { NavBar } from '../../components/navbar/Navbar';
import { ChatSpace } from '../../components/chatSpace/ChatSpace';
import { AboutUser } from '../../components/aboutUser/AboutUser';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Messages() {
  const navigate = useNavigate();

  useEffect(() => {
    !localStorage.getItem('accses_token') ? navigate('/login') : null;
  });

  return (
    <div className="main">
      <NavBar />
      <ChatsList />
      <ChatSpace />
      <AboutUser />
    </div>
  );
}
