# Web 3.0 Blockchain App Backend

This is the backend application for the Web 3.0 Blockchain App, built with Hardhat and TypeScript. It contains the smart contracts and deployment scripts for the blockchain functionality.

## 🚀 Features

- Hardhat development environment
- TypeScript support
- Smart contract development and testing
- Multiple network deployment support (Sepolia, Buildbear)
- TypeChain for TypeScript bindings
- Prettier for code formatting

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm package manager
- MetaMask or another Web3 wallet
- Access to Sepolia testnet or Buildbear network

## 🛠️ Installation

1. Clone the repository
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
5. Update the environment variables in `.env` with your configuration:
   ```env
   # For Sepolia Network
   SEPOLIA_URL=https://eth-sepolia.g.alchemy.com/v2/your-api-key
   GAS_LIMIT=auto
   GAS_PRICE=auto

   # For Buildbear Network
   BUILDBEAR_URL=https://rpc.buildbear.io/your-application-id
   GAS_LIMIT=auto
   GAS_PRICE=auto
   CHAIN_ID=your-chain-id

   # Your wallet's private key (DO NOT SHARE!)
   PRIVATE_KEY="your-private-key"
   ```

## 📝 Environment Variables

### Sepolia Network
- `SEPOLIA_URL`: Your Alchemy API endpoint for Sepolia testnet
- `GAS_LIMIT`: Gas limit for transactions (auto recommended)
- `GAS_PRICE`: Gas price for transactions (auto recommended)

### Buildbear Network
- `BUILDBEAR_URL`: Your Buildbear RPC endpoint
- `GAS_LIMIT`: Gas limit for transactions (auto recommended)
- `GAS_PRICE`: Gas price for transactions (auto recommended)
- `CHAIN_ID`: Your Buildbear network chain ID

### General
- `PRIVATE_KEY`: Your wallet's private key for contract deployment (Keep this secret!)

## 🚀 Development

### Compile Contracts
```bash
npm run compile
```

### Run Tests
```bash
npm run test
```

### Deploy Contracts

#### To Sepolia Testnet
```bash
npm run deploy:sepolia
```

#### To Buildbear Network
```bash
npm run deploy:buildbear
```

## 📁 Project Structure

```
backend/
├── contracts/        # Smart contract source files
├── scripts/         # Deployment and interaction scripts
├── test/           # Contract test files
├── artifacts/      # Compiled contract artifacts
├── cache/          # Hardhat cache
└── typechain-types/ # Generated TypeScript types
```

## 🔧 Configuration Files

- `hardhat.config.ts` - Hardhat configuration
- `tsconfig.json` - TypeScript configuration
- `.prettierrc` - Prettier configuration

## 🔗 Contract Verification

After deployment, you can verify your contracts on Etherscan (for Sepolia) or Buildbear Explorer:

```bash
npm run verify:sepolia
# or
npm run verify:buildbear
```

## 📊 Contract Artifacts

After deployment, the contract artifacts will be available in:
- `artifacts/contracts/` - Compiled contract artifacts
- `typechain-types/` - TypeScript type definitions

These files are needed for frontend integration.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Security

- Never commit your `.env` file or expose your private key
- Keep your private key secure and never share it
- Use environment variables for sensitive data
- Regularly update dependencies for security patches
