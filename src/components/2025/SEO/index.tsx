import Head from "next/head";


interface MetaHeaderProps {
  title: string,
  canonical?: string,
  ogLocale?: string,
  ogTitle: string,
  ogDescription: string,
  ogUrl: string,
  ogType?: string,
  ogImage: string,
  twitterCard?: string,
}

const MetaHeader = ({
  title,
  canonical,
  ogLocale,
  ogTitle,
  ogDescription,
  ogUrl,
  ogType,
  ogImage,
  twitterCard
}: MetaHeaderProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={canonical || "http://pnl.fvr.mybluehost.me/"} />
        <meta property="og:locale" content={ogLocale || "en_US"} />
        <meta property="og:title" content={ogTitle} />
        <meta
          property="og:description"
          content={ogDescription}
        />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content={ogType || "website"} />
        <meta
          property="og:image"
          content={ogImage}
        />
        <meta name="twitter:card" content={twitterCard || "summary_large_image"} />
      </Head>
    </>
  );
};

export default MetaHeader;