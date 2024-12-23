import { Lesson } from '../types/lesson';

export const lessons: Lesson[] = [
  //lesson1
  {
    lessonNumber: 1,
    id: 'what-is-arbitrum-stylus',
    courseId: 'introduction-to-stylus',
    title: 'What is Arbitrum Stylus?',
    duration: '3 mins',
    totalSections: 4,
    sections: [
      {
        id: 'introduction',
        title: '1. Introduction to Arbitrum and Stylus',
        content: 'Ethereum, as a leading blockchain platform, has revolutionized decentralized applications (dApps) and smart contracts. However, scalability and high gas fees remain persistent challenges for Ethereum developers. Layer-2 scaling solutions such as Arbitrum emerged to address these limitations by offering faster, cheaper, and more efficient transaction processing.',
        infoBoxes: [
          {
            title: 'Key Innovation',
            content: 'Arbitrum Stylus introduces multi-language smart contract development, allowing developers to write Ethereum-compatible contracts in languages like Rust, C, and C++ in addition to Solidity.',
            variant: 'info'
          }
        ],
        lineItems: [
          {
            title: 'Integration',
            content: 'Rust and other programming languages enables developers to unlock 10x performance improvements, significantly reduce gas costs, and write scalable smart contracts. Unlike traditional Ethereum Virtual Machine (EVM) constraints, Stylus leverages WASM (WebAssembly) for greater efficiency and speed.'
          }
        ],
      },
      {
        id: 'importance',
        title: '2. Why Arbitrum Stylus Matters in Web3 Development',
        content: 'Arbitrum Stylus revolutionizes Web3 development by enabling multi-language support and high-performance smart contracts through WebAssembly (WASM). It empowers developers to build efficient, scalable, and innovative dApps while maintaining seamless Ethereum compatibility.',
        gridItems: [
          {
            title: 'Multi-Language Support',
            content: 'Empowers developers to write contracts in familiar languages such as Rust, C, and C++, allowing entry for non-Solidity developers.'
          },
          {
            title: 'Improved Gas Efficiency',
            content: 'Achieves significant gas optimization through WebAssembly (WASM), leading to lower gas fees and better scalability.'
          },
          {
            title: 'Performance Enhancements',
            content: 'By leveraging WASM, Stylus smart contracts can achieve near-native performance while maintaining Ethereum compatibility. This allows developers to build computationally intensive dApps, DeFi protocols, and advanced data processing systems without sacrificing speed.'
          },
          {
            title: 'Compatibility with Ethereum',
            content: 'Stylus integrates seamlessly with Ethereum tools, infrastructure, and existing smart contracts. Developers can mix Solidity-based and Stylus-based contracts within the same dApp, preserving Ethereum\'s strong foundation while benefiting from Stylus improvements.'
          }
        ],
        infoBoxes: [
          {
            title: 'For Example',
            content: 'Rust: Known for its memory safety, speed, and modern syntax, Rust is ideal for high-performance applications and reduces common vulnerabilities like memory overflows.\n\nC/C++: These languages have been at the heart of high-performance computing for decades. With Stylus, developers can now reuse their existing expertise to build dApps.',
            variant: 'info'
          }
        ]
      },
      {
        id: 'how-it-works',
        title: '3. How Stylus Works: A Deep Dive',
        content: 'Arbitrum Stylus operates on the WebAssembly (WASM) execution layer, which enables compatibility with multiple programming languages. Here\'s how Stylus works under the hood:',
        gridItems: [
          {
            title: 'WASM Execution',
            content: 'WebAssembly (WASM) is a binary instruction format that allows code written by developers in languages like Rust and C++ to run efficiently on blockchain environments. Stylus uses WASM to replace the traditional EVM while retaining Ethereum compatibility.'
          },
          {
            title: 'Multi-Language Compilation',
            content: 'Stylus contracts are compiled into WASM binaries, similar to how Solidity contracts are compiled into EVM bytecode. This allows developers to write contracts in high-level languages (e.g., Rust) and deploy them seamlessly to the Arbitrum Layer-2 network.'
          },
        ],
        lineItems: [
          {
            title: 'Ethereum Compatibility',
            content: 'Stylus maintains full Ethereum compatibility. Developers can use familiar tools like Hardhat, Remix, and Arbitrum Nitro to deploy Stylus-based contracts alongside Solidity contracts. This hybrid approach allows incremental adoption without breaking existing infrastructure.\n\nFor instance, if you already have a Solidity smart contract handling user authentication, you can integrate a Stylus smart contract written in Rust for the computationally intensive logic of your dApp.'
          }
        ],
        infoBoxes: [
          {
            title: 'Why WASM?',
            content: 'WASM is portable, efficient, and offers near-native execution speeds, making it perfect for blockchain-based applications.',
            variant: 'info'
          }
        ]
      },
      {
        id: 'applications',
        title: '4. Real-World Applications of Arbitrum Stylus',
        content: 'Stylus unlocks a new realm of possibilities for decentralized application (dApp) development by combining multi-language support, enhanced performance, and gas efficiency. It empowers developers to create advanced DeFi platforms, blockchain games, data-driven dApps, and more.',
        gridItems: [
          {
            title: 'High-Performance DeFi Platforms',
            content: 'Stylus enables developers to write advanced DeFi (decentralized finance) protocols that require heavy computations and fast execution, such as lending platforms, yield optimizers, and automated market makers (AMMs).'
          },
          {
            title: 'Blockchain Gaming',
            content: 'Blockchain games often suffer from slow transaction speeds and expensive gas fees. Stylus solves this by enabling WASM execution, allowing games to process thousands of interactions seamlessly while keeping costs low.'
          },
          {
            title: 'Data-Intensive dApps',
            content: 'Stylus is ideal for applications that require data aggregation, analysis, or processing, such as prediction markets, decentralized analytics tools, and real-time blockchain oracles.'
          },
          {
            title: 'Multi-Language Interoperability',
            content: 'Stylus contracts written in Rust or C++ can work alongside existing Solidity contracts. This is particularly useful for projects with hybrid needs or those transitioning from Solidity to Stylus.'
          }
        ]
      }
    ],
    keyTakeaways: [
      'What Arbitrum Stylus is: A next-generation platform enabling multi-language smart contract development.',
      'Why Stylus matters: Improved gas efficiency, near-native performance, and broader developer accessibility.',
      'How Stylus works: Leveraging WASM for efficient execution while maintaining Ethereum compatibility.'
    ],
  },

  //lesson2
  {
    lessonNumber: 2,
    id: 'setting-up-environment',
    courseId: 'introduction-to-stylus',
    title: 'Setting Up Your Development Environment',
    duration: '5 mins',
    totalSections: 4,
    sections: [
      {
        id: 'introduction',
          title: '1. Why a Proper Environment is Essential',
          content: 'A proper development environment is the cornerstone of efficient and error-free smart contract development. When working with Arbitrum Stylus, your environment must support WebAssembly (WASM) compilation, multi-language development (e.g., Rust, C, or C++), and Ethereum compatibility. Setting up the right tools ensures seamless contract deployment, debugging, and testing, saving you time and avoiding costly mistakes.',
          infoBoxes: [
            {
              title: 'Key Benefit',
              content: 'A robust environment streamlines the process of writing, testing, and deploying Stylus contracts, reducing time spent on debugging or environment-specific issues.',
              variant: 'info'
            }
          ],
          lineItems: [
            {
              title: 'Why WASM Matters',
              content: 'Since Arbitrum Stylus leverages WebAssembly (WASM), your environment must include compilers and libraries that support WASM output, ensuring high performance and compatibility with the Arbitrum Layer-2 network.'
            }
          ]
        },
        {
          id: 'required-tools',
          title: '2. Tools and Dependencies for Stylus Development',
          content: 'To start developing with Arbitrum Stylus, you need specific tools that cater to multi-language development and WASM compilation. These tools include compilers, package managers, and Ethereum-compatible frameworks for deployment and testing.',
          gridItems: [
            {
              title: 'Rust Compiler',
              content: 'Install the Rust compiler using the command `curl --proto "=https" --tlsv1.2 -sSf https://sh.rustup.rs | sh`. This compiler converts Rust code into WASM binaries for Stylus.'
            },
            {
              title: 'C++ Compiler',
              content: 'For C++, install a compiler like GCC or Clang to write and compile contracts into WASM format.'
            },
            {
              title: 'Node.js and npm',
              content: 'Install Node.js to manage packages and run Ethereum development tools such as Hardhat and Truffle.'
            },
            {
              title: 'Arbitrum CLI',
              content: 'Install the Arbitrum CLI to deploy and interact with contracts on the Arbitrum network.'
            }
          ],
          infoBoxes: [
            {
              title: 'Pro Tip',
              content: 'Use a version manager like NVM for Node.js or rustup for Rust to easily switch between versions when working on multiple projects.',
              variant: 'info'
            }
          ]
        },
        {
          id: 'configuring-tools',
          title: '3. Configuring Your Development Environment',
          content: 'Once the tools are installed, configuring them correctly ensures a smooth development experience. Proper configurations prevent compatibility issues and enable efficient debugging and deployment.',
          lineItems: [
            {
              title: 'Setting Up Rust for WASM',
              content: 'To compile Rust code to WASM, add the WASM target to your Rust installation using the command `rustup target add wasm32-unknown-unknown`. This ensures your contracts are compatible with Stylus.'
            },
            {
              title: 'Configuring Ethereum Tools',
              content: 'Set up Hardhat or Truffle for deploying and testing contracts. Create a new Hardhat project using `npx hardhat` and install necessary plugins for WASM integration.'
            }
          ],
          gridItems: [
            {
              title: 'Installing Arbitrum Plugins',
              content: 'Integrate Arbitrum plugins into your Hardhat project for deploying contracts directly to the Arbitrum network.'
            },
            {
              title: 'Testing Deployment Configurations',
              content: 'Run tests to ensure the configurations work as expected. Use the command `npx hardhat test` to verify deployment scripts and contract functionality.'
            }
          ],
          infoBoxes: [
            {
              title: 'Common Issue',
              content: 'Ensure all environment variables, such as RPC URLs and private keys, are correctly set in a `.env` file to avoid deployment errors.',
              variant: 'warning'
            }
          ]
        },
        {
          id: 'validating-setup',
          title: '4. Validating Your Environment Setup',
          content: 'Validation ensures that your environment is ready for development. Run a simple Rust-based Stylus contract through the deployment process to verify that all tools and configurations are functioning as intended.',
          gridItems: [
            {
              title: 'Writing a Test Contract',
              content: 'Write a simple Rust contract that increments a counter and compiles it to WASM. This tests the functionality of your Rust and WASM setup.'
            },
            {
              title: 'Deploying to Arbitrum Testnet',
              content: 'Use the Arbitrum CLI to deploy the compiled WASM contract to the testnet and validate its performance. Execute deployment scripts using `npx hardhat run`.'
            },
          ],
          lineItems: [
            {
              title: 'Testing on Arbitrum Explorer',
              content: 'View the deployed contract on Arbitrum Explorer to ensure it interacts as expected with the network.'
            },
            {
              title: 'Troubleshooting Deployment Issues',
              content: 'If deployment fails, double-check your network configurations, RPC URL, and private keys. Also, ensure your WASM file is properly compiled.'
            }
          ],
          infoBoxes: [
            {
              title: 'Best Practice',
              content: 'Always use testnet environments before deploying to mainnet to identify and resolve any issues without incurring high costs.',
              variant: 'info'
            }
          ]
        }
      ],
      keyTakeaways: [
        'Understand the importance of setting up a proper environment for Stylus development.',
        'Learn the essential tools and dependencies, including Rust, C++, Node.js, and Arbitrum CLI.',
        'Master configurations for WASM compilation and Ethereum tools like Hardhat.',
        'Validate your setup by deploying a test contract to the Arbitrum Testnet.'
      ],
  },

  //lesson3
  {
    lessonNumber: 3,
    id: 'understanding-rust-for-stylus',
    courseId: 'introduction-to-stylus',
    title: 'Understanding Rust for Stylus',
    duration: '6 mins',
    totalSections: 4,
    sections: [
      {
        id: 'introduction',
        title: '1. Why Rust is Ideal for Stylus Development',
        content: 'Rust is a systems programming language renowned for its speed, memory safety, and modern syntax. These features make it an ideal choice for developing high-performance, secure, and efficient smart contracts on Arbitrum Stylus. Rust’s ownership model eliminates common programming errors like null pointer dereferencing and memory leaks, which are critical for blockchain applications where security is paramount.',
        infoBoxes: [
          {
            title: 'Key Benefit',
            content: 'Rust ensures safety and speed, making it perfect for creating secure smart contracts on Stylus with better gas optimization and reduced risk of vulnerabilities.',
            variant: 'info'
          }
        ],
        gridItems: [
          {
            title: 'Performance',
            content: 'Rust’s compiled binaries are highly optimized, allowing near-native performance for WASM-based smart contracts.'
          },
          {
            title: 'Memory Safety',
            content: 'Rust enforces strict memory management rules at compile time, preventing issues like memory leaks and buffer overflows.'
          }
        ]
      },
      {
        id: 'key-features',
        title: '2. Key Features of Rust for Stylus',
        content: 'Rust provides several features that make it a superior choice for Stylus smart contract development. These features enhance the efficiency, readability, and security of your code.',
        gridItems: [
          {
            title: 'Ownership and Borrowing',
            content: 'Rust’s ownership model ensures that data is never accessed incorrectly. Borrowing rules allow efficient memory management without compromising safety.'
          },
          {
            title: 'Pattern Matching',
            content: 'Pattern matching allows developers to write concise and clear conditional logic, essential for handling smart contract state transitions.'
          },
          {
            title: 'Concurrency',
            content: 'Rust enables safe concurrency, allowing developers to write multi-threaded logic for advanced smart contract use cases.'
          },
          {
            title: 'Extensive Library Support',
            content: 'Rust’s ecosystem includes powerful libraries like `wasm-bindgen` and `serde` for integrating with WASM and handling data serialization.'
          }
        ],
        infoBoxes: [
          {
            title: 'Pro Tip',
            content: 'Leverage Rust’s crates (libraries) for common smart contract tasks like state management, serialization, and cryptographic operations.',
            variant: 'info'
          }
        ]
      },
      {
        id: 'getting-started',
        title: '3. Setting Up Rust for Stylus Development',
        content: 'To start writing Rust-based smart contracts for Arbitrum Stylus, you need to install and configure Rust, along with the tools required for compiling to WebAssembly (WASM).',
        lineItems: [
          {
            title: 'Installing Rust',
            content: 'Install Rust using the command: `curl --proto "=https" --tlsv1.2 -sSf https://sh.rustup.rs | sh`. Follow the prompts to set up Rust on your system.'
          },
          {
            title: 'Adding WASM Target',
            content: 'Enable WASM compilation with the command: `rustup target add wasm32-unknown-unknown`. This is essential for compiling your Rust code to WASM binaries compatible with Stylus.'
          }
        ],
        gridItems: [
          {
            title: 'Using Cargo',
            content: 'Cargo is Rust’s package manager and build tool. Use `cargo new project-name` to create a new Rust project and manage dependencies.'
          },
          {
            title: 'Installing Useful Crates',
            content: 'Add crates like `serde` (for serialization) and `wasm-bindgen` (for WASM integration) to your project using Cargo.'
          }
        ],
        infoBoxes: [
          {
            title: 'Common Issue',
            content: 'Ensure you are using the latest version of Rust and Cargo to avoid compatibility issues with WASM compilation.',
            variant: 'warning'
          }
        ]
      },
      {
        id: 'writing-smart-contracts',
        title: '4. Writing a Basic Smart Contract in Rust',
        content: 'Once your environment is set up, you can start writing your first Rust-based smart contract for Stylus. A basic contract typically involves defining the state, implementing logic, and exposing entry points.',
        gridItems: [
          {
            title: 'Defining State',
            content: 'Use Rust structs to define the state of your contract. For example, a counter contract could use a struct `pub struct Counter { value: u32 }`.'
          },
          {
            title: 'Implementing Logic',
            content: 'Write functions to manipulate the state. For instance, `pub fn increment(&mut self)` increases the counter value.'
          },
          {
            title: 'Exposing Entry Points',
            content: 'Use Rust’s `pub` keyword to expose public methods that can be called externally. These methods serve as the entry points for interacting with your contract.'
          },
          {
            title: 'Compiling to WASM',
            content: 'Use Cargo to compile your contract to WASM with the command: `cargo build --target wasm32-unknown-unknown --release`.'
          }
        ],
        lineItems: [
          
          {
            title: 'Testing Your Contract',
            content: 'Test your contract locally before deploying it to the Arbitrum network. Use Rust’s built-in testing framework with the `cargo test` command.'
          }
        ],
        infoBoxes: [
          {
            title: 'Best Practice',
            content: 'Write comprehensive tests for all contract methods to ensure their correctness and reliability.',
            variant: 'info'
          }
        ]
      }
    ],
    keyTakeaways: [
      'Understand why Rust is ideal for Stylus development due to its performance, memory safety, and modern syntax.',
      'Learn key Rust features like ownership, pattern matching, and concurrency for writing efficient smart contracts.',
      'Set up Rust for WASM compilation and Stylus development by installing necessary tools and crates.',
      'Write and test a basic Rust-based smart contract, compiling it to WASM and preparing it for deployment.'
    ]
  },

  //lesson4
  {
    lessonNumber: 4,
    id: 'writing-first-smart-contract',
    courseId: 'introduction-to-stylus',
    title: 'Writing Your First Smart Contract',
    duration: '6 mins',
    totalSections: 4,
    sections: [
      {
        id: 'introduction',
        title: '1. Introduction to Smart Contract Basics',
        content: 'A smart contract is a self-executing program stored on the blockchain. It automates transactions, enforces agreements, and ensures trust between parties without intermediaries. With Arbitrum Stylus, developers can write contracts using Rust, C, or C++, alongside Solidity. These languages offer improved performance, flexibility, and security, allowing developers to create scalable, cost-effective contracts.',
        infoBoxes: [
          {
            title: 'Key Innovation',
            content: 'Smart contracts on Stylus leverage WebAssembly (WASM), enabling high performance and compatibility across multiple languages.',
            variant: 'info'
          }
        ],
        lineItems: [
          {
            title: 'Why Use Rust?',
            content: 'Rust’s speed, memory safety, and modern syntax make it ideal for secure and efficient smart contract development.'
          }
        ]
      },
      {
        id: 'setting-up',
        title: '2. Setting Up Your Project',
        content: 'Before writing your first contract, you must set up a properly configured Rust project with WASM compilation enabled. This ensures smooth development and deployment.',
        gridItems: [
          {
            title: 'Create a New Project',
            content: 'Run `cargo new my_first_contract` to create a new Rust project directory with boilerplate files.'
          },
          {
            title: 'Install Dependencies',
            content: 'Add dependencies like `serde` for serialization and `wasm-bindgen` for WASM integration in the `Cargo.toml` file.'
          },
          {
            title: 'Add WASM Target',
            content: 'Enable WASM compilation with `rustup target add wasm32-unknown-unknown`. This ensures compatibility with Arbitrum Stylus.'
          },
          {
            title: 'Compile the Project',
            content: 'Use `cargo build --target wasm32-unknown-unknown --release` to compile your project into a WASM binary.'
          }
        ],
        infoBoxes: [
          {
            title: 'Pro Tip',
            content: 'Organize your project structure to separate contract logic, state, and tests for better maintainability.',
            variant: 'info'
          }
        ]
      },
      {
        id: 'writing-contract',
        title: '3. Writing the Smart Contract Code',
        content: 'A smart contract on Stylus typically consists of state definitions, methods for manipulating the state, and public entry points for blockchain interaction.',
        lineItems: [
          {
            title: 'Defining State',
            content: 'Use a Rust struct to define the contract’s state. For example, a simple counter contract could have a `value` field to track the counter.'
          },
          {
            title: 'Implementing Methods',
            content: 'Write Rust methods to manipulate the contract’s state. For instance, an `increment` method can increase the counter value.'
          }
        ],
        gridItems: [
          {
            title: 'Expose Entry Points',
            content: 'Use `wasm-bindgen` macros to expose methods as public entry points for interaction with the contract on the blockchain.'
          },
          {
            title: 'Compile to WASM',
            content: 'Once the contract is written, compile it into a WASM binary for deployment using `cargo build --target wasm32-unknown-unknown --release`.'
          }
        ],
        infoBoxes: [
          {
            title: 'Example Code',
            content: 'Define a contract state:\n```rust\npub struct Counter {\n    value: u32,\n}\n\nimpl Counter {\n    pub fn new() -> Self {\n        Counter { value: 0 }\n    }\n}\n```',
            variant: 'info'
          }
        ]
      },
      {
        id: 'testing-and-deployment',
        title: '4. Testing and Deploying Your Contract',
        content: 'Testing and validating your contract locally ensures its functionality before deploying it to the Arbitrum network.',
        gridItems: [
          {
            title: 'Write Tests',
            content: 'Rust’s built-in testing framework can be used to validate contract logic. For example, test the `increment` method to ensure it works as expected.'
          },
          {
            title: 'Deploy to Testnet',
            content: 'Use the Arbitrum CLI or Hardhat plugins to deploy your compiled contract to the Arbitrum testnet.'
          }
        ],
        lineItems: [
          {
            title: 'Use Arbitrum Explorer',
            content: 'After deploying the contract, verify its state and interactions using Arbitrum Explorer.'
          },
          {
            title: 'Troubleshoot Deployment Issues',
            content: 'If issues arise, double-check your network configurations, private keys, and WASM binaries for errors.'
          }
        ],
        infoBoxes: [
          {
            title: 'Best Practice',
            content: 'Always test your contracts thoroughly on the testnet before deploying them to the mainnet to identify and fix any issues.',
            variant: 'info'
          }
        ]
      }
    ],
    keyTakeaways: [
      'Understand the basics of smart contracts and their role in automating blockchain transactions.',
      'Learn how to set up a Rust project for Stylus development with WASM compilation enabled.',
      'Write a simple contract with state definitions, methods, and exposed entry points.',
      'Test and deploy your first contract to the Arbitrum testnet for validation and troubleshooting.'
    ]
  },

  //lesson5
  {
    lessonNumber: 5,
    id: 'deploying-simple-stylus-contract',
    courseId: 'introduction-to-stylus',
    title: 'Deploying a Simple Stylus Contract',
    duration: '6 mins',
    totalSections: 4,
    sections: [
      {
        id: 'introduction',
        title: '1. The Importance of Deployment',
        content: 'Deployment is the process of making your smart contract available on the blockchain for others to interact with. On Arbitrum Stylus, deploying a contract is faster and more cost-efficient due to its Layer-2 scaling capabilities. By deploying your contract, you bridge the gap between development and real-world blockchain interaction.',
        infoBoxes: [
          {
            title: 'Key Fact',
            content: 'Deployment to the Arbitrum network reduces transaction costs compared to Ethereum Layer-1, making it ideal for developers and users.',
            variant: 'info'
          }
        ],
        lineItems: [
          {
            title: 'Why Deployment Matters',
            content: 'Deployment allows users to interact with your contract directly, enabling decentralized functionality like payments, state changes, and more.'
          },
          {
            title: 'Arbitrum Testnet',
            content: 'Start with the Arbitrum testnet for testing your contract in a real blockchain environment before deploying to the mainnet.'
          }
        ]
      },
      {
        id: 'preparing-deployment',
        title: '2. Preparing for Deployment',
        content: 'Before deploying your contract, ensure that your environment is configured correctly and your contract is thoroughly tested. Proper preparation avoids unnecessary delays and costly errors.',
        gridItems: [
          {
            title: 'Compile Your Contract',
            content: 'Use `cargo build --target wasm32-unknown-unknown --release` to compile your Rust-based contract into a WASM binary.'
          },
          {
            title: 'Set Up a Wallet',
            content: 'Create or configure a wallet (e.g., MetaMask) connected to the Arbitrum testnet. Fund your wallet with test ETH from a faucet.'
          },
          {
            title: 'Set Up Environment Variables',
            content: 'Create a `.env` file to securely store your RPC URL, private keys, and other sensitive information required for deployment.'
          },
          {
            title: 'Verify Dependencies',
            content: 'Ensure all required tools, such as the Arbitrum CLI or Hardhat plugins, are installed and configured.'
          }
        ],
        infoBoxes: [
          {
            title: 'Pro Tip',
            content: 'Always double-check your contract logic and WASM binary before deployment to prevent deploying faulty code.',
            variant: 'info'
          }
        ]
      },
      {
        id: 'deployment-process',
        title: '3. Deploying the Contract',
        content: 'Deploying your contract involves interacting with the blockchain via a deployment tool or CLI. For Arbitrum, you can use the Arbitrum CLI or Hardhat for a streamlined process.',
        lineItems: [
          {
            title: 'Using Arbitrum CLI',
            content: 'Run the following command to deploy your contract:\n```bash\narbitrum deploy --contract-path target/wasm32-unknown-unknown/release/contract.wasm --network testnet\n```'
          },
          {
            title: 'Using Hardhat',
            content: 'For a Hardhat-based deployment, use the following deployment script:\n```javascript\nconst hre = require("hardhat");\nasync function main() {\n  const Contract = await hre.ethers.getContractFactory("Contract");\n  const contract = await Contract.deploy();\n  await contract.deployed();\n  console.log("Contract deployed to:", contract.address);\n}\nmain().catch((error) => {\n  console.error(error);\n  process.exitCode = 1;\n});\n```'
          }
        ],
        gridItems: [
          {
            title: 'Monitor Deployment',
            content: 'After deploying, monitor the transaction status on the Arbitrum Explorer using the transaction hash.'
          },
          {
            title: 'Verify Contract',
            content: 'Verify your contract on Arbitrum Explorer to make it accessible for public interactions.'
          }
        ],
        infoBoxes: [
          {
            title: 'Common Issue',
            content: 'Deployment errors often occur due to incorrect RPC URLs or insufficient test ETH. Verify your configuration before retrying.',
            variant: 'warning'
          }
        ]
      },
      {
        id: 'post-deployment',
        title: '4. Post-Deployment Actions',
        content: 'After deploying your contract, there are several critical steps to ensure it operates as intended and is ready for users.',
        gridItems: [
          {
            title: 'Test Interactions',
            content: 'Interact with your deployed contract using a frontend or CLI to verify all methods work as expected.'
          },
          {
            title: 'Update Frontend',
            content: 'If your contract is part of a dApp, update the frontend code to reference the deployed contract address.'
          },
          {
            title: 'Monitor Logs',
            content: 'Use tools like Arbitrum Explorer or blockchain analytics to monitor contract interactions and performance.'
          },
          {
            title: 'Document Contract Details',
            content: 'Keep a record of your contract’s address, ABI, and deployment settings for future reference or team collaboration.'
          }
        ],
        lineItems: [
          {
            title: 'Prepare for Mainnet',
            content: 'If the contract passes all testnet checks, prepare for mainnet deployment by ensuring sufficient ETH and finalizing all configurations.'
          }
        ],
        infoBoxes: [
          {
            title: 'Best Practice',
            content: 'Use a multi-signature wallet for contract ownership on the mainnet to enhance security.',
            variant: 'info'
          }
        ]
      }
    ],
    keyTakeaways: [
      'Understand the importance of deploying a smart contract to make it accessible on the blockchain.',
      'Learn how to prepare for deployment by compiling the contract, setting up wallets, and verifying dependencies.',
      'Execute deployment using tools like the Arbitrum CLI or Hardhat with sample scripts.',
      'Perform post-deployment actions such as verifying functionality, updating the frontend, and preparing for mainnet deployment.'
    ]
  }  
];