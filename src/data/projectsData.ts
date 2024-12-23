import { Project } from '../types';
import project1 from '../assets/projects/project-1.jpeg';
import project2 from '../assets/projects/project-2.jpeg';
import project3 from '../assets/projects/project-3.jpeg';
import project4 from '../assets/projects/project-4.jpeg';
import project5 from '../assets/projects/project-5.jpeg';
import project6 from '../assets/projects/project-6.jpeg';
import project7 from '../assets/projects/project-7.jpeg';
import project8 from '../assets/projects/project-8.jpeg';

const formatTitleToUrl = (title: string): string => {
  return title.replace(/^\d+\.\s+/, '').toLowerCase().replace(/\s+/g, '-');
};

export const projectsData: Project[] = [
  {
    id: 'renegade-dark-pool',
    title: "Renegade Dark Pool",
    link: `/explore/${formatTitleToUrl("Renegade Dark Pool")}`,
    description: "A privacy-preserving dark pool utilizing zero-knowledge proofs for confidential and secure trading on the blockchain.",
    image: project1,
    difficulty: "Advanced",
    category: "DeFi"
  },
  {
    id: 'fairblock-network',
    title: "Fairblock Network",
    link: `/explore/${formatTitleToUrl("Fairblock Network")}`,
    description: "A confidentiality network supporting applications like frontrunning-protected orders, coercion-resistant voting, and confidential AI.",
    image: project2,
    difficulty: "Advanced",
    category: "Network"
  },
  {
    id: 'superposition-finance',
    title: "Superposition Finance",
    link: `/explore/${formatTitleToUrl("Superposition Finance")}`,
    description: "A decentralized finance suite focusing on cost efficiency, safety, and composability. Integrates Stylus for building robust and scalable DeFi applications.",
    image: project3,
    difficulty: "Beginner",
    category: "DeFi"
  },
  {
    id: 'crypto-valley-exchange',
    title: "Crypto Valley Exchange (CVEX)",
    link: `/explore/${formatTitleToUrl("Crypto Valley Exchange")}`,
    description: "An on-chain derivatives trading platform offering portfolio margin management with enhanced risk analysis powered by Stylus.",
    image: project4,
    difficulty: "Advanced",
    category: "DeFi"
  },
  {
    id: 'lit-protocol',
    title: "Lit Protocol",
    link: `/explore/${formatTitleToUrl("Lit Protocol")}`,
    description: "A decentralized protocol enabling programmable key pairs and secure access control. Stylus supports integration with Rust-based cryptographic solutions.",
    image: project5,
    difficulty: "Beginner",
    category: "Protocol"
  },
  {
    id: 'axelar-network',
    title: "Axelar Network",
    link: `/explore/${formatTitleToUrl("Axelar Network")}`,
    description: "A cross-chain communication network facilitating seamless interoperability between blockchains. Stylus ensures high performance and cost-effective integration.",
    image: project6,
    difficulty: "Beginner",
    category: "Network"
  },
  {
    id: 'layerzero-zro',
    title: "LayerZero (ZRO)",
    link: `/explore/${formatTitleToUrl("LayerZero-zro")}`,
    description: "An omnichain interoperability protocol connecting blockchains for seamless decentralized application integration. Powered by Stylus and WebAssembly.",
    image: project7,
    difficulty: "Advanced",
    category: "Web3"
  },
  {
    id: 'aetherverse',
    title: "Aetherverse",
    link: `/explore/${formatTitleToUrl("Aetherverse")}`,
    description: "A gaming and metaverse ecosystem using Stylus for high-performance mechanics and scalable infrastructure with Ethereum compatibility.",
    image: project8,
    difficulty: "Beginner",
    category: "Web3"
  }
];