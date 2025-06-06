import React, { useState } from 'react';

const XDictionary = () => {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    const trimmed = searchTerm.trim().toLowerCase();
    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === trimmed
    );

    if (found) {
      setResult(<>
        <h3>Definition:</h3>
        <p>{found.meaning}</p>
      </>);
    } else {
      setResult(<p>Word not found in the dictionary.</p>);
    }
  };

  return (
    <div>
      <h2>XDictionary</h2>
      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>{result}</div>
    </div>
  );
};

export default XDictionary;
