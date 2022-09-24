import React, { useEffect, useState } from "react";
import fetchData from "../api/fetchData";

const useFetch = (endPoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData([]);
    setLoading(true);
    fetchData(endPoint)
      .then((res) => setData(res.data))
      .catch((e) => {
        console.error(e);
        setData([]);
      })
      .finally(() => setLoading(false));
  }, [endPoint]);
  return {data,loading}
};

export default useFetch;
