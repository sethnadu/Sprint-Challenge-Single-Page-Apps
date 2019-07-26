import React, { useState } from 'react';

export default function SearchForm({ onSearch}) {
  console.log(onSearch);

  // const formArray = []
  // const nameFetch = Object.values(form).map(name => {
  //   formArray.push(name);
  // })

  const [query, setQuery] = useState({
    name: ""
  })
  const handleInputChange = (event) => {
    setQuery({ ...query, name: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
    // console.log(formArray.find(event.target.value));

  }

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <button  type="submit">Search</button>
      </form>
    </section>
  );
}
