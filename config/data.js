const networksP = [
    {
        name: "ZetaChain",
        ticker: "zetachain",
    },
    {
        name: "Sentinel",
        ticker: "sentinel",
    },
    {
        name: "Coreum",
        ticker: "coreum",
    },
    {
        name: "Comdex",
        ticker: "comdex",
    },
    {
        name: "Persistence",
        ticker: "persistence",
    },
    {
        name: "AssetMantle",
        ticker: "assetmantle",
    },
    {
        name: "Human.AI",
        ticker: "humans-ai",
    },
    {
        name: "Mars Protocol",
        ticker: "mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3",
    },
    {
        name: "Teritori",
        ticker: "teritori",
    },
    {
        name: "XPLA",
        ticker: "xpla",
    }
    ,
    {
        name: "Velas",
        ticker: "velas",
    }
    ,
    {
        name: "Oasis",
        ticker: "oasis-network",
    }
    ,
    {
        name: "KYVE Network",
        ticker: "kyve-network",
    }
];

const networkFAQs = [
    {
        name: "ZetaChain",
        ticker: "zetachain",
        faqs: [
            {
                question: "What is ZetaChain?",
                answer: "ZetaChain is a decentralized blockchain platform that focuses on providing fast, secure, and scalable solutions for various applications. It aims to enable seamless transactions and smart contract execution with minimal fees."
            },
            {
                question: "How does ZetaChain achieve scalability?",
                answer: "ZetaChain achieves scalability through its unique consensus mechanism and layer-2 solutions that allow for high throughput and low latency. This ensures that the network can handle a large number of transactions efficiently."
            },
            {
                question: "What security measures does ZetaChain employ?",
                answer: "ZetaChain employs multiple security measures including cryptographic algorithms, decentralized consensus, and regular security audits to ensure the integrity and safety of the network. Additionally, it has a robust smart contract verification process to prevent vulnerabilities."
            },
            {
                question: "Is there a staking mechanism in ZetaChain?",
                answer: "Yes, ZetaChain offers a staking mechanism that allows users to stake their tokens to support network security and earn rewards. Stakers play a crucial role in maintaining the network's consensus and stability."
            },
            {
                question: "Does ZetaChain support cross-chain interoperability?",
                answer: "Yes, ZetaChain is designed to support cross-chain interoperability, enabling seamless interaction with other blockchain networks. This feature allows for the transfer of assets and data across different chains, enhancing the overall utility of the platform."
            }
        ]
    },
    {
        name: "Sentinel",
        ticker: "sentinel",
        faqs: [
            {
                question: "How does Sentinel ensure data privacy?",
                answer: "Sentinel implements state-of-the-art encryption and privacy policies to ensure that your data remains secure and private. For more details, refer to Sentinel's privacy policy on their official website."
            },
            {
                question: "Can Sentinel protect against zero-day exploits?",
                answer: "Yes, Sentinel's advanced threat detection algorithms are designed to identify and mitigate threats from zero-day exploits. They use behavior-based detection to protect against unknown threats."
            },
            {
                question: "Is there a mobile app available for Sentinel?",
                answer: "Yes, Sentinel offers a mobile application that allows users to manage their security settings and receive alerts on the go. The app is available for both iOS and Android devices."
            }
        ]
    },
    {
        name: "Coreum",
        ticker: "coreum",
        faqs: [
            {
                question: "What consensus mechanism does Coreum use?",
                answer: "Coreum utilizes a unique consensus mechanism that combines elements of Proof of Stake (PoS) and Byzantine Fault Tolerance (BFT) to ensure high security and efficiency."
            },
            {
                question: "How does Coreum achieve scalability?",
                answer: "Coreum achieves scalability through its layered architecture, allowing for thousands of transactions per second without compromising on security or decentralization."
            },
            {
                question: "Can I develop smart contracts on Coreum?",
                answer: "Yes, Coreum supports smart contract development, enabling developers to build decentralized applications (DApps) on its platform."
            }
        ]
    },
    {
        name: "Comdex",
        ticker: "comdex",
        faqs: [
            {
                question: "What products does Comdex offer?",
                answer: "Comdex offers a suite of decentralized finance (DeFi) products, including a decentralized exchange (DEX), synthetic asset creation, and a lending platform."
            },
            {
                question: "How is Comdex contributing to the Cosmos ecosystem?",
                answer: "Comdex is part of the Cosmos ecosystem, contributing to its interoperability and scalability through the use of IBC (Inter-Blockchain Communication) protocol."
            },
            {
                question: "What is the utility of the CMDX token?",
                answer: "The CMDX token is used for governance, staking, and transaction fee payment within the Comdex ecosystem."
            }
        ]
    },
    {
        name: "Persistence",
        ticker: "persistence",
        faqs: [
            {
                question: "What products does Comdex offer?",
                answer: "Comdex offers a suite of decentralized finance (DeFi) products, including a decentralized exchange (DEX), synthetic asset creation, and a lending platform."
            },
            {
                question: "How is Comdex contributing to the Cosmos ecosystem?",
                answer: "Comdex is part of the Cosmos ecosystem, contributing to its interoperability and scalability through the use of IBC (Inter-Blockchain Communication) protocol."
            },
            {
                question: "What is the utility of the CMDX token?",
                answer: "The CMDX token is used for governance, staking, and transaction fee payment within the Comdex ecosystem."
            }
        ]
    },
    {
        name: "AssetMantle",
        ticker: "assetmantle",
        faqs: [
            {
                question: "What products does Comdex offer?",
                answer: "Comdex offers a suite of decentralized finance (DeFi) products, including a decentralized exchange (DEX), synthetic asset creation, and a lending platform."
            },
            {
                question: "How is Comdex contributing to the Cosmos ecosystem?",
                answer: "Comdex is part of the Cosmos ecosystem, contributing to its interoperability and scalability through the use of IBC (Inter-Blockchain Communication) protocol."
            },
            {
                question: "What is the utility of the CMDX token?",
                answer: "The CMDX token is used for governance, staking, and transaction fee payment within the Comdex ecosystem."
            }
        ]
    },
    {
        name: "Human.AI",
        ticker: "humans-ai",
        faqs: [
            {
                question: "What products does Comdex offer?",
                answer: "Comdex offers a suite of decentralized finance (DeFi) products, including a decentralized exchange (DEX), synthetic asset creation, and a lending platform."
            },
            {
                question: "How is Comdex contributing to the Cosmos ecosystem?",
                answer: "Comdex is part of the Cosmos ecosystem, contributing to its interoperability and scalability through the use of IBC (Inter-Blockchain Communication) protocol."
            },
            {
                question: "What is the utility of the CMDX token?",
                answer: "The CMDX token is used for governance, staking, and transaction fee payment within the Comdex ecosystem."
            }
        ]
    },
    {
        name: "Mars Protocol",
        ticker: "mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3",
        faqs: [
            {
                question: "What products does Comdex offer?",
                answer: "Comdex offers a suite of decentralized finance (DeFi) products, including a decentralized exchange (DEX), synthetic asset creation, and a lending platform."
            },
            {
                question: "How is Comdex contributing to the Cosmos ecosystem?",
                answer: "Comdex is part of the Cosmos ecosystem, contributing to its interoperability and scalability through the use of IBC (Inter-Blockchain Communication) protocol."
            },
            {
                question: "What is the utility of the CMDX token?",
                answer: "The CMDX token is used for governance, staking, and transaction fee payment within the Comdex ecosystem."
            }
        ]
    },
    {
        name: "Teritori",
        ticker: "teritori",
        faqs: [
            {
                question: "What products does Comdex offer?",
                answer: "Comdex offers a suite of decentralized finance (DeFi) products, including a decentralized exchange (DEX), synthetic asset creation, and a lending platform."
            },
            {
                question: "How is Comdex contributing to the Cosmos ecosystem?",
                answer: "Comdex is part of the Cosmos ecosystem, contributing to its interoperability and scalability through the use of IBC (Inter-Blockchain Communication) protocol."
            },
            {
                question: "What is the utility of the CMDX token?",
                answer: "The CMDX token is used for governance, staking, and transaction fee payment within the Comdex ecosystem."
            }
        ]
    },
    {
        name: "XPLA",
        ticker: "xpla",
        faqs: [
            {
                question: "What products does Comdex offer?",
                answer: "Comdex offers a suite of decentralized finance (DeFi) products, including a decentralized exchange (DEX), synthetic asset creation, and a lending platform."
            },
            {
                question: "How is Comdex contributing to the Cosmos ecosystem?",
                answer: "Comdex is part of the Cosmos ecosystem, contributing to its interoperability and scalability through the use of IBC (Inter-Blockchain Communication) protocol."
            },
            {
                question: "What is the utility of the CMDX token?",
                answer: "The CMDX token is used for governance, staking, and transaction fee payment within the Comdex ecosystem."
            }
        ]
    }
    ,
    {
        name: "Velas",
        ticker: "velas",
        faqs: [
            {
                question: "What products does Comdex offer?",
                answer: "Comdex offers a suite of decentralized finance (DeFi) products, including a decentralized exchange (DEX), synthetic asset creation, and a lending platform."
            },
            {
                question: "How is Comdex contributing to the Cosmos ecosystem?",
                answer: "Comdex is part of the Cosmos ecosystem, contributing to its interoperability and scalability through the use of IBC (Inter-Blockchain Communication) protocol."
            },
            {
                question: "What is the utility of the CMDX token?",
                answer: "The CMDX token is used for governance, staking, and transaction fee payment within the Comdex ecosystem."
            }
        ]
    }
    ,
    {
        name: "Oasis",
        ticker: "oasis-network",
        faqs: [
            {
                question: "What products does Comdex offer?",
                answer: "Comdex offers a suite of decentralized finance (DeFi) products, including a decentralized exchange (DEX), synthetic asset creation, and a lending platform."
            },
            {
                question: "How is Comdex contributing to the Cosmos ecosystem?",
                answer: "Comdex is part of the Cosmos ecosystem, contributing to its interoperability and scalability through the use of IBC (Inter-Blockchain Communication) protocol."
            },
            {
                question: "What is the utility of the CMDX token?",
                answer: "The CMDX token is used for governance, staking, and transaction fee payment within the Comdex ecosystem."
            }
        ]
    },
    {
        name: "KYVE Network",
        ticker: "kyve-network",
        faqs: [
            {
                question: "What products does Comdex offer?",
                answer: "Comdex offers a suite of decentralized finance (DeFi) products, including a decentralized exchange (DEX), synthetic asset creation, and a lending platform."
            },
            {
                question: "How is Comdex contributing to the Cosmos ecosystem?",
                answer: "Comdex is part of the Cosmos ecosystem, contributing to its interoperability and scalability through the use of IBC (Inter-Blockchain Communication) protocol."
            },
            {
                question: "What is the utility of the CMDX token?",
                answer: "The CMDX token is used for governance, staking, and transaction fee payment within the Comdex ecosystem."
            }
        ]
    }
];

