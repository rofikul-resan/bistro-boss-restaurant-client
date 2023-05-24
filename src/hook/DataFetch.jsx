import { useEffect } from "react";

const useDataFetch = (url, setData) => {
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url, setData]);
};

export default useDataFetch;
