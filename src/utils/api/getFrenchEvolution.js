import Axios from "axios";

export default function getFrenchEvolution() {
  Axios.get(
    "https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json"
  ).then((response) => {
    const allDate = new Set([...response.data].map((res) => res.date));
    const dailyData = new Map(
      [...allDate].map((date) => [
        date,
        {
          data: [...response.data].filter(
            (allData) =>
              date === allData.date &&
              allData.sourceType === "sante-publique-france-data"
          ),
          totalDeath: new Map(
            [...response.data]
              .filter(
                (filteredData) =>
                  date === filteredData.date &&
                  filteredData.sourceType === "sante-publique-france-data"
              )
              .map((data) => data.deces)
          ),
          //.reduce((acc, curr) => acc + curr)
        },
      ])
    );

    console.log(dailyData);
  });
}
