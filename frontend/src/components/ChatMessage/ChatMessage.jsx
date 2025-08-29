import robotImg from "../../assets/robot.png";
import userImg from "../../assets/profile.jpg";
import styles from "./ChatMessage.module.css";
function ChatMessage({ sender, message }) {
  return (
    <div
      className={
        sender === "user" ? styles.chatMessageUser : styles.chatMessageRobot
      }
    >
      {sender === "robot" && <img src={robotImg} className={styles.avatar} />}
      <div className={styles.message}>{message}</div>
      {sender === "user" && <img src={userImg} className={styles.avatar} />}
    </div>
  );
}

export default ChatMessage;
