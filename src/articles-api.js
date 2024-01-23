import axios from "axios";

axios.defaults.baseURL = "<https://hn.algolia.com/api/v1>";

export const fetchArticlesWithTopic = async topic => {
    const response = axios.get(`/search?query=${topic}`);
<<<<<<< Updated upstream
    return response.data.hits;
};
=======

    return response.data.hits;


}; 
>>>>>>> Stashed changes
