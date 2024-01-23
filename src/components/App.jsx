import { useEffect, useState } from 'react';
import axios from 'axios';

const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

export const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get('https://hn.algolia.com/api/v1/search?query=react');
        console.log(response);

        if (response.data) {
          setArticles(response.data.hits);
        } else {
          console.error('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>

      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};
