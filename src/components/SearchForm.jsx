export const SearchForm = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    onSearch(form.elements.topic.value);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search articles..." />
      <button>Search</button>
    </form>
  );
};
