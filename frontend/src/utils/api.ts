//src/utils/api.ts
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

export const fetchCharacters = async () => {
    const response = await axios.get(`${API_URL}/api/characters`);
    return response.data;
};

export const sendMessage = async (message: string, character: string) => {
    try {
        const response = await axios.post(`${API_URL}/api/chat`, { message, character });
        return response.data.reply;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/token`, { username, password });
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const saveChatMessage = async (message: string, token: string) => {
    try {
        await axios.post(`${API_URL}/api/save_chat`, { message }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error('Error saving chat message:', error);
        throw error;
    }
};

export const getChatHistory = async (token: string) => {
    try {
        const response = await axios.get(`${API_URL}/api/get_chat`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.history;
    } catch (error) {
        console.error('Error fetching chat history:', error);
        throw error;
    }
};

const run = async (prompt: string): Promise<string> => {
    try {
        const response = await axios.post(`${API_URL}/api/chat`, { message: prompt });
        return response.data.reply;
    } catch (error) {
        console.error('Error communicating with the backend:', error);
        throw error;
    }
};

export default run;