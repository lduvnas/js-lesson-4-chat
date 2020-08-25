import React from "react";

export default function MessageList({ chatRoom }) {
  return (
    <div className="message-list">
      {chatRoom &&
        chatRoom.messages &&
        Object.entries(chatRoom.messages)
          .reverse()
          .map(item => {
            const key = item[0];
            const payload = item[1];
            return (
              <div className="alert alert-primary w-100" key={key}>
                {payload.message}
              </div>
              /*  <li className="list-group-item" key={key}>
                {payload.message}
              </li> */
            );
          })}
    </div>
  );
}
