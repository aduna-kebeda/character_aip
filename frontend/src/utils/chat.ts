import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const saveChatHistory = async (userId: string, chatData: any) => {
  try {
    const response = await axios.post(
      `${API_URL}/chat/save`,
      { userId, chatData },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error saving chat history:', error);
    throw error;
  }
};

export const fetchChatHistory = async (userId: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/chat/history/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching chat history:', error);
    throw error;
  }
};
