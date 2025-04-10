interface SpeakerSocials {
  linkedin: string;
  x: string;
}
interface Speaker {
  imageUrl: string;
  name: string;
  affiliation: string;
  affiliationTwitterUrl: string;
  socials: SpeakerSocials;
}

export const speakers: Speaker[] = [
  {
    imageUrl: "/assets/pngs/hackathon/2023_speakers/abena_accra.png",
    name: "Abena Asante",
    affiliation: "ETHAccra",
    affiliationTwitterUrl: "https://twitter.com/ETHAccra",
    socials: {
      linkedin: "",
      x: "https://twitter.com/abena_eth",
    },
  },
  {
    imageUrl: "/assets/pngs/hackathon/2023_speakers/simon-schmid.png",
    name: "Simon Emanuel Schmid",
    affiliation: "Edge & Node",
    affiliationTwitterUrl: "https://x.com/GraphProtocol",
    socials: {
      linkedin: "",
      x: "https://twitter.com/schmid_si",
    },
  },
  {
    imageUrl: "/assets/pngs/hackathon/2023_speakers/daniel-ifechukwu.png",
    name: "Daniel Ifechukwu",
    affiliation: "BuildGuidl",
    affiliationTwitterUrl: "https://twitter.com/buidlguidl",
    socials: {
      linkedin: "",
      x: "https://twitter.com/dev_dahniel",
    },
  },
  {
    imageUrl: "/assets/pngs/hackathon/2023_speakers/shantelle_awomoyi.png",
    name: "Shantelle Awomoyi",
    affiliation: "Circles",
    affiliationTwitterUrl: "https://x.com/aboutcircles?s=11",
    socials: {
      linkedin: "",
      x: "https://x.com/afrishan",
    },
  },
  {
    imageUrl: "/assets/pngs/hackathon/2023_speakers/nana.jpeg",
    name: "Nana Opoku",
    affiliation: "AFROSCOPE",
    affiliationTwitterUrl: "https://afroscope.com/links",
    socials: {
      linkedin: "",
      x: "https://x.com/AFROSCOPE",
    },
  },
  {
    imageUrl: "/assets/pngs/hackathon/2023_speakers/elo.jpeg",
    name: "Elo Mukoro",
    affiliation: "Privacy & Scaling Explorations (PSE)",
    affiliationTwitterUrl: "https://pse.dev/en",
    socials: {
      linkedin: "",
      x: "https://x.com/metachaser24?s=21",
    },
  },
  {
    imageUrl: "/assets/pngs/hackathon/2023_speakers/santiago.jpeg",
    name: "SantiagoDevRel",
    affiliation: "Web3.js & ChainSafe",
    affiliationTwitterUrl: "https://web3js.org",
    socials: {
      linkedin: "",
      x: "https://x.com/santiagodevrel",
    },
  },
  {
    imageUrl: "/assets/pngs/hackathon/2023_speakers/lena-hierzi.png",
    name: "Lena Hierzi",
    affiliation: "Celo Foundation",
    affiliationTwitterUrl: "https://x.com/Celo",
    socials: {
      linkedin: "",
      x: "https://x.com/gigahierz?s=21",
    },
  },

  {
    imageUrl: "/assets/jpgs/hackathon/2024_speakers/e-etim.jpg",
    name: "Earnest Etim",
    affiliation: "NearAfrica",
    affiliationTwitterUrl: "https://x.com/nearafrica_",
    socials: {
      linkedin: "",
      x: "https://x.com/EtimEarnest",
    },
  },


//   {
//     imageUrl: "/assets/pngs/hackathon/2023_speakers/norbert.jpeg",
//     name: "Norbert Amankwaa",
//     affiliation: "Metis",
//     affiliationTwitterUrl: "https://x.com/MetisL2",
//     socials: {
//       linkedin:
//         "https://www.linkedin.com/in/norbert-amankwaa-adomako-3a68b7192/",
//       x: "",
//     },
//   },

  // {
  //     imageUrl: '/assets/pngs/hackathon/2023_speakers/david-disu.png',
  //     name: 'David Disu',
  //     affiliation: 'Remix',
  //     socials: {
  //         linkedin: '',
  //         x: 'https://twitter.com/ioedeveloper'
  //     }
  // },
  // {
  //     imageUrl: '/assets/pngs/hackathon/2023_speakers/tyrese-tetteh.png',
  //     name: 'Tyrese Tetteh',
  //     affiliation: 'Chainlink',
  //     socials: {
  //         linkedin: 'https://www.linkedin.com/in/tyrese-tetteh-73b09b161/',
  //         x: ''
  //     }
  // },
  // {
  //     imageUrl: '/assets/pngs/hackathon/2023_speakers/kofi-genfi.png',
  //     name: 'Kofi Genfi',
  //     affiliation: 'Mazzuma',
  //     socials: {
  //         linkedin: '',
  //         x: 'https://twitter.com/K_Genfi'
  //     }
  // },
  // {
  //     imageUrl: '/assets/pngs/hackathon/2023_speakers/stanford_accra.png',
  //     name: 'Ronan Sanford',
  //     affiliation: 'Infinite Games',
  //     socials: {
  //         linkedin: '',
  //         x: 'https://twitter.com/wighawag'
  //     }
  // },
  // {
  //     imageUrl: '/assets/pngs/hackathon/2023_speakers/griffin-hotchkiss.png',
  //     name: 'Griffin Hotchkiss',
  //     affiliation: 'Ethereum Foundation',
  //     socials: {
  //         linkedin: '',
  //         x: 'https://twitter.com/gichiba'
  //     }
  // },
] as const;
