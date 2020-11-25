import React, { useEffect, useState } from "react";

import Paper from "@material-ui/core/Paper";
// import {
//   ArgumentAxis,
//   ValueAxis,
//   Chart,
//   LineSeries,
//   SplineSeries
// } from "@devexpress/dx-react-chart-material-ui";

import getWorldEvolution from "../../utils/api/getWorldEvolution";
import getFrenchEvolution from "../../utils/api/getFrenchEvolution";

export default function MixedGraph() {
  const [worldData, setWorldData] = useState([]);

  useEffect(() => {
    // getWorldEvolution()
    //   .then((res) => {
    //     let data = [...res.data];
    //     console.log(data);

    //     let sortedData = data.sort((a, b) => {
    //       return a.TotalDeaths - b.TotalDeaths;
    //     });
    //     let mappedData = sortedData.map((daylyData, i) => ({
    //       argument: i,
    //       TotalDeaths: daylyData.TotalDeaths,
    //       TotalConfirmed: daylyData.TotalConfirmed
    //     }));
    //     setWorldData(mappedData);
    //   })
    //   .catch((err) => console.log(err));

    console.log(getFrenchEvolution())
  }, []);

//   const getChartObject = (data, key) => {
//     let sortedData = data.sort((a, b) => {
//       return a.key - b.key;
//     });
//     let mappedData = sortedData.map((daylyData, i) => ({
//       argument: i,
//       value: daylyData.TotalDeaths,
//     }));
//   };

  return (
    <>
      {worldData === [] ? (
        <p>Loading...</p>
      ) : (
        <Paper>
          coucou
          {/* <Chart data={worldData}>
            <ArgumentAxis />
            <ValueAxis />
            <LineSeries valueField="TotalDeaths" argumentField="argument" />
            <SplineSeries valueField="TotalConfirmed" argumentField="argument" />
          </Chart> */}
        </Paper>
      )}    
    </>
  );
}
