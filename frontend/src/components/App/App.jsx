import { useState } from "react";
import ChatInput from "../ChatInput/ChatInput";
import ChatMessages from "../ChatMessages/ChatMessages";
import styles from "./App.module.css";
function App() {
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInputPosition, setChatInputPosition] = useState("top");
  function changeChatInputPosition(event) {
    const swithcerText = event.target.innerText;
    if (swithcerText === "Move textbox to bottom") {
      setChatInputPosition("bottom");
    } else if (swithcerText === "Move textbox to top") {
      setChatInputPosition("top");
    }
  }
  return (
    <div className={styles.jsContainer}>
      <div
        className={
          chatInputPosition === "bottom"
            ? `${styles.chatbotContainer} ${styles.chatbotContainerBottom}`
            : `${styles.chatbotContainer} ${styles.chatbotContainerTop}`
        }
      >
        <div className={styles.positionSwitcherContainer}>
          <a
            onClick={changeChatInputPosition}
            className={styles.positionSwitcher}
          >
            {chatInputPosition === "top"
              ? "Move textbox to bottom"
              : "Move textbox to top"}
          </a>
        </div>

        {chatInputPosition === "top" && (
          <ChatInput
            setChatMessages={setChatMessages}
            chatMessages={chatMessages}
          />
        )}
        {chatMessages.length === 0 && (
          <p className={styles.welcomeMessage}>
            Welcome to the chatbot project! Send a message using the textbox{" "}
            {chatInputPosition === "top" ? "above." : "below."}
          </p>
        )}
        <ChatMessages chatMessages={chatMessages} />
        {chatInputPosition === "bottom" && (
          <ChatInput
            setChatMessages={setChatMessages}
            chatMessages={chatMessages}
          />
        )}
      </div>
    </div>
  );
}

export default App;
