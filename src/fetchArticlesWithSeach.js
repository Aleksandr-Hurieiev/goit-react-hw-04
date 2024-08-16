import axios from "axios";
export default async function fetchArticlesWithSeach(value, numberPage = 1) {
  const URL = "https://api.unsplash.com";
  const params = {
    client_id: "3TmQeMqun5IEPdHSIOw_mk4o3DO9iPgDS0UKsrGJx5M",
    query: value,
    orientation: "landscape",
    page: numberPage,
    per_page: 10,
  };
  const response = await axios.get(`${URL}/search/photos`, {
    params,
    headers: {
      "Accept-Version": "v1",
    },
  });
  return response.data;
}
