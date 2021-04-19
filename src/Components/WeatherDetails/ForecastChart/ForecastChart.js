import React from "react";
import { Chart } from "react-charts";

const ForecastChart = ({ forecastData }) => {
  const slicedData = forecastData.slice(1, 26);

  const tempData = slicedData.map((el, i) => {
    const roundedTemp = Math.round(el.temp * 10) / 10;
    return {
      x: i,
      y: roundedTemp,
    };
  });

  const humidityData = slicedData.map((el, i) => {
    const { humidity } = el;
    return {
      x: i,
      y: humidity,
    };
  });

  const data = React.useMemo(
    () => [
      {
        label: "Temperatura",
        data: tempData,
        secondaryAxisID: "temp",
      },
      {
        label: "Wilgotność",
        data: humidityData,
        secondaryAxisID: "humidity",
      },
    ],
    [tempData, humidityData]
  );

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "linear",
        position: "bottom",
        format: (e) => {
          return new Date(slicedData[e]?.dt * 1000).getHours();
        },
      },
      {
        type: "linear",
        position: "left",
        id: "temp",
        format: (d) => `${d}°C`,
      },
      {
        type: "linear",
        position: "right",
        id: "humidity",
        format: (d) => `${d}%`,
      },
    ],
    [slicedData]
  );

  return (
    <div className="mx-auto" style={{ maxWidth: "750px" }}>
      <h5 className="text-light">
        <span style={{ color: "#4AB5EB" }}>Temperatura</span> i{" "}
        <span style={{ color: "#FC6868" }}>wilgotność</span> na najbliższe 24h
      </h5>
      <div style={{ height: "300px" }}>
        <Chart data={data} axes={axes} dark />
      </div>
    </div>
  );
};

export default ForecastChart;
