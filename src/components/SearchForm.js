import React from "react";


function SearchResults(props) {
  return (
    <form className="search">
      <div className="input-group mb-3 float-center">
        <input
          style={{width: "90%"}}
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a user profile."
          id="search"
        />
        <button style={{backgroundColor: "PaleVioletRed", float:"right"} } 
        type="submit" onClick={props.handleFormSubmit} className="btn">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchResults;
