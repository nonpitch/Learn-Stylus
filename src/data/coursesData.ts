import { Course } from '../types';
import course1 from '../assets/courses/course-1.jpeg';
import course2 from '../assets/courses/course-2.jpeg';
import course3 from '../assets/courses/course-3.jpeg';
import course4 from '../assets/courses/course-4.jpeg';
import course5 from '../assets/courses/course-5.jpeg';
import course6 from '../assets/courses/course-6.jpeg';
import course7 from '../assets/courses/course-7.jpeg';
import course8 from '../assets/courses/course-8.jpeg';
import course9 from '../assets/courses/course-9.jpeg';
import course10 from '../assets/courses/course-10.jpeg';
import course11 from '../assets/courses/course-11.jpeg';
import course12 from '../assets/courses/course-12.jpeg';

const formatTitleToUrl = (title: string): string => {
  return title.replace(/^\d+\.\s+/, '').toLowerCase().replace(/\s+/g, '-');
};

export const coursesData: Course[] = [
  {
    id: 'course-1',
    title: "1. Introduction to Stylus",
    link: `/courses/overview/${formatTitleToUrl("1. Introduction to Stylus")}`,
    description: "Basics of Arbitrum Stylus, its features, and how it enables smart contract development with multiple programming languages.",
    image: course1,
    difficulty: "Beginner",
    category: "Fundamentals",
    lessons: [
      { id: "1", title: "What is Arbitrum Stylus?" },
      { id: "2", title: "Setting Up Your Development Environment" },
      { id: "3", title: "Understanding Rust for Stylus" },
      { id: "4", title: "Writing Your First Smart Contract" },
      { id: "5", title: "Deploying a Simple Stylus Contract" }
    ]
  },
  {
    id: 'course-2',
    title: "2. Getting Started with Arbitrum Layer-2",
    link: `/courses/overview/${formatTitleToUrl("2. Getting Started with Arbitrum Layer-2")}`,
    description: "Explore Arbitrum’s role as a Layer-2 scaling solution and how Stylus integrates seamlessly with it.",
    image: course2,
    difficulty: "Beginner",
    category: "Fundamentals",
    lessons: [
      { id: "1", title: "What is Layer-2 Scaling?" },
      { id: "2", title: "Introduction to Arbitrum" },
      { id: "3", title: "Differences Between Layer-1 and Layer-2" },
      { id: "4", title: "Deploying Smart Contracts on Arbitrum Testnet" },
      { id: "5", title: "Exploring Arbitrum Tools" }
    ]
  },
  {
    id: 'course-3',
    title: "3. Writing Smart Contracts with Rust",
    link: `/courses/overview/${formatTitleToUrl("3. Writing Smart Contracts with Rust")}`,
    description: "A hands-on introduction to writing Stylus-compatible smart contracts using Rust.",
    image: course3,
    difficulty: "Beginner",
    category: "Development",
    lessons: [
      { id: "1", title: "Introduction to Rust Syntax" },
      { id: "2", title: "Variables and Functions in Rust" },
      { id: "3", title: "Using Conditionals and Loops" },
      { id: "4", title: "Writing Basic Contracts in Rust" },
      { id: "5", title: "Debugging Rust-Based Contracts" }
    ]
  },
  {
    id: 'course-4',
    title: "4. Stylus vs. Solidity: Key Differences",
    link: `/courses/overview/${formatTitleToUrl("4. Stylus vs. Solidity: Key Differences")}`,
    description: "Compare Stylus with Solidity and understand how to achieve better performance.",
    image: course4,
    difficulty: "Beginner",
    category: "Fundamentals",
    lessons: [
      { id: "1", title: "Introduction to Solidity and Stylus" },
      { id: "2", title: "Performance Comparison: Stylus vs. EVM" },
      { id: "3", title: "Gas Fee Optimization in Stylus" },
      { id: "4", title: "Structuring Contracts for Efficiency" },
      { id: "5", title: "Interfacing Solidity with Stylus" }
    ]
  },
  {
    id: 'course-5',
    title: "5. Gas Optimization in Stylus",
    link: `/courses/overview/${formatTitleToUrl("5. Gas Optimization in Stylus")}`,
    description: "Learn how to write efficient code and reduce gas fees using Arbitrum Stylus.",
    image: course5,
    difficulty: "Beginner",
    category: "Optimization",
    lessons: [
      { id: "1", title: "Understanding Gas in Ethereum" },
      { id: "2", title: "Efficient Coding Practices in Rust" },
      { id: "3", title: "Profiling Gas Costs for Contracts" },
      { id: "4", title: "Optimizing Contract Execution" },
      { id: "5", title: "Real-World Examples of Gas Optimization" }
    ]
  },
  {
    id: 'course-6',
    title: "6. Debugging Stylus Contracts",
    link: `/courses/overview/${formatTitleToUrl("6. Debugging Stylus Contracts")}`,
    description: "Learn how to debug Stylus contracts effectively for robust and error-free development.",
    image: course6,
    difficulty: "Beginner",
    category: "Optimization",
    lessons: [
      { id: "1", title: "Common Smart Contract Errors" },
      { id: "2", title: "Debugging with Rust Tools" },
      { id: "3", title: "Using Arbitrum Explorer for Troubleshooting" },
      { id: "4", title: "Simulating Transactions for Tests" },
      { id: "5", title: "Unit Testing for Stylus Contracts" }
    ]
  },
  {
    id: 'course-7',
    title: "7. Deploying Your First dApp",
    link: `/courses/overview/${formatTitleToUrl("7. Deploying Your First dApp")}`,
    description: "Build and deploy a basic decentralized application using Arbitrum Stylus.",
    image: course7,
    difficulty: "Beginner",
    category: "Development",
    lessons: [
      { id: "1", title: "Creating a Simple Smart Contract" },
      { id: "2", title: "Integrating Smart Contracts with Frontend" },
      { id: "3", title: "Connecting MetaMask to Your dApp" },
      { id: "4", title: "Deploying to Arbitrum Testnet" },
      { id: "5", title: "Monitoring Deployment Results" }
    ]
  },
  {
    id: 'course-8',
    title: "8. Building NFT Applications with Stylus",
    link: `/courses/overview/${formatTitleToUrl("8. Building NFT Applications with Stylus")}`,
    description: "Learn how to create NFT smart contracts and applications using Stylus and Arbitrum.",
    image: course8,
    difficulty: "Beginner",
    category: "Development",
    lessons: [
      { id: "1", title: "Introduction to NFTs and ERC-721" },
      { id: "2", title: "Writing an NFT Contract in Rust" },
      { id: "3", title: "Minting and Managing NFTs" },
      { id: "4", title: "Building a Frontend for NFTs" },
      { id: "5", title: "Deploying an NFT App to Arbitrum" }
    ]
  },
  {
    id: 'course-9',
    title: "9. Exploring Arbitrum Tools",
    link: `/courses/overview/${formatTitleToUrl("9. Exploring Arbitrum Tools")}`,
    description: "Discover the essential tools for development, testing, and deployment on Arbitrum.",
    image: course9,
    difficulty: "Beginner",
    category: "Security & Tools",
    lessons: [
      { id: "1", title: "Using Arbiscan for Contract Verification" },
      { id: "2", title: "Arbitrum Bridge Overview" },
      { id: "3", title: "Profiling Contracts with Arbitrum Explorer" },
      { id: "4", title: "Integrating Arbitrum CLI Tools" },
      { id: "5", title: "Simulating Network Loads" }
    ]
  },
  {
    id: 'course-10',
    title: "10. Advanced Smart Contract Development",
    link: `/courses/overview/${formatTitleToUrl("10. Advanced Smart Contract Development")}`,
    description: "Advanced techniques for managing complex states and optimizing performance.",
    image: course10,
    difficulty: "Advanced",
    category: "Development",
    lessons: [
      { id: "1", title: "Working with Complex Data Structures" },
      { id: "2", title: "Advanced Rust Libraries for Stylus" },
      { id: "3", title: "Managing States and Variables" },
      { id: "4", title: "Optimizing Contract Logic for Gas" },
      { id: "5", title: "Writing Modular Smart Contracts" }
    ]
  },
  {
    id: 'course-11',
    title: "11. Building Cross-Chain dApps",
    link: `/courses/overview/${formatTitleToUrl("11. Building Cross-Chain dApps")}`,
    description: "Learn to create cross-chain decentralized applications using Arbitrum Stylus.",
    image: course11,
    difficulty: "Advanced",
    category: "Development",
    lessons: [
      { id: "1", title: "Introduction to Cross-Chain Architecture" },
      { id: "2", title: "Building Cross-Chain Bridges" },
      { id: "3", title: "Interfacing Layer-1 with Arbitrum" },
      { id: "4", title: "Deploying Cross-Chain Contracts" },
      { id: "5", title: "Testing Cross-Chain dApp Interactions" }
    ]
  },
  {
    id: 'course-12',
    title: "12. Security Best Practices for Stylus",
    link: `/courses/overview/${formatTitleToUrl("12. Security Best Practices for Stylus")}`,
    description: "How to secure Stylus smart contracts by avoiding vulnerabilities and following best practices in Web3 development.",
    image: course12,
    difficulty: "Advanced",
    category: "Security & Tools",
    lessons: [
      { id: "1", title: "Common Smart Contract Vulnerabilities" },
      { id: "2", title: "Secure Coding Practices in Rust" },
      { id: "3", title: "Preventing Reentrancy and Overflows" },
      { id: "4", title: "Smart Contract Auditing Tools" },
      { id: "5", title: "Case Studies: Security in Stylus Contracts" }
    ]
}
];
