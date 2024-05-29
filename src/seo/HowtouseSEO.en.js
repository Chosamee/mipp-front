import React from "react";
import { Helmet } from "react-helmet";

const HowtouseSEOEN = () => {
  return (
    <Helmet>
      <title>How to Use MIPPIA</title>
      <meta name="description" content="Learn how to use MIPPIA for detecting music plagiarism. Follow our step-by-step guide from simple login to checking the results." />

      <meta property="og:title" content="How to Use MIPPIA" />
      <meta property="og:description" content="Learn how to use MIPPIA for detecting music plagiarism. Follow our step-by-step guide from simple login to checking the results." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />
      <meta property="og:url" content="https://mippia.com/en/howtouse" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="How to Use MIPPIA" />
      <meta name="twitter:description" content="Learn how to use MIPPIA for detecting music plagiarism. Follow our step-by-step guide from simple login to checking the results." />
      <meta name="twitter:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />

      <link rel="canonical" href="https://mippia.com/en/howtouse" />

      <script type="application/ld+json">
        {`
            {
              "@context": "http://schema.org",
              "@type": "HowTo",
              "name": "How to Use MIPPIA",
              "description": "Follow this guide to learn how to use MIPPIA for music plagiarism detection.",
              "step": [
                {
                  "@type": "HowToStep",
                  "text": "Sign up and log in using your Google email account."
                },
                {
                  "@type": "HowToStep",
                  "text": "Choose your options for plagiarism check: upload your music directly or use a YouTube or SoundCloud link."
                },
                {
                  "@type": "HowToStep",
                  "text": "Run the plagiarism check and monitor the results. The system extracts the top songs with the highest similarity from our database."
                },
                {
                  "@type": "HowToStep",
                  "text": "Check the results once the plagiarism check is complete. The report includes overall similarity, section-wise similarity, and allows you to listen to the music segments."
                }
              ],
              "image": "https://storage.googleapis.com/mippia-domain-bucket/imageog.png",
              "inLanguage": "en-US"
            }
          `}
      </script>
    </Helmet>
  );
};

export default HowtouseSEOEN;
