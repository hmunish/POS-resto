import { memo } from "react";
import "./Search.css";

const Search = () => (
  <input
    id="search-input"
    type="search"
    placeholder="Search for food, coffe, etc.."
    autoComplete="off"
  />
);

export default memo(Search);
