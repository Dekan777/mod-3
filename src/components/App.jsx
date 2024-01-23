import { useEffect, useState } from 'react';
// import axios from 'axios';
import { SearchForm } from './SearchForm';
import { Audio } from 'react-loader-spinner';
import { fetchArticlesWithTopic } from '../arcticles-api';
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

  const handleSearch = async topic => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // console.log(articles);
  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        const data = await fetchArticlesWithTopic('react');

        setArticles(data);
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
      <SearchForm onSearch={handleSearch} />
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
