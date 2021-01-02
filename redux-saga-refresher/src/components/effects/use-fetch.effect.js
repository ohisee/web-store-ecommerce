/**
 * @fileoverview custom effect hook 
 */
import { useState, useEffect } from "react";

/**
 * @param {string} url 
 */
export function useFetch(url) {

  /** @type {[object, (d: object) => void]} */
  const [data, setData] = useState(null);

  useEffect(() => {
    const fectchData = async function () {
      const res = await fetch(url);
      const dataArray = await res.json();
      setData(dataArray[0]);
    }

    fectchData();
  }, [url] /* dependency list */);

  return data;
}
