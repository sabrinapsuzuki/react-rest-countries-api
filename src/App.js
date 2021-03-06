import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Header,
  ItemCountries,
  InputSearch,
  SelectFilter,
  ContainerCountries,
  ContainerFilters,
} from "./components/index";

function App() {
  const [countries, setCountries] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    loadCountries();
  }, []);

  //carregar countries
  const loadCountries = () => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => {
        return response.json();
      })
      .then((json) => setCountries(json));
  };

  //lendo busca do input
  const lerBusca = (event) => {
    setBusca(event.target.value);
  };

  //passando oq foi digitado para minusculo
  const loweBusca = busca.toLowerCase();

  //filtrando a lista 'countries' minuscula de acordo com
  //oq foi digitado pelo usuario
  const countriesFiltrados = countries.filter((countrie) =>
    countrie.translations.br.toLowerCase().includes(loweBusca)
  );

  return (
    <div className="text-sm">
      <Header />

      <ContainerFilters>
        <InputSearch onChange={lerBusca} value={busca} />
        <SelectFilter />
      </ContainerFilters>

      <ContainerCountries>
        {countriesFiltrados.map((item, index) => (
          <ItemCountries key={index} data={item} />
        ))}
      </ContainerCountries>
    </div>
  );
}

export default App;
