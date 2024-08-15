import React from 'react';
import Section from './Section';
import Button from "@mui/material/Button"

const Main = () => (
  <main>
    <Section id="overview" title="Overview">
      <p>The Book Generator API allows you to generate books on various topics...</p>
    </Section>
    <Section id="authentication" title="Authentication">
      <p>To use the API, you need to include your API key in the header of each request:</p>
      <pre><code>X-API-Key: YOUR_API_KEY</code></pre>
      <p>To generate an API key, use the button below:</p>
      <Button id="generateApiKey">Generate API Key</Button>
      <div id="apiKeyDisplay" />
    </Section>
    <Section id="endpoints" title="Endpoints">
      <h3>Generate Book</h3>
      <p><span className="http-method">POST</span> <span className="endpoint">/api/generate-book</span></p>
      <h4>Request Body</h4>
      {/* Add your table component here */}
      <h4>Response</h4>
      <pre><code>{"{"} {"\n"} "message": "Book generation started", {"\n"} "status": "processing", {"\n"} "job_id": "unique-job-identifier" {"\n"} {"}"}</code></pre>
    </Section>
  </main>
);

export default Main;
