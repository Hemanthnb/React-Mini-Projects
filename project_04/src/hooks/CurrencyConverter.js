import React, { useEffect, useState } from "react";
import { BASE_URL } from "../services/converter_api";

export default function CurrencyConverter(currencyType) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}${currencyType}.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currencyType]);
      });
  }, [currencyType]);

  return data;
}
