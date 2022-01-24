import React from "react";

function SearchBox({ search, setSearch }) {
  return (
    <div>
      <main className="form-signin">
        <h1 className="h3 mb-3 fw-normal">Enter Movie Name</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            autoComplete="off"
            onChange={setSearch}
            value={search}
          />
          <label for="floatingInput">Enter Movie</label>
        </div>
      </main>
    </div>
  );
}

export default SearchBox;
