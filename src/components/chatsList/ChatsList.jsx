// import { SearchIcon } from './icon/SearchIcon';
import './ChatsList.scss';

import { ChatItem } from '../chatItem/ChatItem';

export function ChatsList() {
  return (
    <div className="chats-list-background">
      <h1>Message</h1>
      <input placeholder="Search for chats" className="search-chats" />
      <div className="chats-list">
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  );
}
