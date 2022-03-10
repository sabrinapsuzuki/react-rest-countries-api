export const SelectFilter = () => {
  return (
    <select
      name="select"
      class="w-1/2 sm:w-auto p-3 focus:outline-none shadow-lg border rounded-md"
    >
      <option selected disabled value="" className="">
        Filter By Region
      </option>
      <option value="valor1">teste 1</option>
      <option value="valor2">teste 2</option>
    </select>
  );
};
