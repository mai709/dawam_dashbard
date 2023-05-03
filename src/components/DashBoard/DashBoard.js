// import React, { Component } from "react";
// import "hijri-date";
// import HijriDate, { toHijri } from "hijri-date/lib/safe";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./DashBoard.css";
// import axios from "axios";
// export default class DashBoard extends Component {
//   state = {
//     waqf: [
//       {
//         id: 1,
//         name: "مسجد النور",
//         date: "21-1-2023",
//         status: "wait",
//         stateWritten: "قيد الإنتظار",
//       },
//       {
//         id: 2,

//         name: "مسجد الرحمة",
//         date: "24-1-2023",
//         status: "done",
//         stateWritten: "تم التأكيد",
//       },
//       {
//         id: 3,

//         name: "مسجد الهداية",
//         date: "21-1-2023",
//         status: "wait",
//         stateWritten: "قيد الإنتظار",
//       },
//       {
//         id: 4,

//         name: "أرض مدينة نصر",
//         date: "23-1-2023",
//         status: "wait",
//         stateWritten: "قيد الإنتظار",
//       },
//       {
//         id: 5,

//         name: "عمارة الدقي",
//         date: "23-1-2023",
//         status: "reject",
//         stateWritten: "مرفوض",
//       },
//       {
//         id: 6,

//         name: "سكن الطلبة",
//         date: "23-1-2023",
//         status: "done",
//         stateWritten: "تم التأكيد",
//       },
//       {
//         id: 7,

//         name: "أرض زراعية",
//         date: "23-1-2023",
//         status: "reject",
//         stateWritten: "مرفوض",
//       },
//       {
//         id: 8,

//         name: "شقة 40",
//         date: "23-1-2023",
//         status: "wait",
//         stateWritten: "قيد الإنتظار",
//       },
//       {
//         id: 9,

//         name: "عمارة الدقي",
//         date: "23-1-2023",
//         status: "reject",
//         stateWritten: "مرفوض",
//       },
//       {
//         id: 10,
//         name: "سكن الطلبة",
//         date: "23-1-2023",
//         status: "done",
//         stateWritten: "تم التأكيد",
//       },
//       {
//         id: 11,
//         name: "أرض زراعية",
//         date: "23-1-2023",
//         status: "reject",
//         stateWritten: "مرفوض",
//       },
//       {
//         id: 12,

//         name: "شقة 40",
//         date: "23-1-2023",
//         status: "wait",
//         stateWritten: "قيد الإنتظار",
//       },
//       {
//         id: 13,

//         name: "عمارة الدقي",
//         date: "23-1-2023",
//         status: "reject",
//         stateWritten: "مرفوض",
//       },
//       {
//         id: 14,

//         name: "سكن الطلبة",
//         date: "23-1-2023",
//         status: "done",
//         stateWritten: "تم التأكيد",
//       },
//       {
//         id: 15,

//         name: "أرض زراعية",
//         date: "23-1-2023",
//         status: "reject",
//         stateWritten: "مرفوض",
//       },
//       {
//         id: 16,

//         name: "شقة 40",
//         date: "23-1-2023",
//         status: "wait",
//         stateWritten: "قيد الإنتظار",
//       },
//       {
//         id: 17,

//         name: "عمارة الدقي",
//         date: "23-1-2023",
//         status: "reject",
//         stateWritten: "مرفوض",
//       },
//       {
//         id: 18,

//         name: "سكن الطلبة",
//         date: "23-1-2023",
//         status: "done",
//         stateWritten: "تم التأكيد",
//       },
//       {
//         id: 19,

//         name: "أرض زراعية",
//         date: "23-1-2023",
//         status: "reject",
//         stateWritten: "مرفوض",
//       },
//       {
//         id: 20,

//         name: "شقة 40",
//         date: "23-1-2023",
//         status: "wait",
//         stateWritten: "قيد الإنتظار",
//       },
//     ],
//   };
//   render() {
//     const today = new HijriDate();
//     const day_eid_adha = new HijriDate(1438, 12, 10); // عيد الأضحى لسنة 1438
//     const dayGreg = day_eid_adha.toGregorian();
//     //  Fri Sep 01 2017 00:00:00 GMT+0300 (AST)
//     //------ Convert from Gregorian to Hijri---------
//     const nowGreg = new Date();
//     const nowHijri = nowGreg.toHijri();
//     console.log(today.getMonth());

//     ///////////////////////////////////
//     let items = this.state.waqf.map((item) => {
//       // console.log(document.write());
//       if (item.status === "wait") {
//         return (
//           <li
//             key={item.id}
//             className="list-group-item item--bg-wait d-flex justify-content-between py-0"
//           >
//             <div className="py-2 d-flex align-items-center justify-content-center">
//               <Link to="/details" className="btn">
//                 {item.name}
//               </Link>
//             </div>
//             <div className="py-2 d-flex align-items-center justify-content-center">
//               {item.date}
//             </div>
//             <div className="py-2 d-flex align-items-center justify-content-center">
//               {item.stateWritten}
//             </div>
//             <div className="py-2">
//               <button type="button" className="btn btn--view">
//                 عرض
//               </button>
//             </div>
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
//         );
//       } else if (item.status === "done") {
//         return (
//           <li
//             key={item.id}
//             className="list-group-item item--bg-done d-flex justify-content-between py-0"
//           >
//             <div className="py-2 d-flex align-items-center justify-content-center">
//               <Link to="/details" className="btn">
//                 {item.name}
//               </Link>
//             </div>
//             <div className="py-2 d-flex align-items-center justify-content-center">
//               {item.date}
//             </div>
//             <div className="py-2 d-flex align-items-center justify-content-center">
//               {item.stateWritten}
//             </div>
//             <div className="py-2">
//               <button type="button" className="btn btn--view">
//                 عرض
//               </button>
//             </div>

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
//         );
// }
//         if (item.status === "reject") {
//         return (
//           <li
//             key={item.id}
//             className="list-group-item item--bg-reject d-flex justify-content-between py-0"
//           >
//             <div className="py-2 d-flex align-items-center justify-content-center">
//               <Link to="/details" className="btn">
//                 {item.name}
//               </Link>
//             </div>
//             <div className="py-2 d-flex align-items-center justify-content-center">
//               {item.date}
//             </div>
//             <div className="py-2 d-flex align-items-center justify-content-center">
//               {item.stateWritten}
//             </div>
//             <div className="py-2">
//               <button type="button" className="btn btn--view">
//                 عرض
//               </button>
//             </div>

// //             <div className="py-2">
// //               <button type="button" className="btn btn--edit">
// //                 تعديل
// //               </button>
// //             </div>
// //             <div className="py-2">
// //               <button type="button" className="btn btn-danger btn--delete">
// //                 حذف
// //               </button>
// //             </div>
// //           </li>)}
//         );
//       }
//     });
//     async () => {
//       let data = await axios.get(
//         `http://afdinc-001-site5.itempurl.com/api/Waqf`
//       );
//       console.log(data);
//     };
//     return (
//       <div className="DashBoard container">
//         <ul className="list-group p-0">{items}</ul>
//         {console.log(this.hello)}
//       </div>
//     );
//   }
// }

import React, { useEffect } from "react";
import axios from "axios";
export default function DashBoard() {
  async function hello() {
    let { data } = await axios.get(
      `http://afdinc-001-site5.itempurl.com/api/Waqf`
    );
    console.log(data);
  }
  useEffect(() => {
    hello();
  }, []);
  return (
    <>
      <h1>hello</h1>
    </>
  );
}
