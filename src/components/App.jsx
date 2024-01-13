import './App.css';
// import { SearchBar } from './SearchBar/SearchBar';
import { useState } from 'react';
import { LangSwitcher } from './LangSwitcher/LangSwitcher';

export const App = () => {
  const [lang, setLang] = useState('uk');

  return (
    <>
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
    </>
  );
};
