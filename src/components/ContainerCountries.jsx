export const ContainerCountries = ({ children }) => {
  return (
    <div
      className="px-12 pt-4 
        sm:px-16 sm:pt-18 sm:grid sm:grid-cols-2 sm:gap-6
        md:grid-cols-3 md:gap-10
        lg:px-32 lg:grid-cols-4 xl:gap-20"
    >
      {children}
    </div>
  );
};
