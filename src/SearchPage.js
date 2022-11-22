import React, { useState, useEffect } from "react";
import axios from "axios";
import { Slider } from "./Slider";
import "./SearchPage.css";
import LogoutButton from "./LogoutButton";
const Search = () => {
  const [load, setLoad] = useState([]);
  const [title, settitle] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    let arr = [];

    const allLoads = async () => {
      const response = await axios.get("https://restcountries.com/v2/all");
      for (let i = 0; i < 250; i++) {
        if (!response.data[i].capital || !response.data[i].currencies) {
          arr.push({
            name: response.data[i].name,
            Capital: "no capital",
            currency: "no currency",
          });
        } else if (!response.data[i].currencies) {
          arr.push({
            name: response.data[i].name,
            Capital: response.data[i].capital,
            currency: "no currency",
          });
        } else {
          arr.push({
            name: response.data[i].name,
            Capital: response.data[i].capital,
            currency: response.data[i].currencies[0].name,
          });
        }
      }

      setLoad(arr);
    };

    allLoads();
  }, []);

  return (
    <div>
      <LogoutButton />
      <h4 className="h4">Search Countries and Capitals</h4>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => settitle(e.target.value)}
      />

      <div className="search">
        <table>
          <thead>
            <tr>
              <th>Country </th>
              <th>Currency</th>
              <th>Capital</th>
            </tr>
          </thead>

          {load
            .filter((value) => {
              if (title === "") {
                return value;
              } else {
                console.log(value.name);
                return value.name.toLowerCase().includes(title.toLowerCase());
              }
            })
            .map((item) => {
              return (
                <thead>
                  <th>
                    <a onClick={() => setData(item.Capital)}>
                      <h4>{item.name}</h4>
                    </a>
                  </th>
                  <th>
                    <h5>{item.currency}</h5>
                  </th>
                  <th>
                    <h5>{item.Capital}</h5>
                  </th>
                </thead>
              );
            })}
        </table>

        <Slider data={data} />
      </div>
    </div>
  );
};

export default Search;
