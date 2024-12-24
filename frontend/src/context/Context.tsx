import React, { createContext, useState, ReactNode } from 'react';

interface ContextProps {
    onSent: (prompt: string) => Promise<void>;
    prevPrompt: string[];
    setRecentPrompt: (prompt: string) => void;
    newChat: () => void;
    setContextLoading: (loading: boolean) => void;
    contextLoading: boolean;
}

export const Context = createContext<ContextProps | undefined>(undefined);

interface ContextProviderProps {
    children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [prevPrompt, setPrevPrompt] = useState<string[]>([]);
    const [recentPrompt, setRecentPrompt] = useState<string>('');
    const [contextLoading, setContextLoading] = useState<boolean>(false);

    const onSent = async (prompt: string) => {
        // Implement the logic to handle sending the prompt
        // For example, you can call an API or update the state
    };

    const newChat = () => {
        // Implement the logic to handle starting a new chat
        // For example, you can reset the state or clear the chat history
    };

    return (
        <Context.Provider value={{ onSent, prevPrompt, setRecentPrompt, newChat, setContextLoading, contextLoading }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;