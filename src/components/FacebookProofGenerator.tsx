import { useState } from 'react';
import { generateAppsecretProof } from '../utils/converters';
import { useCopyToClipboard } from '../utils/useCopyToClipboard';

interface FacebookProofGeneratorProps {
  className?: string;
}

export const FacebookProofGenerator: React.FC<FacebookProofGeneratorProps> = ({ className = '' }) => {
  const [accessToken, setAccessToken] = useState('');
  const [appSecret, setAppSecret] = useState('');
  const [output, setOutput] = useState('');
  const { copied, copy } = useCopyToClipboard();

  const handleGenerate = async () => {
    try {
      const proof = await generateAppsecretProof(accessToken, appSecret);
      setOutput(proof);
    } catch (error) {
      setOutput(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  return (
    <div className={`section ${className}`}>
      <h2>Facebook appsecret_proof Generator</h2>
      <div className="input-group">
        <label htmlFor="access-token">Access Token:</label>
        <textarea
          id="access-token"
          value={accessToken}
          onChange={(e) => setAccessToken(e.target.value)}
          placeholder="Enter your access token..."
        />
      </div>

      <div className="input-group">
        <label htmlFor="app-secret">App Secret:</label>
        <input
          type="password"
          id="app-secret"
          value={appSecret}
          onChange={(e) => setAppSecret(e.target.value)}
          placeholder="Enter your app secret"
          className="app-secret-input"
        />
      </div>

      <div className="buttons">
        <button onClick={handleGenerate}>Generate appsecret_proof</button>
      </div>

      <div className="input-group">
        <div className="output-header">
          <label htmlFor="fb-output">Generated Proof:</label>
          {output && (
            <button 
              onClick={() => copy(output)}
              className="copy-button"
              title="Copy to clipboard"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          )}
        </div>
        <textarea
          id="fb-output"
          value={output}
          readOnly
          placeholder="Generated appsecret_proof will appear here..."
        />
      </div>
    </div>
  );
};