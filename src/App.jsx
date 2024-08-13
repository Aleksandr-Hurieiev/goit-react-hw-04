import { useState, useEffect } from "react";
import axios from "axios";
import { ProgressBar } from "react-loader-spinner";
import "./App.css";
import SeachBar from "./components/SeachBar/SeachBar.jsx";

function App() {
  const [articles, setArticles] = useState([]);
  const [seach, setSearch] = useState(null);
  useEffect(() => {
    async function fetchArticles() {
      const URL = "https://api.unsplash.com/";
      const ID = "3TmQeMqun5IEPdHSIOw_mk4o3DO9iPgDS0UKsrGJx5M";
      const params = {
         query: seach,
        orientation: "landscape",
        per_page: 20,
      };
      const response = await axios.get(`${URL}photos?client_id=${ID}`, {
        params,
        headers: {
          "Accept-Version": "v1",
        },
      });
      setArticles(response.data.hits);
    }
    fetchArticles();
  }, []);
  const onSubmit = (userDate) => {
    console.log(userDate);
  };
  return (
    <div>
      <h1>Latest articles</h1>
      <SeachBar onSubmit={onSubmit} />

      <ProgressBar
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default App;
