import { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setChat((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post(
        "https://cureconnect-6klv.onrender.com/chatbot",
        {
          message,
        }
      );

      const botMessage = {
        sender: "bot",
        text: response.data.response,
      };

      setChat((prev) => [...prev, botMessage]);
    } catch (error) {
      console.log(error);
    }

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* Header */}

      <div className="text-center mb-8">

        <h1 className="text-4xl font-bold text-blue-600 mb-3">
          🤖 AI Health Assistant
        </h1>

        <p className="text-gray-600">
          Ask health-related questions and get instant assistance.
        </p>

      </div>

      {/* Suggested Questions */}

      <div className="flex flex-wrap justify-center gap-3 mb-6">

        <button
          onClick={() => setMessage("I have fever")}
          className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200"
        >
          I have fever
        </button>

        <button
          onClick={() => setMessage("I have headache")}
          className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200"
        >
          I have headache
        </button>

        <button
          onClick={() => setMessage("I have cold and cough")}
          className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200"
        >
          I have cold and cough
        </button>

      </div>

      {/* Chat Area */}

      <div
        className="
        max-w-4xl
        mx-auto
        bg-white
        rounded-2xl
        shadow-lg
        p-6
        h-[500px]
        overflow-y-auto
      "
      >
        {chat.length === 0 && (
          <div className="text-center text-gray-400 mt-20">
            Start a conversation with the AI Health Assistant
          </div>
        )}

        {chat.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-4 ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] px-4 py-3 rounded-2xl ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}

      <div className="max-w-4xl mx-auto mt-5 flex gap-3">

        <input
          type="text"
          placeholder="Ask a health question..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          className="
          flex-1
          p-3
          border
          rounded-xl
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
        />

        <button
          onClick={sendMessage}
          className="
          bg-blue-600
          text-white
          px-6
          rounded-xl
          hover:bg-blue-700
          transition
        "
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default Chatbot;