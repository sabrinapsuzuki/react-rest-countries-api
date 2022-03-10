export const ContainerFilters = ({ children }) => {
  return (
    <div
      class="flex flex-col px-4 py-6 gap-8 
      sm:px-16 sm:py-18 sm:flex-row sm:items-center sm:justify-between
      lg:px-32"
    >
      {children}
    </div>
  );
};
