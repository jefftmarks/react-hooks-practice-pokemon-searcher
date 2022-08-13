import React from "react";

function Search({handleOnSearch, search}) {

  function onSearch(event) {
    console.log(event.target.value)
    handleOnSearch(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          onChange={onSearch}
          className="prompt"
          type="search"
          value={search}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
