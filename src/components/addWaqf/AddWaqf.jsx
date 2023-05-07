import React, { useState } from 'react';
import "./AddWaqf.css";
import { useFormik } from "formik";
import axios from "axios";

export default function AddWaqf() {
  // const [apiError, setapiError] = useState("");
  // const [loading, setloading] = useState(false);
  async function apiReq(values) {
    
    // setloading(true);
    let { data } = await axios.post(`http://afdinc-001-site5.itempurl.com/api/Waqf`, values)
      .catch((err) => {
        console.log(err)
        // setapiError(err.response.data.message);
        // setapiError();
        // ` ${err.response.data.errors.param} : ${err.response.data.errors.msg}`
        // setloading(false);
        // console.log(err)
      });
    if (data.status === 200) {
      // setloading(false);
      console.log('وصلت')
      
    }
    console.log(data)
  }
  let formik = useFormik({
    initialValues: {
      WaqfName: "",
      FounderName: "",
      DocumentNumber: 1,
      EstablishmentDate: "03-02-2000",
      EstablishmentDateH: "01-01-1444",
      WaqfDescription: "ksalsm",
      WaqfCountryId: 1,
      WaqfCityId: 1,
      WaqfTypeId:1,
      WaqfActivityId: 1,
      WaqfImage: null,
      WaqfDocument: null,
      AdminNotes: "",
      InsUserId: 1
    },
    onSubmit: apiReq,
  });
  return (<>
    <form onSubmit={formik.handleSubmit}>
      <div className="container">
        <p className="h1 text-center">بيانات حول الوقف</p>
        <div className="d-md-flex data-waqaf">
          <div className="form-floating my-3 ms-3 w-50">
            <input
            value={formik.values.FounderName} onChange={formik.handleChange} onBlur={formik.handleBlur}
              type="name"
              className="form-control"
              id="FounderName"

            />
            <label htmlFor="FounderName">اسم الواقف</label>
          </div>
          <div className="form-floating my-3 me-3 w-50">
            <input
              value={formik.values.WaqfName} onChange={formik.handleChange} onBlur={formik.handleBlur}
              type="name"
              className="form-control"
              id="WaqfName"
            />
            <label htmlFor="WaqfName">اسم الوقف</label>
          </div>
        </div>
        <div className="d-flex">
          <select
            className="form-select my-3 ms-3"
            aria-label="Default select example"
          >
            <option selected value={formik.values.WaqfTypeId}>نوع الوقف</option>
            <option value="1">خيري</option>
            <option value="2">أهلي</option>
          </select>
          <select
            className="form-select my-3 me-3"
            aria-label="Default select example"
          >
            <option selected value={formik.values.WaqfActivityId}>نشاط الوقف</option>
            <option value="1">مسجد/جامع</option>
            <option value="2">مستشفى</option>
            <option value="3">مدرسة</option>
            <option value="4">أرض زراعية</option>
            <option value="5">غير ذلك</option>
          </select>
        </div>
        <div className="input-group my-3">
          <span className="input-group-text">وصف الوقف</span>
          <textarea className="form-control" aria-label="With textarea"
          value={formik.values.WaqfDescription} onChange={formik.handleChange} onBlur={formik.handleBlur}
          id='waqfDescription'
          ></textarea>
        </div>
        {/* <div className="input-group my-3">
          <span className="input-group-text">ريــع الوقف</span>
          <textarea className="form-control" aria-label="With textarea"
          
          ></textarea>
        </div> */}
        <div className="mb-3">
          <label htmlFor="formFileMultiple" class="form-label">
            ملحقات الوقف
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            multiple
            value={formik.values.WaqfImage}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="submit"
            className="btn btn-success btn-lg px-5 py-2 fs-3 my-3"
          >
            حــفــظ
          </button>
        </div>
      </div>
    </form>
    </>
  );
}
