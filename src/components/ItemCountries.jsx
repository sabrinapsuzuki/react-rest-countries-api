export const ItemCountries = ({ data }) => {
  return (
    <div>
      <div className="shadow-lg border rounded-md overflow-hidden">
        <img
          src={data.flag}
          alt={data.translations.br}
          className="h-48 object-cover w-full"
        />
        <div className="flex flex-col px-4 pt-6 pb-8 ">
          <h1 className="text-base font-semibold">{data.translations.br}</h1>
          <div className="flex flex-col gap-1">
            <p>
              <span className="font-medium">População: </span>
              {data.population}
            </p>
            <p>
              <span className="font-medium">Região: </span>
              {data.region}
            </p>
            <p>
              <span className="font-medium">Capital: </span>
              {data.capital}
            </p>
          </div>
        </div>
      </div>
      <div className="h-6"></div>
    </div>
  );
};
