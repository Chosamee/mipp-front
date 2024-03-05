import { Helmet } from "react-helmet";

const IndexSEOKO = () => {
  return (
    <Helmet>
      <title>MIPP - Music IP Protector, Music Plagiarism Detection with AI</title>
      <meta name="title" content="MIPP - Music IP Protector, Music Plagiarism Detection with AI" />
      <meta name="description" content="Discover Mipp, the solution for detecting song plagiarism effectively. Join us and protect your music Intellectual Property from plagiarism." />
      <link rel="alternate" href="https://aimipp.com/ko" hreflang="ko" />
      <link rel="alternate" href="https://aimipp.com/en" hreflang="en" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aimipp.com" />
      <meta property="og:title" content="MIPP - Music IP Protector, Music Plagiarism Detection with AI" />
      <meta property="og:description" content="Discover Mipp, the solution for detecting song plagiarism effectively. Join us and protect your music Intellectual Property from plagiarism." />
      <meta property="og:image" content="https://storage.googleapis.com/domainbucket/imageog.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://aimipp.com" />
      <meta property="twitter:title" content="MIPP - Music IP Protector, Music Plagiarism Detection" />
      <meta property="twitter:description" content="Discover Mipp, the solution for detecting song plagiarism effectively. Join us and protect your music Intellectual Property from plagiarism." />
      <meta name="twitter:image" content="https://storage.googleapis.com/domainbucket/imageog.jpg" />

      <script type="application/ld+json">
        {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "url": "https://aimipp.com",
              "name": "Mipp",
              "description": "Discover Mipp, the solution for detecting song plagiarism effectively. Join us and protect your music Intellectual Property from plagiarism.",
              "publisher": {
                "@type": "DoubleHCompany",
                "name": "Mipp",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://storage.googleapis.com/domainbucket/imageog.jpg"
                }
              },
              "inLanguage": "en-US",
              "hasPart": [
        {
          "@type": "WebPage",
          "url": "https://aimipp.com/en/intro",
          "name": "About Us",
          "description": "Learn what is MIPP and how it can help you."
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
            }
          `}
      </script>
    </Helmet>
  );
};
export default IndexSEOKO;
