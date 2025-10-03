import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/lobby.css";

export default function Lobby() {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [messages, setMessages] = useState<{ text: string; fromMe: boolean }[]>([]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { text, fromMe: true }]);
  };

  return (
    <div className="lobby-container">
      <Sidebar onSelectChat={setActiveChat} />

      <main className="chat-area">
        {!activeChat ? (
          <div className="chat-placeholder">
            <h2>Welcome to the Lobby</h2>
            <p>Select a chat from the left to start messaging.</p>
          </div>
        ) : (
          <div className="chat-window">
            <header className="chat-header">{activeChat}</header>

            <div className="chat-messages">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`message ${msg.fromMe ? "sent" : "received"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <ChatInput onSend={handleSendMessage} />
          </div>
        )}
      </main>
    </div>
  );
}

function ChatInput({ onSend }: { onSend: (text: string) => void }) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
