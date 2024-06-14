import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Search() {
    const [keyword,setKeyword]=useState("");
    const navigate=useNavigate();
    const location=useLocation();

    const searchHandler=()=>{
          navigate('/search?keyword='+keyword)
    }

    useEffect(()=>{
        if(location.pathname !== '/search'){
          setKeyword('');
        }
    },[location])
  return (
    <Fragment>
         <div className="col-12 col-md-6 mt-2 mt-md-0">
          <div className="input-group">
            <input
              type="text"
              id="search_field"
              onChange={(e)=>setKeyword(e.target.value)}
              value={keyword}
              className="form-control"
              onBlur={searchHandler}
              placeholder="Enter Product Name ..."
            />
            <div className="input-group-append">
              <button onClick={searchHandler} id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

    </Fragment>
  )
}

export default Search