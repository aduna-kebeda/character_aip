import React, { useEffect, useState, useContext } from 'react';
import { sendMessage, fetchCharacters } from '../utils/api';
import { Context } from '../context/Context';

const ChatComponent: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [character, setCharacter] = useState('default');
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [characters, setCharacters] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadCharacters = async () => {
            try {
                const data = await fetchCharacters();
                setCharacters(data.characters);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        };
        loadCharacters();
    }, []);

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;

        const userMessage = { sender: 'User', text: userInput };
        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);

        try {
            const aiResponse = await sendMessage(userInput, character);
            const aiMessage = { sender: 'AI', text: aiResponse };
            setMessages((prev) => [...prev, aiMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
        } finally {
            setLoading(false);
        }

        setUserInput('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-foreground mb-6">AI Chat</h1>
                <div className="mb-4">
                    <label htmlFor="character" className="block text-sm font-medium text-foreground mb-2">Choose a character:</label>
                    <select
                        id="character"
                        value={character}
                        onChange={(e) => setCharacter(e.target.value)}
                        className="block w-full p-2 border border-gray-300 rounded-md"
                    >
                        {characters.map((char) => (
                            <option key={char} value={char}>{char}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4 h-64 overflow-y-auto bg-gray-100 p-4 rounded-md">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`mb-2 p-2 rounded ${msg.sender === 'User' ? 'bg-primary text-white' : 'bg-secondary text-white'}`}>
                            <strong>{msg.sender}:</strong> {msg.text}
                        </div>
                    ))}
                    {loading && (
                        <div className="flex justify-center items-center">
                            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6"></div>
                        </div>
                    )}
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 p-2 border border-gray-300 rounded-md mr-2"
                    />
                    <button onClick={handleSendMessage} className="p-2 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300">Send</button>
                </div>
            </div>
        </div>
    );
};

export default ChatComponent;