import { useState } from 'react';
import { base64Encode, base64Decode, convertToUpperCase } from '../utils/converters';
import { useCopyToClipboard } from '../utils/useCopyToClipboard';

interface Base64ConverterProps {
  className?: string;
}

export const Base64Converter: React.FC<Base64ConverterProps> = ({ className = '' }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const { copied, copy } = useCopyToClipboard();

  const handleOperation = (operation: (text: string) => string | Promise<string>) => {
    try {
      const result = operation(input);
      if (result instanceof Promise) {
        result.then(setOutput).catch(error => setOutput(error.message));
      } else {
        setOutput(result);
      }
    } catch (error) {
      setOutput(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  return (
    <div className={`section ${className}`}>
      <h2>Base64 & Text Operations</h2>
      <div className="input-group">
        <label htmlFor="base64-input">Input:</label>
        <textarea
          id="base64-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to convert..."
        />
      </div>
      
      <div className="buttons">
        <button onClick={() => handleOperation(base64Encode)}>
          Encode to Base64
        </button>
        <button onClick={() => handleOperation(base64Decode)}>
          Decode from Base64
        </button>
        <button onClick={() => handleOperation(convertToUpperCase)}>
          Convert to Uppercase
        </button>
      </div>

      <div className="input-group">
        <div className="output-header">
          <label htmlFor="base64-output">Output:</label>
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
          id="base64-output"
          value={output}
          readOnly
          placeholder="Result will appear here..."
        />
      </div>
    </div>
  );
};