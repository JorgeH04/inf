import { useSearchParams } from "react-router-dom";
// import { MoviesGrid } from "../components/MoviesGrid";
//import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Movie from "../components/Movie";


export function LandingPage() {
  const [query] = useSearchParams();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);
  return (
    <div>
      <Nav />
      <Hero />
      <Movie key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
