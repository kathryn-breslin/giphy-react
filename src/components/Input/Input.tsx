import React from "react";

interface IProps {
    search: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleFormSearch: (event: React.MouseEvent<HTMLElement>) => void;
}

const Input= ({ search, handleInputChange, handleFormSearch}: IProps) => {
    return (
      <nav className="navbar navbar-expand-lg" id="nav">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            aria-label="Search"
            onChange={handleInputChange}
            value={search}
            name="search"
            placeholder="Banana"
            id="search"
          />
          <button
            onClick={handleFormSearch}
            className="btn btn-outline-light my-2 my-sm-0"
            type="submit"
            id="button"
          >
            Search
          </button>
        </form>
      </nav>
    );
  };
  export default Input;
