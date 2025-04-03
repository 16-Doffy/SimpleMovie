import React, { useEffect, useState } from "react";
import MovieCard from "../Components/Movie/MovieCard";
import useSWR from "swr";
import { fetcher } from "../config/config";
import useDebounce from "../Hooks/useDebounce";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;

const MoviesPage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 3000);

  const apiKey = "733d08f3b55d5c3b516692a4f30a1ff7";
  const baseUrl = "https://api.themoviedb.org/3";

  const url = filterDebounce
    ? `${baseUrl}/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${currentPage}`
    : `${baseUrl}/movie/popular?api_key=${apiKey}&page=${currentPage}`;

  const { data } = useSWR(url, fetcher);
  const loading = !data;
  const movies = data?.results || [];

  useEffect(() => {
    if (!data || data?.total_results) {
      setPageCount(Math.ceil(data.total_results));
    }
  }, [data]);

  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    const newOffset = (event.selected * itemsPerPage) % (data?.total_results || 1);
    setItemOffset(newOffset);
    setCurrentPage(selectedPage);
  };

  return (
    <div className="py-10">
      {/* Search Box */}
      <div className="flex w-72 border rounded-full overflow-hidden text-2xl ml-5 p-3 bg-blue-900">
        <input
          type="text"
          className="flex-1 w-full text-white bg-blue-900 outline-none"
          placeholder="Type here to search..."
          onChange={(e) => setFilter(e.target.value)}
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-pink-500 border-t-transparent mx-auto animate-spin mt-10"></div>
      )}

      {/* Movie List */}
      <div className="grid grid-cols-4 m-4 gap-10">
        {!loading && movies.length > 0
          ? movies.map((item) => <MovieCard key={item.id} item={item} />)
          : !loading && <p className="text-white text-center col-span-4">No movies found.</p>}
      </div>

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="mt-10 flex justify-center">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< Prev"
            renderOnZeroPageCount={null}
            containerClassName="flex justify-center items-center gap-3 text-2xl"
            activeClassName="text-white bg-blue-700 px-3 py-3 rounded-lg"
            pageLinkClassName="px-3 py-1"
            className="pagination"
          />
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
