import React, {useState} from "react";

 function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        onSearch(value); // Pass the search term to the parent component for filtering transactions
      };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search by description"
      />
    </div>
  )
}

export default SearchBar;
