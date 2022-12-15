import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import HeadlinePage from "./components/HeadlinePage.jsx";

import { key } from "./guardianKey.js";
const guardianURI =
  "https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=";

function App() {
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const res = await axios.get(`${guardianURI}${key}`);
      const articleArray = res.data.response.results;
      setArticles(articleArray);
    } catch (e) {
      console.log(
        `something went wrong trying to get data from the server: "${e.message}"`
      );
      return [];
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="App">
      <main>
        <HeadlinePage articles={articles} />
      </main>
    </div>
  );
}

export default App;
