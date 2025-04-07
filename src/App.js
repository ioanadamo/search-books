import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ListElements from './components/ListElements/ListElements';
import ListSkeleton from './components/ListSkeleton/ListSkeleton';
import NoResults from './components/NoResults/NoResults';
import { useState, useEffect } from 'react';
import { useSearchBooksQuery } from './store/apiSlice';

function App() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { data, isFetching } = useSearchBooksQuery(debouncedQuery, {
    skip: debouncedQuery.length === 0,
  });

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const items = data?.docs || [];

  return (
    <div className="App">
      <h1>Search Your Favorite Books</h1>
      <SearchBar onSearch={handleSearch} />
      {isFetching ? (
        <ListSkeleton />
      ) : debouncedQuery.length > 0 && items.length === 0 ? (
        <NoResults />
      ) : (
        <ListElements items={items} />
      )}
    </div>
  );
}

export default App;
