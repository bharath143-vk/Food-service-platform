import { useState, useEffect } from "react";

const useRestaurant = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://localhost:5000/api/restaurants");
      const json = await data.json();
      setResInfo(json); // ✅ Only set once
    }

    fetchData();
  }, []); // ✅ fetch once on mount

  return resInfo;
};

export default useRestaurant;
