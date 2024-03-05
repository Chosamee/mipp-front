import React from "react";
import { Helmet } from "react-helmet";

const HowtouseSEOEN = () => {
  return (
    <Helmet>
      <title>How to Use MIPP</title>
      <meta name="description" content="Learn how to effectively use MIPP for detecting music plagiarism. Follow our step-by-step guide from simple registration to checking the results." />

      <meta property="og:title" content="How to Use MIPP" />
      <meta property="og:description" content="Learn how to effectively use MIPP for detecting music plagiarism. Follow our step-by-step guide from simple registration to checking the results." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://storage.googleapis.com/domainbucket/imageog.jpg" />
      <meta property="og:url" content="https://aimipp.com/en/howtouse" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="How to Use MIPP" />
      <meta name="twitter:description" content="Learn how to effectively use MIPP for detecting music plagiarism. Follow our step-by-step guide from simple registration to checking the results." />
      <meta name="twitter:image" content="https://storage.googleapis.com/domainbucket/imageog.jpg" />

      <script type="application/ld+json">
        {`
            {
              "@context": "http://schema.org",
              "@type": "HowTo",
              "name": "How to Use MIPP",
              "description": "Follow this guide to learn how to use MIPP for effective music plagiarism detection.",
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
                  "text": "Run the plagiarism check and monitor the results. The system extracts the top 10 songs with the highest similarity from our database."
                },
                {
                  "@type": "HowToStep",
                  "text": "Check the results once the plagiarism check is complete. The report includes overall similarity, section-wise similarity, and allows you to listen to the music segments."
                }
              ],
              "image": "https://storage.googleapis.com/domainbucket/imageog.jpg",
              "inLanguage": "en-US"
            }
          `}
      </script>
    </Helmet>
  );
};

export default HowtouseSEOEN;