const validatorAddresses = {
    'Sentinel': 'sentvaloper109yg6yhcyy5mfyteqmcn3pjca9nu9s392spdr9', 
    'Coreum': 'corevaloper1gsneu9egj3u3tml383cw3cvya7ayegfk709msu', 
    'Comdex': 'comdexvaloper109yg6yhcyy5mfyteqmcn3pjca9nu9s396ksf04', 
    'Persistence': 'persistencevaloper109yg6yhcyy5mfyteqmcn3pjca9nu9s39fxwh07', 
    'Asset Mantle': 'mantlevaloper109yg6yhcyy5mfyteqmcn3pjca9nu9s39s4hgvu', 
    'Mars Protocol': 'marsvaloper109yg6yhcyy5mfyteqmcn3pjca9nu9s398ld4ea', 
    'Xpla': 'xplavaloper19ge4myhgmcawn7ny8jrqvmc20czvkkjcnerrya', 
    'Teritori': 'torivaloper109yg6yhcyy5mfyteqmcn3pjca9nu9s39fgu0p7', 
    'Human.AI': 'humanvaloper159m5jjsaaamdaw3wd5edrcpj5de6q0avukkpyr', 
    'KYVE Network': 'kyvevaloper109yg6yhcyy5mfyteqmcn3pjca9nu9s39ts90d9', 
    'ZetaChain': 'zetavaloper19ge4myhgmcawn7ny8jrqvmc20czvkkjcw8wvh4', 
  };

  let networks = [
    {
      name : "ZetaChain",
      image: "/images/coin-icons/zeta.webp",
      ticker: "ZETA",
      apr: "5.24",
      twitter: "https://twitter.com/zetablockchain",
      github: "https://github.com/zeta-chain",
      website: "https://www.zetachain.com/",
      description: "ZetaChain is a novel L1 that has chain-agnostic interoperability built-in (EVM-compatible, Cosmos/IBC, Bitcoin, Dogecoin, Tron, etc.).",
      tvl: "0.5k",
      staked: "0.5k ZETA",
    },
    {
      name : "Sentinel",
      image: "/images/coin-icons/sentinel.webp",
      ticker: "DVPN",
      apr: "19.66",
      twitter: "https://twitter.com/Sentinel_co",
      github: "https://github.com/sentinel-official",
      website: "https://www.sentinel.co/",
      description: "The Sentinel ecosystem is a global network of autonomous dVPN applications that enable private and censorship resistant internet access",
      tvl: "180K",
      staked: "77M DVPN",
   
    },
    {
      name : "Coreum",
      image: "/images/coin-icons/coreum.webp",
      ticker: "CORE",
      apr: "25.96",
      twitter: "https://twitter.com/CoreumOfficial",
      github: "https://github.com/CoreumFoundation",
      website: "https://www.coreum.com/",
      description: "Coreum, the world first Superledger. A layer-1 blockchain architected for enterprises of any size to leverage fast, ISO20022-compliant, and scalable economical transactions across a secure PoS network that supports programmable Smart Tokens.",
      tvl: "108k",
      staked: "287K CORE",
    },
    {
      name : "Comdex",
      image: "/images/coin-icons/comdex.png",
      ticker: "CMDX",
      apr: "10.13",
      twitter: "https://twitter.com/ComdexOfficial",
      github: "https://github.com/comdex-official",
      website: "https://www.comdex.one/",
      description: "Comdex is an interchain DeFi infrastructure layer housing a suite of composable solutions on-chain.",
      tvl: "41k",
      staked: "1.7M CMDX",
    },
    {
      name : "Persistence",
      image: "/images/coin-icons/persistence.webp",
      ticker: "XPRT",
      apr: "12.50",
      twitter: "https://twitter.com/PersistenceOne",
      github: "https://github.com/persistenceOne",
      website: "https://www.persistence.one/",
      description: "Persistence is an app chain for Liquid Staking powering an ecosystem of DeFi applications focused on unlocking the liquidity of staked assets.",
      tvl: "59k",
      staked: "130k XPRT",
    },
    {
      name : "AssetMantle",
      image: "/images/coin-icons/mantle.webp",
      ticker: "MNTL",
      apr: "37.61",
      twitter: "https://twitter.com/AssetMantle",
      github: "https://github.com/AssetMantle",
      website: "https://www.assetmantle.one/",
      description: "AssetMantle is a multi-tenant NFT marketplace framework that enables creators and collectors to securely mint, own, and trade digital assets on its fast-finality blockchain.",
      tvl: "18k",
      staked: "16.3M MNTL",
    },
    {
      name : "Human.AI",
      image: "/images/coin-icons/human.webp",
      ticker: "HUMAI",
      apr: "81.75",
      twitter: "https://twitter.com/humansdotai",
      github: "https://github.com/humansdotai/",
      website: "https://www.humans.ai/",
      description: "Humans.ai is creating an all-in-one platform for AI-based creation and blockchain governance.",
      tvl: "580",
      staked: "365k HUMAI",
    },
    {
      name : "Mars Protocol",
      image: "/images/coin-icons/mars.png",
      ticker: "MARS",
      apr: "0.00",
      twitter: "https://twitter.com/mars_protocol",
      github: "https://github.com/mars-protocol",
      website: "https://www.marsprotocol.io/",
      description: "Lend, borrow and earn with an autonomous credit protocol in the Cosmos universe. Open to all, closed to none.",
      tvl: "5k",
      staked: "56k MARS",
    },
    {
      name : "Teritori",
      image: "/images/coin-icons/teritori.jpg",
      ticker: "TORI",
      apr: "66.60",
      twitter: "https://twitter.com/TeritoriNetwork",
      github: "https://github.com/TERITORI",
      website: "https://www.teritori.com/",
      description: "Teritori is a decentralized Operating System for individuals & communities that allows organizations to communicate and interact in a resilient and transparent way.",
      tvl: "3k",
      staked: "247k TORI",
    },
    {
      name : "XPLA",
      image: "/images/coin-icons/xpla.webp",
      ticker: "XPLA",
      apr: "0.00",
      twitter: "https://twitter.com/XPLA_Official",
      github: "https://github.com/xpladev",
      website: "https://www.xpla.io/",
      description: "XPLA is a Tendermint-based Layer 1 blockchain that serves as a hub for digital media content. Based on the idea of Explore and PlayXPLA encompasses a wide range of digital content with a leading blockchain gaming infrastructure empowered by a sustainable ecosystem.",
      tvl: "4k",
      staked: "21k XPLA",
    },
    {
      name : "Velas",
      image: "/images/coin-icons/velas.png",
      ticker: "VLX",
      apr: "8.40",
      twitter: "https://twitter.com/VelasBlockchain",
      github: "https://github.com/velas",
      website: "https://velas.com/",
      description: "An optimal launchpad for dApps and blockchain projects",
      tvl: "250k",
      staked: "14M VLX",
    },
    {
      name : "Oasis",
      image: "/images/coin-icons/oasis.webp",
      ticker: "ROSE",
      apr: "3.05",
      twitter: "https://twitter.com/oasisprotocol",
      github: "#",
      website: "https://oasisprotocol.org/",
      description: "Oasis aims to strengthen network security and safeguard tens of millions in user funds held on multiple runtimes across its ecosystem.",
      tvl: "2M",
      staked: "15.8M ROSE",
    }
    ,
    {
      name : "KYVE Network",
      image: "/images/coin-icons/kyve.webp",
      ticker: "KYVE",
      apr: "6.65",
      twitter: "https://twitter.com/KYVENetwork",
      github: "#",
      website: "https://www.kyve.network/",
      description: "KYVE provides Data Rollups-as-a-Service, unlocking next-level scalability for blockchains and rollups.",
      tvl: "1k",
      staked: "12k KYVE",
    }
  ];
  
  let team = [
    {
      "name": "Lendor M.",
      "image": "/images/team/1.jpg",
      "position": "DevOps",
      "description": "",
      "twitter": "",
      "linkedin": ""
    },
    {
      "name": "Dele M.",
      "image": "/images/team/2.jpg",
      "position": "Research & Publicity",
      "description": "",
      "twitter": "",
      "linkedin": ""
    },
    {
      "name": "Mitchel M.",
      "image": "/images/team/3.jpg",
      "position": "DevOps",
      "description": "",
      "twitter": "",
      "linkedin": ""
    },
    {
      "name": "Bright E.",
      "image": "/images/team/4.jpg",
      "position": "Media & Research",
      "description": "",
      "twitter": "",
      "linkedin": ""
    },
    {
      "name": "Luck M.",
      "image": "/images/team/5.jpg",
      "position": "Research",
      "description": "",
      "twitter": "",
      "linkedin": ""
    },
    {
      "name": "Benson K",
      "image": "/images/team/6.jpg",
      "position": "Frontend Engineer",
      "description": "",
      "twitter": "",
      "linkedin": ""
    },
    {
      "name": "Oshodin E.",
      "image": "/images/team/9.jpg",
      "position": "Research",
      "description": "",
      "twitter": "",
      "linkedin": ""
    },
    {
      "name": "Victor M.",
      "image": "/images/team/8.jpg",
      "position": "Research",
      "description": "",
      "twitter": "",
      "linkedin": ""
    },
    {
      "name": "Samuel P",
      "image": "/images/team/7.jpg",
      "position": "Software Engineer",
      "description": "",
      "twitter": "",
      "linkedin": ""
    },
    {
      "name": "Thompson E",
      "image": "/images/team/2.jpg",
      "position": "Content Creator",
      "description": "",
      "twitter": "",
      "linkedin": ""
    }
  ];

module.exports = { networksP, networkFAQs, validatorAddresses, networks, team };
