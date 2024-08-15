import React from 'react';

const CodeExamples = () => {
    return (
        <section id="code-examples" aria-labelledby="code-examples-heading">
            <h2 id="code-examples-heading">Code Examples</h2>
            
            <article aria-labelledby="python-code-heading">
                <h3 id="python-code-heading">Python</h3>
                <pre aria-labelledby="python-code-example">
                    <code id="python-code-example">
                        {`import requests

API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")
`}
                    </code>
                </pre>
            </article>
            
            <article aria-labelledby="javascript-code-heading">
                <h3 id="javascript-code-heading">JavaScript (Node.js)</h3>
                <pre aria-labelledby="javascript-code-example">
                    <code id="javascript-code-example">
                        {`const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
`}
                    </code>
                </pre>
            </article>
        </section>
    );
};

export default CodeExamples;
