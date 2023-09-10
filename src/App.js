import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SideBar from "./SideBar/SideBar";
// DataBase
import data from "./db/data";
import Card from "./components/Card";

function App() {
  const [slelectedCategory, setSlelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  //----------Input Filter-----------

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItem = data.filter((datas) =>
    datas.title.toLowerCase().indexOf(query.toLowerCase())!== -1
  );
  //----------Radio Filters-----------
  const handleChange = (event) => {
    setSlelectedCategory(event.target.value);
  };

  //----------Buttons Filter-----------

  const handleClick = (event) => {
    setSlelectedCategory(event.target.value);
  };

  function filtredData(datas, selected, query) {
    let filteredProducts = datas;

    // filtering input
    if (query) {
      filteredProducts = filteredItem;
    }

    // selecter Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice})=>(
      <Card
       key={Math.random()}
       img={img}
       title={title}
       star={star}
       reviews={reviews}
       newPrice={newPrice}
       prevPrice={prevPrice}
       />
    ))
  }



  const result = filtredData(data, slelectedCategory, query);


  return (
    <>
      <SideBar  handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleChange={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
