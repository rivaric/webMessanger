import { useState } from 'react';
import './CreateAndAddChat.scss';
import Done from './icon/Done';
import { createChat } from '../../api/createChat';
import { getUserData } from '../../api/getUserData';
import { useUserStore } from '../../store/useUserStore';
import { createInvate } from '../../api/createInvate';
import { acceptInvate } from '../../api/acceptInvate';

export default function CreateAndAddChat() {
  const [joinLink, setJoinLink] = useState('');
  const [chatName, setChatName] = useState('');
  const setUser = useUserStore((state) => state.setUser);

  return (
    <div className="background">
      <div className="wrapper">
        <input
          type="text"
          className="create"
          placeholder="Create chat"
          value={chatName}
          onChange={(e) => setChatName(e.currentTarget.value)}
        />
        <button
          className="create-btn"
          onClick={() => {
            createChat(chatName).then(({ data }) => {
              getUserData()
                .then(({ data }) => {
                  setUser(data);
                })
                .catch((data) => {
                  console.log(data);
                });
              createInvate(data.id).then(({ data }) => {
                setChatName(data.id);
              });
            });
          }}>
          <Done />
        </button>
      </div>
      <hr />
      <div className="wrapper">
        <input
          type="text"
          className="add"
          placeholder="Join the chat using the link"
          value={joinLink}
          onChange={(e) => setJoinLink(e.currentTarget.value)}
        />
        <button
          className="create-btn"
          onClick={() => {
            acceptInvate(joinLink).then(() => {
              getUserData()
                .then(({ data }) => {
                  setUser(data);
                })
                .catch((data) => {
                  console.log(data);
                });
            });
          }}>
          <Done />
        </button>
      </div>
    </div>
  );
}
