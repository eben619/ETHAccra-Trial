interface SpeakerSocials {
  linkedin: string;
  x: string;
}
interface Speaker {
  imageUrl: string;
  name: string;
  affiliation: string;
  affiliationTwitterUrl?: string;
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
    name: "Simon Schmid",
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
    imageUrl: "/assets/pngs/hackathon/2023_speakers/david-disu.png",
    name: "David Disu",
    affiliation: "Remix",
    socials: {
      linkedin: "",
      x: "https://twitter.com/ioedeveloper",
    },
  },
  {
    imageUrl: "/assets/pngs/hackathon/2023_speakers/tyrese-tetteh.png",
    name: "Tyrese Tetteh",
    affiliation: "Chainlink",
    socials: {
      linkedin: "https://www.linkedin.com/in/tyrese-tetteh-73b09b161/",
      x: "",
    },
  },
  {
    imageUrl: "/assets/pngs/hackathon/2023_speakers/kofi-genfi.png",
    name: "Kofi Genfi",
    affiliation: "Mazzuma",
    socials: {
      linkedin: "",
      x: "https://twitter.com/K_Genfi",
    },
  },
  {
    imageUrl: "/assets/pngs/hackathon/2023_speakers/stanford_accra.png",
    name: "Ronan Sanford",
    affiliation: "Infinite Games",
    socials: {
      linkedin: "",
      x: "https://twitter.com/wighawag",
    },
  },
  {
    imageUrl: "/assets/pngs/hackathon/2023_speakers/griffin-hotchkiss.png",
    name: "Griffin Hotchkiss",
    affiliation: "Ethereum Foundation",
    socials: {
      linkedin: "",
      x: "https://twitter.com/gichiba",
    },
  },
] as const;
