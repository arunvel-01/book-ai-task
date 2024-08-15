import React from 'react';

const Endpoints = () => {
    return (
        <section id="endpoints" aria-labelledby="endpoints-heading">
            <h2 id="endpoints-heading">Endpoints</h2>
            
            <article aria-labelledby="generate-book-heading">
                <h3 id="generate-book-heading">Generate Book</h3>
                <p>
                    <span className="http-method" aria-label="HTTP method">POST</span>{" "}
                    <span className="endpoint" aria-label="Endpoint">/api/generate-book</span>
                </p>
                    <h4 id="request-body-heading">Request Body</h4>
                    <table className="parameter-table" aria-describedby="request-body-description">
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>api</td>
                                <td>string</td>
                                <td>The API provider to use. Options: "openai" or "together"</td>
                            </tr>
                            <tr>
                                <td>model</td>
                                <td>string</td>
                                <td>The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")</td>
                            </tr>
                            <tr>
                                <td>topic</td>
                                <td>string</td>
                                <td>The main topic or theme of the book</td>
                            </tr>
                            <tr>
                                <td>language</td>
                                <td>string</td>
                                <td>The language in which the book should be generated</td>
                            </tr>
                            <tr>
                                <td>word_count</td>
                                <td>integer</td>
                                <td>The approximate number of words for the generated book</td>
                            </tr>
                        </tbody>
                    </table>
                
                
                <section aria-labelledby="response-heading">
                    <h4 id="response-heading">Response</h4>
                    <pre>
                        <code>
                            {`{
    "message": "Book generation started",
    "status": "processing",
    "job_id": "unique-job-identifier"
}`}
                        </code>
                    </pre>
                </section>
            </article>
        </section>
    );
};

export default Endpoints;
