import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../components/AuthProvider';
import { Context } from '../context/Context';

const Profile = () => {
  const { user, logout } = useContext(AuthContext) as any; // Access auth context
  const { prevPrompt, contextLoading, onSent, newChat } = useContext(Context) as any; // Access chat context

  useEffect(() => {
    if (!user) {
      // Redirect to login if not authenticated
      window.location.href = '/login';
    }
  }, [user]);

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {user?.username}</p>
      <button onClick={logout}>Logout</button>

      <div>
        <h2>Chat History</h2>
        <p>Previous Prompt: {prevPrompt.join(', ')}</p>
        <button onClick={newChat}>Start New Chat</button>
        <button onClick={() => onSent('Test prompt')}>Send Prompt</button>
        {contextLoading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Profile;
