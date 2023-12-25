"use client";
export default function SearchCoins({
  getSearchResults,
}: {
  getSearchResults: any;
}) {
  return (
    <div className="text-center my-10">
      <div className="relative z-10">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search something
        </label>
        <input
          type="search"
          placeholder="Search something"
          required
          onChange={(e) => {
            getSearchResults(e.target.value);
          }}
          className={`block w-full outline-0 p-4 pl-10 text-sm text-gray-900 bg-white `}
        />
      </div>
    </div>
  );
}
