import React, { useEffect, useState } from "react";
import axios from "axios";
import './DashBoard.css'
export default function DashBoard() {
  const [dashBoardApi, setDashBoardApi] = useState([])
  async function getApi() {
    let { data } = await axios.get(
      `http://afdinc-001-site5.itempurl.com/api/Waqf`
    );
    setDashBoardApi(data)
  }
  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
    {dashBoardApi?<ul className="list-group container mb-5">
      {dashBoardApi.map((item)=>
        <li
      key={item.id}
      className= {`list-group-item d-md-flex justify-content-between py-0 item--bg-${item.waqfStatus}`}
    >
      <div className="py-2 d-md-flex align-items-center justify-content-center">
        <a className="btn">
          {item.waqfName}
        </a>
      </div>
      <div className="py-2 d-md-flex align-items-center justify-content-center">
        {item.establishmentDate}
      </div>
      <div className="py-2 d-md-flex align-items-center justify-content-center">
        {item.waqfStatus}
      </div>
      <div className="py-2">
        <button type="button" className="btn btn--view">
          عرض
        </button>
      </div>
      <div className="py-2">
        <button type="button" className="btn btn--edit">
          تعديل 
        </button>
      </div>
      <div className="py-2">
        <button type="button" className="btn btn-danger btn--delete">
          حذف 
        </button>
      </div>
      </li>
      )}
    </ul>:
    <div className="container">
      <div className="d-md-flex align-items-center justify-content-center loading">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
        </div>
    </div>
      }
    </>
  );
}
