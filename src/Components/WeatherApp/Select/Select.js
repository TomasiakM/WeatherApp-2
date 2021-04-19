import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Select = () => {
  const trackedCities = useSelector((e) => e.data.trackedCities);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("default");

  const options = [
    {
      id: 776069,
      name: "Białystok",
      state: "",
      country: "PL",
      coord: {
        lon: 23.15,
        lat: 53.133331,
      },
    },
    {
      id: 3102014,
      name: "Bydgoszcz",
      state: "",
      country: "PL",
      coord: {
        lon: 18.00762,
        lat: 53.123501,
      },
    },
    {
      id: 3099434,
      name: "Gdańsk",
      state: "",
      country: "PL",
      coord: {
        lon: 18.64637,
        lat: 54.352051,
      },
    },
    {
      id: 3098722,
      name: "Gorzów Wielkopolski",
      state: "",
      country: "PL",
      coord: {
        lon: 15.22878,
        lat: 52.73679,
      },
    },
    {
      id: 3096472,
      name: "Katowice",
      state: "",
      country: "PL",
      coord: {
        lon: 19.02754,
        lat: 50.258419,
      },
    },
    {
      id: 769250,
      name: "Kielce",
      state: "",
      country: "PL",
      coord: {
        lon: 20.62752,
        lat: 50.870331,
      },
    },
    {
      id: 3094802,
      name: "Kraków",
      state: "",
      country: "PL",
      coord: {
        lon: 19.91667,
        lat: 50.083328,
      },
    },
    {
      id: 765876,
      name: "Lublin",
      state: "",
      country: "PL",
      coord: {
        lon: 22.566669,
        lat: 51.25,
      },
    },
    {
      id: 3093133,
      name: "Łódź",
      state: "",
      country: "PL",
      coord: {
        lon: 19.466669,
        lat: 51.75,
      },
    },
    {
      id: 763166,
      name: "Olsztyn",
      state: "",
      country: "PL",
      coord: {
        lon: 20.49416,
        lat: 53.779949,
      },
    },
    {
      id: 3090048,
      name: "Opole",
      state: "",
      country: "PL",
      coord: {
        lon: 17.950001,
        lat: 50.666672,
      },
    },
    {
      id: 3088171,
      name: "Poznań",
      state: "",
      country: "PL",
      coord: {
        lon: 16.92993,
        lat: 52.406921,
      },
    },
    {
      id: 759734,
      name: "Rzeszów",
      state: "",
      country: "PL",
      coord: {
        lon: 21.99901,
        lat: 50.041321,
      },
    },
    {
      id: 3083829,
      name: "Szczecin",
      state: "",
      country: "PL",
      coord: {
        lon: 14.55302,
        lat: 53.42894,
      },
    },
    {
      id: 3083271,
      name: "Toruń",
      state: "",
      country: "PL",
      coord: {
        lon: 18.598141,
        lat: 53.013748,
      },
    },
    {
      id: 756135,
      name: "Warszawa",
      state: "",
      country: "PL",
      coord: {
        lon: 21.01178,
        lat: 52.229771,
      },
    },
    {
      id: 3081368,
      name: "Wrocław",
      state: "",
      country: "PL",
      coord: {
        lon: 17.033331,
        lat: 51.099998,
      },
    },
    {
      id: 3080165,
      name: "Zielona Góra",
      state: "",
      country: "PL",
      coord: {
        lon: 15.50643,
        lat: 51.935478,
      },
    },
  ];

  const addCityToTracked = () => {
    if (selected !== "default") {
      const selectedObj = options.find(
        (option) => option.id === parseInt(selected)
      );
      dispatch({ type: "ADD_CITY", payload: selectedObj });
      setSelected("default");
    }
  };

  const reducedOptions = options.reduce((arr, el) => {
    if (!trackedCities.find((e) => e.id === el.id)) arr.push(el);
    return arr;
  }, []);

  const changeSelected = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="d-flex justify-content-end py-3 px-1">
      {reducedOptions.length > 0 ? (
        <>
          <select
            className="form-select mr-1"
            value={selected || "default"}
            onChange={changeSelected}
          >
            <option disabled value="default">
              -- wybierz miasto --
            </option>
            {reducedOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
          <button className="btn btn-light btn-sm" onClick={addCityToTracked}>
            Dodaj
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Select;
