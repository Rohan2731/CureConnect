import { useState } from "react";
import axios from "axios";

function Chatbot() {

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message
    };

    setChat((prev) => [
      ...prev,
      userMessage
    ]);

    const response = await axios.post(
      "http://127.0.0.1:8000/chat",
      {
        message
      }
    );

    const botMessage = {
      sender: "bot",
      text: response.data.response
    };

    setChat((prev) => [
      ...prev,
      botMessage
    ]);

    setMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>AI Health Chatbot</h1>

      <div
        style={{
          height: "400px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px"
        }}
      >
        {chat.map((msg, index) => (

          <div
            key={index}
            style={{
              textAlign:
                msg.sender === "user"
                  ? "right"
                  : "left",
              marginBottom: "10px"
            }}
          >
            <strong>
              {msg.sender === "user"
                ? "You"
                : "Bot"}
            </strong>

            <p>{msg.text}</p>

          </div>

        ))}
      </div>

      <input
        type="text"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Ask a health question..."
        style={{
          width: "80%",
          padding: "10px"
        }}
      />

      <button
        onClick={sendMessage}
        style={{
          padding: "10px"
        }}
      >
        Send
      </button>

    </div>
  );
}

export default Chatbot;