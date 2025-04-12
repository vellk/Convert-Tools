import { Base64Converter } from './components/Base64Converter';
import { FacebookProofGenerator } from './components/FacebookProofGenerator';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Text Conversion Tools</h1>
      <div className="converter">
        <Base64Converter />
        <FacebookProofGenerator />
      </div>
    </div>
  );
}

export default App;
