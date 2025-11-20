export function MessagePage(){
  return (
    <div className="container">

    <div className="sidebar">
      <div className="tabs">
        <div className="tab">All</div>
        <div className="tab">Unread</div>
        <div className="tab">Groups</div>
        <div className="tab">Spam</div>
      </div>

      <div className="chat-item">
        <div className="avatar"></div>
        <div className="chat-info">
          <div className="chat-name">Friend Name</div>
          <div className="chat-preview">pre pautang muna limang libo balik ko din sa next week…</div>
        </div>
      </div>

      <div className="chat-item">
        <div className="avatar"></div>
        <div className="chat-info">
          <div className="chat-name">Client Name</div>
          <div className="chat-preview">Good morning sir, I hope you're doing well...</div>
        </div>
      </div>

      <div className="chat-item">
        <div className="avatar"></div>
        <div className="chat-info">
          <div className="chat-name">Friend2 Name</div>
          <div className="chat-preview">bol, potulong ako sa ginawa ko…</div>
        </div>
      </div>

    </div>

    <div className="chat-window">
      <div className="chat-header">Friend Name</div>

      <div className="messages">
        <div className="bubble">pre pautang muna limang libo balik ko din sa next week…</div>
      </div>

      <div className="input-area">
        <input className="input-box" type="text" placeholder="Write a message..." />
        <button className="send-btn">➤</button>
      </div>
    </div>

  </div>
  )
}