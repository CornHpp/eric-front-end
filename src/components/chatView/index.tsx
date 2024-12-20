import React, { useState, useRef, useEffect } from "react";
import { Input } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import GlowButton from "../GlowButton";
import { ArrowUp } from "lucide-react";
import Message from "./Message";
interface ChatMessage {
  position: "left" | "right";
  type: "text";
  text: string;
  date: Date;
  title: string;
}

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: ChatMessage = {
        position: "right",
        type: "text",
        text: inputText,
        date: new Date(),
        title: "User",
      };
      setMessages([...messages, newMessage]);
      setInputText("");

      // 模拟AI回复
      setTimeout(() => {
        const aiResponse: ChatMessage = {
          position: "left",
          type: "text",
          text: "AI response here...",
          date: new Date(),
          title: "AI Assistant",
        };
        setMessages((prev) => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col flex-1 ">
      <div className=" overflow-y-auto h-[521px] hide-scrollbar">
        {messages.map((message, index) => (
          <Message
            text={message.text}
            isResponse={message.position === "left"}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-[#323737]">
        <Input
          placeholder="Ask anything from here"
          value={inputText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputText(e.target.value)
          }
          multiline={false}
          maxHeight={100}
          className="w-[443px] h-[42px] rounded-[12px] bg-[#1b2121] border border-[#323737] "
          rightButtons={
            <GlowButton
              onClick={handleSend}
              className="w-[34px] h-[34px] rounded-[12px]"
            >
              <ArrowUp className="text-[#000606]" />
            </GlowButton>
          }
        />
      </div>
    </div>
  );
};

const CustomStyles = `
.rce-container-input{
  background: #1b2121 !important;
  border: 1px solid #323737 !important;
}
  .rce-container-mbox {
    background: transparent;
 
  }
  
  .rce-mbox {
    max-width: 80%;
  }
  
  .rce-mbox-left {
    background: #262929 !important;
    color: white !important;
  }
  
  .rce-mbox-right {
    background: #00FFD1 !important;
    color: black !important;
  }
  
  .rce-mbox-right .rce-mbox-title {
    color: #000 !important;
  }
  
  .rce-mbox-left .rce-mbox-title {
    color: #fff !important;
  }
  
  .rce-input {
    border-color: #323737 !important;
    padding-left: 16px !important;
    color: #fff !important;
  }
  
  .rce-input::placeholder {
    color: #777a7a;
  }

  .rce-mbox-left:before {
    border-right-color: #262929 !important;
  }

  .rce-mbox-right:before {
    border-left-color: #00FFD1 !important;
  }
`;

const ChatView: React.FC = () => {
  return (
    <>
      <style>{CustomStyles}</style>
      <ChatInterface />
    </>
  );
};

export default ChatView;
