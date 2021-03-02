import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../api/product-routes";

function Sidebar() {
  const [subCat, setSubCat] = useState({
    subcat: [],
  });

  useEffect(() => {
    API.getAllSubCategories().then((res) => setSubCat({ subcat: res.data }));
  }, []);

  return (
    <div className="sidebar">
      <aside>
        <div className="row">
          <div className="col m12">
            {subCat.subcat.map((item) => (
              <button data-id={item.id}>{item.name}</button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
