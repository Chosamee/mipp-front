import { Helmet } from "react-helmet";

const IndexSEOEN = () => {
  return (
    <Helmet>
      <title>MIPPIA - Music IP Protector, Music Plagiarism Checker</title>
      <meta name="title" content="MIPPIA - Music IP Protector, Music Plagiarism Checker" />
      <meta name="description" content="Discover MIPPIA, the solution for detecting song plagiarism. Join us and protect your music copyright with AI audio analysis tool for song plagiarism checking." />
      <link rel="alternate" href="https://mippia.com/ko" hreflang="ko" />
      <link rel="alternate" href="https://mippia.com/en" hreflang="en" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mippia.com" />
      <meta property="og:title" content="MIPPIA - Music IP Protector, Music Plagiarism Checker with AI" />
      <meta property="og:description" content="Discover MIPPIA, the solution for detecting song plagiarism. Join us and protect your music copyright with AI audio analysis tool for song plagiarism checking." />
      <meta property="og:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mippia.com" />
      <meta property="twitter:title" content="MIPPIA - Music IP Protector, Music Plagiarism Checker with AI" />
      <meta property="twitter:description" content="Discover MIPPIA, the solution for detecting song plagiarism. Join us and protect your music copyright with AI audio analysis tool for song plagiarism checking." />
      <meta name="twitter:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />
      <link rel="canonical" href="https://mippia.com/en" />
      <script type="application/ld+json">
        {`{
  "@context": "http://schema.org",
  "@type": "WebSite",
  "url": "https://mippia.com",
  "name": "Mippia",
  "description": "Discover MIPPIA, the solution for detecting song plagiarism effectively. Join us and protect your music copyright with AI audio analysis song plagiarism checker.",
  "publisher": {
    "@type": "Organization",
    "name": "MIPPIA",
    "logo": {
      "@type": "ImageObject",
      "url": "https://storage.googleapis.com/mippia-domain-bucket/imageog.png"
    }
  },
  "inLanguage": "en-US",
  "hasPart": [
    {
      "@type": "WebPage",
      "url": "https://mippia.com/en/intro",
      "name": "About Us",
      "description": "Learn what MIPPIA is and how it can help you."
    },
    {
      "@type": "WebPage",
      "url": "https://mippia.com/en/howtouse",
      "name": "How to Use",
      "description": "Step by step guide on using MIPPIA for music plagiarism detection."
    },
    {
      "@type": "WebPage",
      "url": "https://mippia.com/en/faqs",
      "name": "FAQ",
      "description": "Find answers to common questions about MIPPIA."
    },
    {
      "@type": "WebPage",
      "url": "https://mippia.com/en/login",
      "name": "Login Page",
      "description": "Access your MIPPIA account in 3 seconds."
    }
  ]
}`}
      </script>
    </Helmet>
  );
};
export default IndexSEOEN;
