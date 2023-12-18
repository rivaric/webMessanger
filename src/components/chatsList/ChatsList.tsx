// import { SearchIcon } from './icon/SearchIcon';
import './ChatsList.scss';

import { ChatItem } from '../chatItem/ChatItem';
import { useUserStore } from '../../store/useUserStore';
import CreateAndAddChat from '../createAndAddChat/CreateAndAddChat';

export function ChatsList() {
  const rooms = useUserStore((state) => state.user.rooms);

  console.log(rooms);

  return (
    <div className="chats-list-background">
      <h1>Message</h1>
      <input placeholder="Search for chats" className="search-chats" />
      <div className="chats-list">
        {rooms?.map(({ name, id }) => <ChatItem name={name} key={id} id={id} />)}
      </div>
      <CreateAndAddChat />
    </div>
  );
}
