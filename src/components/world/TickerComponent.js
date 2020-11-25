import React, { useEffect, useState } from "react";
import Ticker from "react-ticker";
import Card from "./CardTicker";
import getSummary from "../../utils/api/getSummary";

export default function TickerComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [worldData, setWorldData] = useState([]);

  useEffect(() => {
    getSummary().then((res) => {
      setWorldData(res.data.Countries);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading === true ? (
        <p>Loading...</p>
      ) : (
        <Ticker>
          {({ index }) => <Card index={index} country={worldData[index]} />}
        </Ticker>
      )}
    </>
  );
}
