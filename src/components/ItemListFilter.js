import classes from "./ItemListFilter.module.css";

import { useState } from "react";


const ItemListFilter = ({ items }) => {

    const [searchedId, setSearchedId] = useState('');


  return (
      <div>
          <div className={classes.input}>
            <input placeholder='Search...' type='text' id='search' autoComplete="off"  required onChange={e => setSearchedId(e.target.value)} />
          </div>
            <div className={classes['item-list']}>
            {items.filter((item) => {
                if (searchedId == "") {
                    return item
                } else if (item.id.toString().includes(searchedId)) {
                    return item
                }
            }).map((item, key) => (
                <div key={key} className={classes.card} style={{backgroundColor:`${item.color}`}}>  
                    <h2>{item.name}</h2>
                    <h4>{item.year}</h4>
                    <p className={classes.id}>{item.id}</p>
                </div>
            ))}
            </div>
        </div>
  );
};

export default ItemListFilter;