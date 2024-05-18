import { useState, useEffect, useRef } from "react";
import "./ChatBot.css";
import { FaRobot } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { BsChatRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

function ChatBot() {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      content: "Hi there! How can I help you?",
      type: "incoming",
    },
  ]);

  const chatBoxRef = useRef();
  useEffect(() => {
    // Scroll to the bottom of the chatbox when chatHistory changes
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [chatHistory]);

  const handleInputChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSendChat = () => {
    if (!userMessage.trim()) return;

    // Update chat history with user's message
    const updatedChatHistory = [
      ...chatHistory,
      {
        content: userMessage,
        type: "outgoing",
      },
    ];
    setChatHistory(updatedChatHistory);

    // Send user's message to server and update chat history with the response
    generateResponse(userMessage, updatedChatHistory);
    setUserMessage("");
  };

  const generateResponse = (message, updatedChatHistory) => {
    const URL = `http://127.0.0.1:8000/chatBot/?question=${encodeURIComponent(
      message
    )}`;

    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Check the Content-Type header to determine the response type
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        } else {
          return response.text(); // Treat as plain text
        }
      })
      .then((data) => {
        if (typeof data === "string") {
          // Handle plain text response
          const updatedChatHistoryWithResponse = [
            ...updatedChatHistory,
            {
              content: data,
              type: "incoming",
            },
          ];
          setChatHistory(updatedChatHistoryWithResponse);
        } else {
          // Handle JSON response
          const responseContent = data.response;
          if (responseContent) {
            const updatedChatHistoryWithResponse = [
              ...updatedChatHistory,
              {
                content: responseContent,
                type: "incoming",
              },
            ];
            setChatHistory(updatedChatHistoryWithResponse);
          } else {
            console.error("Empty response content received");
            // Handle empty response content
          }
        }
      })
      .catch((err) => {
        console.error("Error fetching or parsing data:", err);
        // Handle error condition, such as displaying an error message to the user
      });
  };

  const toggleChatbot = () => {
    document.body.classList.toggle("show-chatbot");
  };

  return (
    <div className="">
      <button className="chatbot-toggler" onClick={toggleChatbot}>
        <BsChatRight className="bs" />
        <IoClose className="cl" />
      </button>
      <div className="chatbot shadow-lg">
        <header className="text-center bg-[#1B223C]">
          <h2 className="font-semibold">CHATBOT</h2>
          <IoClose className="cl" />
        </header>
        <ul ref={chatBoxRef} className="chatbox">
          {chatHistory.map((chat, index) => (
            <li key={index} className={`chat ${chat.type}`}>
              {chat.type === "incoming" && (
                <span className="material-symbols-outlined">
                  <FaRobot className="robo" />
                </span>
              )}
              <p>{chat.content}</p>
            </li>
          ))}
        </ul>
        <div className="chat-input flex gap-2">
          <textarea
            onChange={handleInputChange}
            value={userMessage}
            placeholder="Enter a message . . ."
            required
          ></textarea>
          <span
            id="send-btn"
            className="material-symbols-outlined"
            onClick={handleSendChat}
          >
            <IoMdSend className="io" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
