import React, { useState } from 'react';

const XDictionary = () => {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState(''); 

  const handleSearch = () => {
    const trimmed = searchTerm.trim().toLowerCase();
    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === trimmed
    );

    if (found) {
      setDefinition(found.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h2>Dictionary App</h2>
      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        <h3>Definition:</h3>
        <p>{definition}</p> 
      </div>
    </div>
  );
};

export default XDictionary;
