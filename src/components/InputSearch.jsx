export const InputSearch = ({ onChange, value }) => {
  return (
    <div class="flex shadow-lg border p-3 text-gray-400 rounded-md sm:w-2/5">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <form action="">
        <label for="busca" class="sr-only ">
          Search for a country...
        </label>
        <input
          onChange={onChange}
          value={value}
          id="busca"
          name="busca"
          type="text"
          autocomplete="email"
          class="appearance-none w-full px-3 text-black placeholder:text-xs placeholder-gray-400 focus:outline-none"
          placeholder="Search for a country..."
        />
      </form>
    </div>
  );
};
