import './Main.scss';

import { ChatsList } from '../../components/chatsList/ChatsList';
import { NavBar } from '../../components/navbar/Navbar';
import { ChatSpace } from '../../components/chatSpace/ChatSpace';
import { AboutUser } from '../../components/aboutUser/AboutUser';

export function Main() {
  return (
    <div className="main">
      <NavBar />
      <ChatsList />
      <ChatSpace />
      <AboutUser />
    </div>
  );
}
