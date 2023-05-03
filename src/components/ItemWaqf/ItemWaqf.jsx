import React from 'react'

export default function ItemWaqf() {
  return (
    <>
        <li
            className="list-group-item item--bg-reject d-flex justify-content-between py-0"
          >
            <div className="py-2 d-flex align-items-center justify-content-center">
              <Link to="/details" className="btn">
                {item.name}
              </Link>
            </div>
            <div className="py-2 d-flex align-items-center justify-content-center">
              {item.date}
            </div>
            <div className="py-2 d-flex align-items-center justify-content-center">
              {item.stateWritten}
            </div>
            <div className="py-2">
              <button type="button" className="btn btn--view">
                عرض
              </button>
            </div>

//             <div className="py-2">
//               <button type="button" className="btn btn--edit">
//                 تعديل
//               </button>
//             </div>
//             <div className="py-2">
//               <button type="button" className="btn btn-danger btn--delete">
//                 حذف
//               </button>
//             </div>
//           </li>
    </>
  )
}
