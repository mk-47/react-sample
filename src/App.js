import "./styles.css";
import React from "react";

export default function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.jikan.moe/v3/search/anime?q=naruto"
      );
      const data = await response.json();
      setData(data.results);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      {console.log(data)}
      <table border="1">
        <tr>
          <th>image</th>
          <th>Name</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>
              <img src={item.image_url} height="250" width="300" />
            </td>
            <td>{item.title}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

## Comment