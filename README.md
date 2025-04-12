# Convert Tools

A React-based web application that provides various text conversion utilities. Built with TypeScript and Vite for optimal performance and type safety.

## Features

- **Base64 Conversion**
  - Encode text to Base64
  - Decode Base64 to text
  - Copy results to clipboard

- **Facebook Tools**
  - Generate appsecret_proof for Facebook API authentication
  - Secure handling of app secrets
  - Copy generated proof to clipboard

## Tech Stack

- React 19
- TypeScript
- Vite
- Jest for testing
- Web Crypto API for secure hash generation

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd convert-tools
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Testing

Run the test suite:

```bash
npm test
```

## Building for Production

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
