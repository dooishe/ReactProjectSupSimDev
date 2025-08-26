import ChatMessage from "../ChatMessage/ChatMessage";
import useAutoScroll from "../../hooks/useAutoScroll";
import styles from "./ChatMessages.module.css";
function ChatMessages({ chatMessages }) {
  const messagesEndRef = useAutoScroll(chatMessages);
  return (
    <div className={styles.chatMessagesContainer}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            key={chatMessage.id}
            message={chatMessage.message}
            sender={chatMessage.sender}
          />
        );
      })}
      <div ref={messagesEndRef}></div>
    </div>
  );
}

export default ChatMessages;
