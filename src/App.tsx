import { Helmet } from "react-helmet-async";
import "./App.css";
import Home from "./features/shared/Home";
import { siteMeta } from "./metaConfig";
import "react-loading-skeleton/dist/skeleton.css";

const App = () => {
  return (
    <main className="bg-gradient md:px-5 lg:px-10 text-gray-400 font-poppins">
      {/* SEO optimization */}
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Language" content="en" />
        <meta name="description" content={siteMeta.description} />

        {/* Open Graph */}
        <meta property="og:title" content={siteMeta.title} />
        <meta property="og:description" content={siteMeta.description} />
        <meta property="og:image" content={siteMeta.image} />
        <meta property="og:url" content={siteMeta.url} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMeta.title} />
        <meta name="twitter:description" content={siteMeta.description} />
        <meta name="twitter:image" content={siteMeta.image} />

        <title>{siteMeta.title}</title>
        <link rel="canonical" href={siteMeta.url} />
        <link rel="icon" href={siteMeta.favicon} />
      </Helmet>

      {/* Main App */}
      <Home />
    </main>
  );
};

export default App;
