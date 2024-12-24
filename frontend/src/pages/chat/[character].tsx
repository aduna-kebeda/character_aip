//src/pages/chat/[character].tsx

import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import { sendMessage } from '../../utils/api';
import Image from 'next/image';
import GeminiIcon from '../../assets/gemini_icon.png';
import UserAvatar from '../../assets/user_icon.png';

const ChatPage = () => {
  const router = useRouter();
  const { character, message } = router.query;
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const context = useContext(Context);
  const setContextLoading = context?.setContextLoading;
  const contextLoading = context?.contextLoading;
  const [resultData, setResultData] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (character === 'default' && message) {
      // Handle default chat scenario with initial message
      const initialMessage = message as string;
      setMessages([{ sender: 'User', text: initialMessage }]);
      handleSendMessage(initialMessage, false);
    } else if (character === 'default') {
      // Handle default chat scenario without initial message
      setMessages([{ sender: 'AI', text: 'Welcome! How can I assist you today?' }]);
    }
  }, [character, message]);

  const formatResponse = (response: string) => {
    // Split the response into sections for formatting
    const responseArray = response.split("**");
    let formattedResponse = "";

    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 === 0) {
        // Regular text
        formattedResponse += `<span>${responseArray[i]}</span>`;
      } else {
        // Bold text
        formattedResponse += `<b>${responseArray[i]}</b>`;
      }
    }

    // Replace asterisks (*) with new line breaks for better readability
    return formattedResponse.replace(/\*/g, "<br>");
  };

  const delayPara = (index: number, nextWord: string) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, index * 75); // Adjust typing speed here
  };

  const handleSendMessage = async (input: string, addToMessages: boolean = true) => {
    if (!input.trim()) return;

    if (addToMessages) {
      // Add user's message to the chat
      const userMessage = { sender: 'User', text: input };
      setMessages((prev) => [...prev, userMessage]);
    }
    setUserInput('');
    if (setContextLoading) {
      setContextLoading(true);
    }
    setIsTyping(true);

    try {
      // Fetch AI's response
      const aiResponse = await sendMessage(input, character as string);
      const formattedResponse = formatResponse(aiResponse);
      const responseArray = formattedResponse.split(" ");

      // Typing effect for AI's response
      setResultData('');
      for (let i = 0; i < responseArray.length; i++) {
        const nextWord = responseArray[i];
        delayPara(i, nextWord + " ");
      }

      // After typing effect completes, add AI's full response to messages
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: 'AI', text: formattedResponse },
        ]);
        setResultData('');
        setIsTyping(false);
      }, responseArray.length * 75);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      if (setContextLoading) {
        setContextLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col w-[100%] items-center justify-center flex-1 min-h-screen ">
     {/* Header */}
<div className="fixed top-0 ml-16 w-[80%] flex justify-between items-center p-4   z-10">
  <h1 className="text-2xl font-bold text-gray-800">{character}</h1>
  <Image src={UserAvatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
</div>

      {/* Chat Area */}
      <div
        className="flex-1 w-[60%] mt-16  rounded-b-md overflow-y-auto"
        style={{ paddingBottom: '80px' }}
      >
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start space-x-4 ${
                msg.sender === 'User' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <Image
                src={msg.sender === 'User' ? UserAvatar : GeminiIcon}
                alt={`${msg.sender} avatar`}
                className="w-10 h-10 rounded-full"
              />
              <div
                className={`p-3 rounded-md ${
                  msg.sender === 'User'
                    ? 'bg-blue-100 text-right'
                    : 'bg-gray-100 text-left'
                }`}
              >
                <span dangerouslySetInnerHTML={{ __html: msg.text }} />
              </div>
            </div>
          ))}
          {/* AI typing effect */}
          {isTyping && (
            <div className="flex items-start space-x-4">
              <Image
                src={GeminiIcon}
                alt="AI avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="p-3 bg-gray-100 rounded-md text-left">
                <span dangerouslySetInnerHTML={{ __html: resultData }} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      <div className="w-full fixed bottom-0 max-w-4xl p-4 bg-white shadow-md">
        <div className="flex items-center w-full">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleSendMessage(userInput)}
            className="p-4 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
