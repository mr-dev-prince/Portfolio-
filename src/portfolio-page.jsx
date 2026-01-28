import { Helmet, HelmetProvider } from "react-helmet-async";

export const PortfolioPage = () => {
  const siteUrl = "https://devprince.xyz";
  const ogImageUrl = `${siteUrl}/og-preview.png`;

  // Structured string highlighting your diverse skill set and achievements
  const fullDescription =
    "Ex-SWE Intern @ Aerchain | Full-Stack & GenAI Engineer (Python, TypeScript) | Next.js, React, Node.js | Docker, GitHub | PostgreSQL, MongoDB | 250+ LeetCode | SIH '23 & '25 Finalist | 2x Hackathon Winner";

  return (
    <HelmetProvider>
      <Helmet>
        <title>Prince Chaurasia | Full-Stack & GenAI Engineer</title> [cite: 13,
        14]
        <meta name="description" content={fullDescription} /> [cite: 14, 15, 16]
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Prince Chaurasia | Portfolio" />{" "}
        [cite: 13]
        <meta property="og:description" content={fullDescription} /> [cite: 14,
        15, 16]
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Prince Chaurasia | Full-Stack Engineer"
        />{" "}
        [cite: 13, 14]
        <meta
          name="twitter:description"
          content="Ex-SWE Intern @ Aerchain and 2x SIH Finalist specializing in Next.js, FastAPI, and GenAI."
        />{" "}
        [cite: 14, 16, 8][cite_start]
        <meta name="twitter:image" content={ogImageUrl} />
      </Helmet>

      <main>{/* Experience and Project components go here */}</main>
    </HelmetProvider>
  );
};
