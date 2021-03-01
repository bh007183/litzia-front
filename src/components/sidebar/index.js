import React, {useState, useEffect} from "react";
import "./style.css";
import API from "../../api/product-routes"


function Sidebar() {

  const [subCat, setSubCat] = useState ({
    subcat: []
  })
  

  useEffect(() => {
    API.getAllSubCategories().then(res => setSubCat({ subcat: res.data}))
  }, [])


  return (
    <div className="sidebar">
      <aside>

       {subCat.subcat.map(item => <button data-id={item.id} >{item.name}</button>)} 
        
      </aside>
    </div>
  );
}

export default Sidebar;
