import Speakers2023 from "@/components/2023/2023-speakers";
import FooterSection2023 from "@/components/2023/footer-section";
import AboutUsSection2023 from "@/components/2023/about-us-section";
import EthAccraVideo2023 from "@/components/2023/eth-accra-video";
import FaqSection2023 from "@/components/2023/faq-section";
import HackathonInfo from "@/components/2023/hackathon-info";
import Hero2023 from "@/components/2023/hero";
import HackathonImages2023 from "@/components/2023/image-section/hackathon-images/hackathon-images";
import HackathonSponsors2023 from "@/components/2023/image-section/sponsors/hackathon-sponsors";
import MediaAndCommunityPartnersSection2023 from "@/components/2023/media-and-community-section";
import Head from "next/head";
import FooterAction from "@/components/2023/footer-section/footer-action";

const EthAccra2023 = () => {
  return (
    <div>
      <Head>
        <title>Eth Accra</title>
        <link
          rel="canonical"
          href="https://eth-accra-website.vercel.app/2023"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Overview - ETHAccra" />
        <meta
          property="og:description"
          content="ETHAccra AUGUST 2024 In view of the fact that ETHAccra 2024 will be held in Accra, we want to rally the community together and support developers in Accra and Africa. This year’s event comes off on the 29th through to 31st August, 2024, at ISSER Seminar Hall, University of Ghana, Legon. Days Hours Mins Secs […]"
        />
        <meta
          property="og:url"
          content="https://eth-accra-website.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://eth-accra-website.vercel.app/assets/pngs/meta_image.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://eth-accra-website.vercel.app/assets/pngs/meta_image.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="">
        <Hero2023 />
        <HackathonInfo />
        <MediaAndCommunityPartnersSection2023 />
        <AboutUsSection2023 />
        <EthAccraVideo2023 />
        <HackathonImages2023 />
        <HackathonSponsors2023 />
        <Speakers2023 />
        <FaqSection2023 />
        {/* <FooterAction /> */}
        <FooterSection2023 />
      </div>
    </div>
  );
};

export default EthAccra2023;
