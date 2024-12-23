import { ExamQuestions } from '../types/exam';

export const examQuestionsData: ExamQuestions[] = [
  {
    examId: 'exam-1',
    title: "Exam 1: Introduction to Stylus Assessment",
    description: "Test your knowledge of Arbitrum Stylus fundamentals",
    questions: [
      {
        id: 1,
        text: "What is the primary advantage of Arbitrum Stylus over traditional smart contract platforms?",
        options: [
          "Multi-language support",
          "Lower gas fees",
          "Faster transaction speed",
          "All of the above"
        ],
        correctAnswer: "All of the above"
      },
      {
        id: 2,
        text: "Which programming languages does Stylus support for smart contract development?",
        options: [
          "Only Solidity",
          "Rust, C, and C++",
          "JavaScript and Python",
          "Only Assembly"
        ],
        correctAnswer: "Rust, C, and C++"
      },
      {
        id: 3,
        text: "What technology does Stylus use for executing smart contracts?",
        options: [
          "EVM",
          "WebAssembly (WASM)",
          "Docker containers",
          "Native binaries"
        ],
        correctAnswer: "WebAssembly (WASM)"
      },
      {
        id: 4,
        text: "What feature makes Arbitrum Stylus more gas-efficient than traditional EVM?",
        options: [
          "Direct execution of native binaries",
          "Optimized WebAssembly compilation",
          "Use of Solidity-based execution",
          "Layer-1 integration"
        ],
        correctAnswer: "Optimized WebAssembly compilation"
      },
      {
        id: 5,
        text: "What is the role of the Arbitrum Layer-2 network in Stylus development?",
        options: [
          "Providing decentralized storage",
          "Scaling transaction throughput",
          "Enhancing machine learning capabilities",
          "Offering cloud-based execution"
        ],
        correctAnswer: "Scaling transaction throughput"
      },
      {
        id: 6,
        text: "Which tool is commonly used to debug Stylus contracts during development?",
        options: [
          "MetaMask",
          "Remix IDE",
          "Rust Compiler",
          "Arbitrum Explorer"
        ],
        correctAnswer: "Arbitrum Explorer"
      },
      {
        id: 7,
        text: "What is the first step in setting up a development environment for Stylus?",
        options: [
          "Install Web3.js",
          "Download the Arbitrum Stylus toolkit",
          "Set up a Rust development environment",
          "Deploy a contract on the testnet"
        ],
        correctAnswer: "Set up a Rust development environment"
      },
      {
        id: 8,
        text: "Which of the following best describes the deployment process for a Stylus smart contract?",
        options: [
          "Compile the contract in WebAssembly and deploy it to Arbitrum",
          "Write in Solidity and deploy directly on Ethereum",
          "Package the contract as a native binary and upload to Layer-1",
          "None of the above"
        ],
        correctAnswer: "Compile the contract in WebAssembly and deploy it to Arbitrum"
      },
      {
        id: 9,
        text: "How does Stylus enhance multi-language support for developers?",
        options: [
          "By integrating a Solidity-only compiler",
          "By using a WebAssembly-based execution model",
          "By enabling multiple Ethereum virtual machines",
          "By translating non-solidity code to Python"
        ],
        correctAnswer: "By using a WebAssembly-based execution model"
      },
      {
        id: 10,
        text: "What is the purpose of Stylus’s compatibility with WebAssembly?",
        options: [
          "To allow mobile app development",
          "To run smart contracts in a lightweight and high-performance environment",
          "To replace Ethereum's EVM",
          "To use high-level programming languages like Java"
        ],
        correctAnswer: "To run smart contracts in a lightweight and high-performance environment"
      }
    ]
  }
];