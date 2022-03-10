import { useState } from "react";

export const SelectFilter = () => {
  const [region, setRegion] = useState("0");

  return (
    <form action="">
      <label htmlFor=""></label>
      <select
        class="w-1/2 sm:w-auto p-3 focus:outline-none shadow-lg border rounded-md"
        name="region"
        value={region}
        onChange={(event) => {
          console.log(event.target.value);
          setRegion(event.target.value);
        }}
      >
        <option disabled value="0">
          Filter By Region
        </option>
        <option value="america">America</option>
        <option value="europe">Europe</option>
      </select>
    </form>
  );
};
