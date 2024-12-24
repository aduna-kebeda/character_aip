import { useRouter } from 'next/router';
import { useEffect, useState, useContext } from 'react';
import { Context } from '../context/Context';
import { fetchCharacters } from '../utils/api';

const SelectCharacter = () => {
  const [characters, setCharacters] = useState<string[]>([]);
  const [initialMessage, setInitialMessage] = useState<string>('');
  const context = useContext(Context);
  const setRecentPrompt = context?.setRecentPrompt;
  const router = useRouter();

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

  const handleCharacterSelect = (character: string) => {
    if (setRecentPrompt) {
      setRecentPrompt(character);
    }
    router.push(`/chat/${character}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Select a Character</h1>
      <p className="text-lg text-center mb-8 text-gray-700">
        Choose a character to start a dynamic and engaging conversation with our AI.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {characters.map((char) => (
          <div
            key={char}
            className="card p-6 bg-white shadow-lg rounded-lg cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => handleCharacterSelect(char)}
          >
            <h2 className="text-2xl font-semibold text-center mb-4">{char}</h2>
            <p className="text-center text-gray-600">Click to select this character</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCharacter;