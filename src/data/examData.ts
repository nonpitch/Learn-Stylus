import { Exam } from '../types/exam';
import exam1 from '../assets/exams/exam-1.jpeg';
import exam2 from '../assets/exams/exam-2.jpeg';
import exam3 from '../assets/exams/exam-3.jpeg';
import exam4 from '../assets/exams/exam-4.jpeg';
import exam5 from '../assets/exams/exam-5.jpeg';
import exam6 from '../assets/exams/exam-6.jpeg';
import exam7 from '../assets/exams/exam-7.jpeg';
import exam8 from '../assets/exams/exam-8.jpeg';
import exam9 from '../assets/exams/exam-9.jpeg';
import exam10 from '../assets/exams/exam-10.jpeg';
import exam11 from '../assets/exams/exam-11.jpeg';
import exam12 from '../assets/exams/exam-12.jpeg';

const formatTitleToUrl = (title: string): string => {
  return title.replace(/^\d+\.\s+/, '').toLowerCase().replace(/\s+/g, '-');
};

export const examData: Exam[] = [
  {
    id: 'exam-1',
    title: "Exam 1: Introduction to Stylus Assessment",
    link: `/exams/${formatTitleToUrl("Introduction to Stylus Assessment")}`,
    description: "Test your knowledge of the fundamentals of Stylus, its features, and the basics of smart contract development across multiple programming languages.",
    image: exam1,
    difficulty: "Beginner",
    category: "Fundamentals",
    status: "completed",
  },
  {
    id: 'exam-2',
    title: "Exam 2: Arbitrum Layer-2 Foundations",
    link: `/exams/${formatTitleToUrl("Arbitrum Layer-2 Foundations")}`,
    description: "Assess your understanding of Arbitrum as a Layer-2 scaling solution, its architecture, and its integration with Stylus for efficient contract deployment.",
    image: exam2,
    difficulty: "Beginner",
    category: "Fundamentals",
    status: "coming-soon",
  },
  {
    id: 'exam-3',
    title: "Exam 3: Rust for Smart Contracts",
    link: `/exams/${formatTitleToUrl("Rust for Smart Contracts")}`,
    description: "Demonstrate your skills in using Rust to create Stylus-compatible smart contracts, focusing on syntax, variables, and debugging techniques.",
    image: exam3,
    difficulty: "Beginner",
    category: "Development",
    status: "coming-soon",
  },
  {
    id: 'exam-4',
    title: "Exam 4: Stylus vs. Solidity: Key Concepts",
    link: `/exams/${formatTitleToUrl("Stylus vs. Solidity: Key Concepts")}`,
    description: "Evaluate your knowledge of the differences between Stylus and Solidity, including performance optimization and interfacing strategies.",
    image: exam4,
    difficulty: "Beginner",
    category: "Fundamentals",
    status: "coming-soon",
  },
  {
    id: 'exam-5',
    title: "Exam 5: Gas Optimization Techniques",
    link: `/exams/${formatTitleToUrl("Gas Optimization Techniques")}`,
    description: "Challenge your ability to identify and implement gas optimization techniques in Stylus, including efficient coding practices and real-world case studies.",
    image: exam5,
    difficulty: "Beginner",
    category: "Optimization",
    status: "coming-soon",
  },
  {
    id: 'exam-6',
    title: "Exam 6: Debugging Smart Contracts",
    link: `/exams/${formatTitleToUrl("Debugging Stylus Contracts")}`,
    description: "Test your debugging expertise by identifying common errors and applying effective troubleshooting techniques to Stylus-based contracts.",
    image: exam6,
    difficulty: "Beginner",
    category: "Optimization",
    status: "coming-soon",
  },
  {
    id: 'exam-7',
    title: "Exam 7: dApp Deployment Essentials",
    link: `/exams/${formatTitleToUrl("dApp Deployment Essentials")}`,
    description: "Assess your skills in building and deploying decentralized applications using Stylus, from contract integration to monitoring deployment results.",
    image: exam7,
    difficulty: "Beginner",
    category: "Development",
    status: "coming-soon",
  },
  {
    id: 'exam-8',
    title: "Exam 8: NFT Development with Stylus",
    link: `/exams/${formatTitleToUrl("NFT Development with Stylus")}`,
    description: "Prove your proficiency in creating and managing NFTs using Stylus, including contract development, minting, and building a frontend.",
    image: exam8,
    difficulty: "Beginner",
    category: "Development",
    status: "coming-soon",
  },
  {
    id: 'exam-9',
    title: "Exam 9: Mastering Arbitrum Tools",
    link: `/exams/${formatTitleToUrl("Mastering Arbitrum Tools")}`,
    description: "Demonstrate your familiarity with essential Arbitrum tools for development, testing, and deployment, such as Arbiscan and the Arbitrum Bridge.",
    image: exam9,
    difficulty: "Beginner",
    category: "Security & Tools",
    status: "coming-soon",
  },
  {
    id: 'exam-10',
    title: "Exam 10: Advanced Smart Contract Strategies",
    link: `/exams/${formatTitleToUrl("Advanced Smart Contract Strategies")}`,
    description: "Test your expertise in advanced techniques for managing complex states, optimizing performance, and writing modular smart contracts.",
    image: exam10,
    difficulty: "Advanced",
    category: "Development",
    status: "coming-soon",
  },
  {
    id: 'exam-11',
    title: "Exam 11: Cross-Chain Development Mastery",
    link: `/exams/${formatTitleToUrl("Cross-Chain Development Mastery")}`,
    description: "Assess your understanding of cross-chain decentralized applications, focusing on cross-chain bridges, Layer-1 integration, and deployment strategies.",
    image: exam11,
    difficulty: "Advanced",
    category: "Development",
    status: "coming-soon",
  },
  {
    id: 'exam-12',
    title: "Exam 12: Stylus Security Best Practices",
    link: `/exams/${formatTitleToUrl("Stylus Security Best Practices")}`,
    description: "Validate your knowledge of smart contract security, identifying vulnerabilities, and implementing secure coding practices in Stylus.",
    image: exam12,
    difficulty: "Advanced",
    category: "Security & Tools",
    status: "coming-soon",
  },
];