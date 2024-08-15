import React from 'react';

const Tutorial = () => {
    return (
        <section id="tutorial" aria-labelledby="tutorial-heading">
            <h2 id="tutorial-heading">Tutorial</h2>
            <div role="article" aria-labelledby="step-1-heading">
                <h3 id="step-1-heading">Step 1: Obtain an API Key</h3>
                <p>
                    Generate an API key using the button in the Authentication section
                    above.
                </p>
            </div>
            <div role="article" aria-labelledby="step-2-heading">
                <h3 id="step-2-heading">Step 2: Make a Request</h3>
                <p>
                    Use your preferred programming language or tool to make a POST request
                    to the /api/generate-book endpoint. Include your API key in the header
                    and the required parameters in the request body.
                </p>
            </div>
            <div role="article" aria-labelledby="step-3-heading">
                <h3 id="step-3-heading">Step 3: Handle the Response</h3>
                <p>
                    The API will return a response with a job ID. You can use this ID to
                    check the status of your book generation job.
                </p>
            </div>
            <div role="article" aria-labelledby="step-4-heading">
                <h3 id="step-4-heading">Step 4: Retrieve the Generated Book</h3>
                <p>
                    Once the job is complete, you can retrieve the generated book using the
                    job ID (endpoint to be implemented).
                </p>
            </div>
        </section>
    );
};

export default Tutorial;
