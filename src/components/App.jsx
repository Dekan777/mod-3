import { useEffect, useState, useRef, forwardRef } from 'react';
// import axios from 'axios';
import { SearchForm } from './SearchForm';
import { Audio } from 'react-loader-spinner';
import { fetchArticlesWithTopic } from '../arcticles-api';
import { MyComponent } from './MyComponent';
import { ComponentA } from './ComponentA';
import { ComponentB } from './ComponentB';

const CustomButton = forwardRef((props, ref) => <button ref={ref}>{props.children}</button>);

const Player = ({ source }) => {
  const playerRef = useRef();

  const play = () => playerRef.current.play();

  const pause = () => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
};

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

  const btnRef = useRef();

  useEffect(() => btnRef.current.focus(), []);

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
      <MyComponent />
      <ComponentB />
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
      {/* <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" /> */}
      <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>

      <ComponentA />
    </div>
  );
};
