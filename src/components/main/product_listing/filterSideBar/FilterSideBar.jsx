import React, { useEffect, useState } from "react";
import s from "./FilterSideBar.module.css"
import arrow from "../../../../assets/icons/arrow.svg"

function FilterSideBar() {
  const [isActive, setIsActive] = useState(false)
  const [filter, setFilter] = useState({})
  useEffect(() => {
    console.log(filter)
  }, [filter])

  function priceMinChangeHandler(event) {
    setFilter(Object.assign())
  }

  return (
    <div className={s.wrapper}>
      <h4>You can filter by:</h4>
      <div className={s.filter}>
        <span className={isActive ? `${s.filter_header} ${s.active}` : s.filter_header}
        onClick={() => { setIsActive(!isActive) }}>
          Price
          <img className={s.arrow}
          src={arrow} 
          alt="arrow" />
        </span>
        <div className={isActive ? `${s.filter_body} ${s.active}` : s.filter_body}>
          <p>From</p> <input type="text" placeholder="From" />
          <p>To</p> <input type="text" placeholder="To" />
        </div>
      </div>
    </div>
  );
}

export default FilterSideBar