import Head from "next/head";
import Illustration from "@/components/2025/Illustration";
import Hero from "@/components/2025/hero";
import HackathonCountdownSection from "@/components/2025/hackathon-countdown-section";
import MediaAndCommunityPartnersSection from "@/components/2025/media-and-community-section";
import AboutUsSection from "@/components/2025/about-us-section";
import HackathonSponsors from "@/components/2025/hackathon-images-and-sponsors/hackathon-sponsors";
import LastYearSpeakers from "@/components/2025/last-year-speakers";
import FaqSection from "@/components/2025/faq-section";
import FooterSection from "@/components/2025/footer-section";
import HackathonSlider from "@/components/2025/hackathon-slider";
import EthAccraVideo from "@/components/2025/eth-accra-video";
import HackathonImages from "@/components/2025/hackathon-images-and-sponsors/hackathon-images";

const EthAccra2025 = () => {
  const description = "ETHAccra 2025 will be held in Accra. This year's event comes off on the 3rd through to 6th September, 2025, at ISSER Seminar Hall, University of Ghana, Legon.";
  const title = "ETHAccra Hackathon 2025";
  const url = "http://eth-accra-trial.vercel.app";
  const imageUrl = "https://eth-accra-trial.vercel.app/assets/pngs/meta_image.png";
  const siteName = "ETHAccra";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={url} />
        
        {/* Basic SEO */}
        <meta name="description" content={description} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:secure_url" content={imageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imageUrl} />
      </Head>

      <div className="">
        <Illustration />
        <Hero />
        <HackathonCountdownSection />
        <HackathonSponsors />
        <AboutUsSection />
        <EthAccraVideo />
        <HackathonImages />
        <LastYearSpeakers />
        <MediaAndCommunityPartnersSection />
        <FaqSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default EthAccra2025;