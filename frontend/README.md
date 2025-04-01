# Web 3.0 Blockchain App Frontend

This is the frontend application for the Web 3.0 Blockchain App, built with React, TypeScript, and Vite. The application provides a modern and responsive user interface for interacting with blockchain functionality.

## 🚀 Features

- React 19 with TypeScript support
- Vite for fast development and building
- TailwindCSS for styling
- Ethers.js for blockchain interactions
- React Router for navigation
- Anime.js for animations
- Lucide icons for beautiful UI elements

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm package manager

## 🛠️ Installation

1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
5. Update the environment variables in `.env` with your configuration

## 🔗 Contract Setup

1. After deploying your smart contract in the backend, you'll need to update the contract details in the frontend:
   - Navigate to `src/constants/contracts.ts`
   - Update the following constants:
     ```typescript
     export const CONTRACT_ADDRESS = "your_deployed_contract_address";
     export const CONTRACT_ABI = [...]; // Your contract ABI from the backend
     ```

2. The contract address and ABI should be copied from your backend deployment:
   - Contract address: The address where your contract was deployed
   - ABI: The contract's Application Binary Interface from your backend's build artifacts

## 🚀 Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🧪 Linting

To run the linter:

```bash
npm run lint
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── constants/     # Constants and configurations
│   │   └── contracts.ts  # Contract addresses and ABIs
│   ├── components/    # Reusable UI components
│   ├── pages/        # Page components
│   ├── context/      # React context providers
│   ├── utils/        # Utility functions
│   ├── types/        # TypeScript type definitions
│   └── assets/       # Static assets
├── public/           # Public static files
└── ...
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `.prettierrc` - Prettier configuration
- `eslint.config.js` - ESLint configuration

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
