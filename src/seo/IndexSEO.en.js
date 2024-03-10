import { Helmet } from "react-helmet";

const IndexSEOEN = () => {
  return (
    <Helmet>
      <title>MIPP - Music IP Protector, Music Plagiarism Checker</title>
      <meta name="title" content="MIPP - Music IP Protector, Music Plagiarism Checker" />
      <meta name="description" content="Discover MIPP, the solution for detecting song plagiarism. Join us and protect your music copyright with AI audio analysis tool for song plagiarism checking." />
      <link rel="alternate" href="https://aimipp.com/ko" hreflang="ko" />
      <link rel="alternate" href="https://aimipp.com/en" hreflang="en" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aimipp.com" />
      <meta property="og:title" content="MIPP - Music IP Protector, Music Plagiarism Checker with AI" />
      <meta property="og:description" content="Discover MIPP, the solution for detecting song plagiarism. Join us and protect your music copyright with AI audio analysis tool for song plagiarism checking." />
      <meta property="og:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://aimipp.com" />
      <meta property="twitter:title" content="MIPP - Music IP Protector, Music Plagiarism Checker with AI" />
      <meta property="twitter:description" content="Discover MIPP, the solution for detecting song plagiarism. Join us and protect your music copyright with AI audio analysis tool for song plagiarism checking." />
      <meta name="twitter:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />

      <script type="application/ld+json">
        {`{
  "@context": "http://schema.org",
  "@type": "WebSite",
  "url": "https://aimipp.com",
  "name": "Mipp",
  "description": "Discover MIPP, the solution for detecting song plagiarism effectively. Join us and protect your music copyright with AI audio analysis song plagiarism checker.",
  "publisher": {
    "@type": "Organization",
    "name": "DoubleHCompany",
    "logo": {
      "@type": "ImageObject",
      "url": "https://storage.googleapis.com/domainbucket/imageog.png"
    }
  },
  "inLanguage": "en-US",
  "hasPart": [
    {
      "@type": "WebPage",
      "url": "https://aimipp.com/en/intro",
      "name": "About Us",
      "description": "Learn what MIPP is and how it can help you."
    },
    {
      "@type": "WebPage",
      "url": "https://aimipp.com/en/howtouse",
      "name": "How to Use",
      "description": "Step by step guide on using MIPP for music plagiarism detection."
    },
    {
      "@type": "WebPage",
      "url": "https://aimipp.com/en/faqs",
      "name": "FAQ",
      "description": "Find answers to common questions about MIPP."
    },
    {
      "@type": "WebPage",
      "url": "https://aimipp.com/en/login",
      "name": "Login Page",
      "description": "Access your MIPP account in 3 seconds."
    }
  ]
}`}
      </script>
    </Helmet>
  );
};
export default IndexSEOEN;
