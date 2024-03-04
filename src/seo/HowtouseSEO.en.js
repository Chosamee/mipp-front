import React from "react";
import { Helmet } from "react-helmet";

const HowtouseSEOEN = () => {
  return (
    <Helmet>
      <title>How to Use MIPP</title>
      <meta name="description" content="Follow our guide on how to use MIPP. Learn how to perform music plagiarism checks easily and effectively." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aimipp.com/en/howtouse" />
      <meta property="og:title" content="Guide on How to Use MIPP" />
      <meta property="og:description" content="Discover how to use MIPP for easy and effective music plagiarism checks with our step-by-step guide." />
      <meta property="og:image" content="https://storage.googleapis.com/domainbucket/imageog.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://aimipp.com/en/howtouse" />
      <meta name="twitter:title" content="Guide on How to Use MIPP" />
      <meta name="twitter:description" content="Discover how to use MIPP for easy and effective music plagiarism checks with our step-by-step guide." />
      <meta name="twitter:image" content="https://storage.googleapis.com/domainbucket/imageog.jpg" />
      <link rel="alternate" hreflang="en" href="https://aimipp.com/en/howtouse" />
      <link rel="canonical" href="https://aimipp.com/en/howtouse" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {`{
  "@context": "http://schema.org/",
  "@type": "HowTo",
  "name": "How to Use MIPP",
  "description": "Discover how MIPP elevates your music experience.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Step 1: Easy Sign-Up",
      "text": "Join us in a snap! Sign up and log in using your Google email for a quick start."
    },
    {
      "@type": "HowToStep",
      "name": "Step 2: Check Your Option",
      "text": "Select 'Music file(mp3, wav)' or 'YouTube/SoundCloud link' option. Choose whether your track includes vocals or is purely instrumental for a customized check."
    },
    {
      "@type": "HowToStep",
      "name": "Step 3: Upload or Paste Link",
      "text": "Upload your tracks or paste your music links – it's as simple as that."
    },
    {
      "@type": "HowToStep",
      "name": "Step 4: Plagiarism Check and Monitoring",
      "text": "Our system conducts an in-depth plagiarism analysis, comparing your music against the top matches in our database. We focus on melody similarities over a 4-bar sequence."
    },
    {
      "@type": "HowToStep",
      "name": "Step 5: Instant Results",
      "text": "We provide a detailed breakdown of similarities, pinpointing specific sections for your review."
    },
    {
      "@type": "HowToStep",
      "name": "Step 6: Get Your Report",
      "text": "Grab your detailed plagiarism report in a handy PDF format. It's perfect for keeping records or sharing with your team."
    }
  ],
  "totalTime": "PT1H",
  "inLanguage": "en-US",
  "publisher": {
    "@type": "Organization",
    "name": "DoubleH Company"
  }
}`}
      </script>
    </Helmet>
  );
};

export default HowtouseSEOEN;
