import React, { useState } from 'react';

const Authentication = () => {
  // State to hold the generated API key
  const [apiKey, setApiKey] = useState('');

  // Function to generate a random API key
  const generateApiKey = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let key = '';
      for (let i = 0; i < 44; i++) {
          key += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      setApiKey(key); // Set the generated key to state
  };

  return (
      <section id="authentication" aria-labelledby="authentication-heading">
        <h2 id="authentication-heading">Authentication</h2>
        <p>
          To use the API, you need to include your API key in the header of each
          request:
        </p>
        <pre>
          <code>X-API-Key: {apiKey || 'YOUR_API_KEY'}</code>
        </pre>
        <p>To generate an API key, use the button below:</p>
        <button 
          onClick={generateApiKey} 
          aria-label="Generate API Key"
        >
          Generate API Key
        </button>
        <div id="apiKeyDisplay">
          {apiKey && (
            <p>Your generated API key: 
              <span className='text-align-right' aria-live="polite">{apiKey}</span>
            </p>
          )}
        </div>
      </section>
  );
};

export default Authentication;
