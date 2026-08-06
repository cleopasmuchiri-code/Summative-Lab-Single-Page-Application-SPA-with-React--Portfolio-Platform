const Search = ({ setSearch }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="grid gap-2 border-b-2 border-text-muted">
      <input
        onChange={handleChange}
        type="text"
        name="search"
        placeholder="Search Project"
        className="placeholder:text-text-placeholder focus:border-0 outline-0 w-full"
      />
    </div>
  );
};

export default Search;
