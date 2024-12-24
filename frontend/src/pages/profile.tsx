import React, { useContext, useEffect } from 'react';
import { Context } from '../context/Context';

const Profile = () => {
  const { prevPrompt, contextLoading, onSent, newChat } = useContext(Context) as any; // Access chat context

  // Assuming `user` and `logout` are defined somewhere in the context or props
  const user = null; // Comment this out if it's causing an error
  const logout = () => {}; // Comment this out if it's causing an error

  useEffect(() => {
    if (!user) {
      // Redirect to login if not authenticated
      window.location.href = '/login';
    }
  }, [user]);

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {user}</p>
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
