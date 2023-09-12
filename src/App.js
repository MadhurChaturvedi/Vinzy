import { useState ,useEffect } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SideBar from "./SideBar/SideBar";
// import ClipLoader from "react-spinners/ClipLoader";
// import RotateLoader from "react-spinners/RotateLoader"

// DataBase
import data from "./db/data";
import Card from "./components/Card";

import Loder from "./Loder/Loder";

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

  const [loading,setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])


  return (

    <div>
    {
    loading ? 
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center', width:'100%',height:'100vh', overFlow: "hidden" }}> <Loder /> <h1><span style={{color:'#3498db'}}>Loding</span><span style={{color:'#8e44ad'}}> pls</span><span style={{color:'#16a085'}} > Wait</span></h1></div> :
      
    <header>
      <SideBar  handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleChange={handleClick} />
      <Products result={result} />
      </header>
       }
    </div>
  );
}

export default App;



