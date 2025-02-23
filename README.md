# Dyenah's Counter DApp

This is a decentralized application (DApp) built with **Next.js**, **Tailwind CSS**, **RainbowKit**, and **Wagmi** that allows users to interact with a smart contract on the Ethereum blockchain. The DApp features a clean and user-friendly interface that performs the following functions; **increase**, **decrease**, **reset**, and **retrieve** a counter value. This is a simple project ideal for demonstrating the power of blockchain technology and smart contracts.

## Features
- **Increase Counter**: Increase the counter by 1 or a custom value.
- **Decrease Counter**: Decrease the counter by 1.
- **Reset Counter**: Reset the counter to 0.
- **Get Counter**: Retrieve the current value of the counter.
- **Wallet Integration**: Connect your Ethereum wallet using **RainbowKit**.
- **Responsive Design**: Works seamlessly on desktop,laptops tablets, and mobile devices.

## Technologies Used
- **Frontend**: Next.js, Tailwind CSS
- **Blockchain**: Ethereum, Solidity
- **Wallet Integration**: RainbowKit, Wagmi
- **Deployment**: Vercel

## Live Demo
Check out the live demo: [https://dyenah-counter-dapp.vercel.app]()

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/dinahmaccodes/dyenahs-counter-dapp.git

2. Navigate to the project folder:

 ```bash
Copy
cd dyenahs-counter-dapp
```
3. Install dependencies (if not in device)
```bash
npm install
```
4. Start the development server 
```bash
npm run dev
```
5. Open your browser and visit http://localhost:3000

#### About Smart Contract
The smart contract is deployed on the Ethereum Sepolia testnet. You can find the contract details in the contract.ts file.
You can also find the link to the contract [here](https://sepolia.etherscan.io/address/0x3570fc102acc9e711f333d52919ceadf422c6d59)

#### Live Demo
Check out the live demo: put link here

#### How It Works
1. Connect Your Wallet: Use the Connect Wallet button to link your Ethereum wallet (e.g., MetaMask).
2.  Interact with the Counter:
- Increase: Click "Increase Count" to add 1 to the counter or enter a custom value in the input field.
- Decrease: Click "Decrease Count" to subtract 1 from the counter.
- Reset: Click "Reset Count" to set the counter back to 0.
- Get Count: Click "Get Count" to view the current value of the counter.
- View Transactions: All interactions are recorded on the Ethereum blockchain.

#### Why This Project?
This project is a great example of how to:
- Build a decentralized application (DApp) using modern web technologies.
- Interact with smart contracts on the Ethereum blockchain.
- Integrate wallet connectivity using RainbowKit and Wagmi.
- Create a responsive and user-friendly interface with Tailwind CSS.


