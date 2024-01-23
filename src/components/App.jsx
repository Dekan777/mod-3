import { useEffect, useState } from 'react';
import axios from 'axios';
import { Audio } from 'react-loader-spinner';
import s from './App.module.css';
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const response = await axios.get('https://hn.algolia.com/api/v1/search?query=react');
        console.log(response);
        setArticles(response.data.hits);
      } catch (error) {
        setError(true);
      } finally {
        // 2. Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Latest articles</h1>

      {loading && (
        <Audio
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
      {error && <p>Whoops, something went wrong! Please try reloading this page!</p>}
    </div>
  );
};
