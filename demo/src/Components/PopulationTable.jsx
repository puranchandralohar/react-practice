import React, { useEffect, useState } from "react";
import axios from "axios";

export function PopulationTable() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("ASC");

  useEffect(() => {
    axios.get("/data.json").then((response) => {
      setData(response.data.results);
    });
  }, []);

  const sortData = () => {
    let newData = data.sort((a, b) => {
      if (order === "ASC") {
        setOrder("DSC");
        return a.Population - b.Population;
      }
      if (order === "DSC") {
        setOrder("ASC");
        return b.Population - a.Population;
      }
    });
    setData([...newData]);
  };


  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
              <tr key={index}>
                <td>{item.Country}</td>
                <td>{item.Population}</td>
              </tr>     
          ))}
        </tbody>
      </table>
      <button onClick={sortData}>sort</button>
    </>
  );
}
