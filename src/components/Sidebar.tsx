import "../styles/sidebar.css";

type SidebarProps = {
  onSelectChat: (chatName: string) => void;
};

export default function Sidebar({ onSelectChat }: SidebarProps) {
  const chats = [
    {
      name: "John Doe",
      lastMessage: "Hey, are you coming today?",
      time: "10:45 AM",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      lastMessage: "I'll send it later.",
      time: "09:12 AM",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Alex Johnson",
      lastMessage: "Thanks, talk soon!",
      time: "Yesterday",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    },
  ];

  return (
    <aside className="sidebar">
      <div className="search-bar">
        <input type="text" placeholder="Search users..." />
      </div>

      <div className="chat-list">
        {chats.map((chat) => (
          <div
            key={chat.name}
            className="chat-item"
            onClick={() => onSelectChat(chat.name)}
          >
            <img src={chat.avatar} alt={`${chat.name} avatar`} className="chat-avatar" />
            <div className="chat-info">
              <div className="chat-headers">
                <span className="chat-name">{chat.name}</span>
                <span className="chat-time">{chat.time}</span>
              </div>
              <div className="chat-preview">{chat.lastMessage}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="user-profile">
        <img
          src="https://randomuser.me/api/portraits/men/99.jpg"
          alt="User avatar"
          className="avatar"
        />
        <span className="username">MyUsername</span>
      </div>
    </aside>
  );
}
