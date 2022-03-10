export const Header = () => {
  return (
    <div
      class="flex justify-between items-center px-4 py-4 
        sm:px-16 
        shadow-lg
        lg:px-32"
    >
      <h1 class="text-base font-semibold">Where in the world?</h1>
      <button className="flex items-center gap-2 py-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        <p className="font-medium ">Dark Mode</p>
      </button>
    </div>
  );
};
