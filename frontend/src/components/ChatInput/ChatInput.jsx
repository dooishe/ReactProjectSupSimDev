import { useState } from "react";
import { Chatbot } from "supersimpledev";
import loadingGif from "../../assets/loading-spinner.gif";
import styles from "./ChatInput.module.css";
function ChatInput({ setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  function saveInputText(event) {
    setInputText(event.target.value);
  }
  async function sendMessage() {
    if (isLoading || !inputText.trim()) return;
    const downloadGif = <img className={styles.downloadGif} src={loadingGif} />;
    setChatMessages((prev) => [
      ...prev,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
      {
        message: downloadGif,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInputText("");
    setIsLoading(true);
    try {
      const response = await Chatbot.getResponseAsync(inputText);
      setChatMessages((prev) => {
        const withoutLoading = prev.filter(
          (msg) => msg.message !== downloadGif
        );
        return [
          ...withoutLoading,
          {
            message: response,
            sender: "robot",
            id: crypto.randomUUID(),
          },
        ];
      });
    } catch (error) {
      console.log(error);
      console.log("Something went wrong! Please try again later");
    } finally {
      setIsLoading(false);
    }
  }
  function handleKeyDown(event) {
    const key = event.key;
    if (key === "Enter") {
      sendMessage();
    } else if (key === "Escape") {
      setInputText("");
    }
  }
  return (
    <div className={styles.chatInputContainer}>
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        disabled={isLoading ? true : false}
        className={styles.chatInput}
      />
      <button onClick={sendMessage} className={styles.sendButton}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
