//src/components/Sidebar.tsx

import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Context } from '../context/Context';
import menuIcon from '../assets/menu_icon.png';
import plusIcon from '../assets/plus_icon.png';
import questionIcon from '../assets/question_icon.png';
import historyIcon from '../assets/history_icon.png';
import settingIcon from '../assets/setting_icon.png';
import messageIcon from '../assets/message_icon.png';

const Sidebar: React.FC = () => {
  const [extended, setExtended] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const context = useContext(Context);
  const router = useRouter();
  if (!context) {
    throw new Error('Context must be used within a ContextProvider');
  }
  const { onSent, prevPrompt, setRecentPrompt, newChat } = context;

  const loadPrompt = async (prompt: string) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
    setSidebarOpen(false); // Close sidebar on mobile after selecting a prompt
  };

  const handleNewChat = () => {
    newChat();
    router.push('/selectCharacter');
    setSidebarOpen(false); // Close sidebar on mobile after starting a new chat
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 bg-white p-6 transition-transform duration-300 ease-in-out transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0`}>
        <div className="flex flex-col justify-between min-h-screen">
          <div className="top">
            <Image onClick={() => setExtended((prev) => !prev)} className="w-5 ml-2 cursor-pointer hidden md:block" src={menuIcon} alt="Menu" />
            <div onClick={handleNewChat} className="mt-12 flex items-center p-3 rounded-full bg-gray-200 cursor-pointer text-gray-600 gap-2">
              <Image src={plusIcon} alt="New Chat" className="w-5" />
              {extended ? <p>New Chat</p> : null}
            </div>
            {extended && (
              <div className="recent flex flex-col animate-fadeIn">
                <p className="mt-8 mb-5">Recent</p>
                {prevPrompt.map((item, index) => (
                  <div key={index} onClick={() => loadPrompt(item)} className="flex items-start gap-2 p-3 pr-10 rounded-full cursor-pointer text-gray-800 hover:bg-gray-300">
                    <Image src={messageIcon} alt="Message" className="w-5" />
                    <p>{item.slice(0, 20)}...</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="bottom flex flex-col">
            <div className="flex items-center gap-2 p-3 cursor-pointer" onClick={() => setSidebarOpen(false)}>
              <Image src={questionIcon} alt="Help" className="w-5" />
              {extended ? <p>Help</p> : null}
            </div>
            <div className="flex items-center gap-2 p-3 cursor-pointer" onClick={() => setSidebarOpen(false)}>
              <Image src={historyIcon} alt="Activity" className="w-5" />
              {extended ? <p>Activity</p> : null}
            </div>
            <div className="flex items-center gap-2 p-3 cursor-pointer" onClick={() => setSidebarOpen(false)}>
              <Image src={settingIcon} alt="Setting" className="w-5" />
              {extended ? <p>Setting</p> : null}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Mobile header with toggle button */}
        <div className="md:hidden bg-white p-4 flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

