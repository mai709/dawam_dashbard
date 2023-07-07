import React, { useEffect, useState } from 'react'
import "./AddWaqf.css";
import { Form, Formik } from "formik";
import axios from "axios";
import FormikControl from '../FormikControl';

export default function AddWaqf() {
  const [countries, setCountries] = useState([])
    const [cities, setCities] = useState(['اختر مدينة'])
      const [cityId, setcityId] = useState('')

  const [idCountry, setidCountry] = useState(500)
  async function getApi() {
    let { data } = await axios.get(`http://afdinc-001-site5.itempurl.com/api/Country`)
    setCountries(data);
  }
  async function getApiCityies(id) {
    let { data } = await axios.get(`http://afdinc-001-site5.itempurl.com/api/City/${id}`)
    setCities(data);
  }
function changeValue(value){
    setidCountry(value)

  }
  // useEffect(()=>{
  //   console.log('hello')
  // },[idCountry])
  function printValue(event){
    setidCountry(event.target.value)
    console.log(event.target.value)
    
  }
  function changeCity(event){
    setcityId(event.target.value)
  }
  useEffect(() => {
    getApi()
  }, [])
  useEffect(() => {
    getApiCityies(idCountry)
  }, [idCountry])
  async function apiReq(values) {

    // setloading(true);getApiCityies
    let { data } = await axios.post(`http://afdinc-001-site5.itempurl.com/api/Waqf`, values)
      .catch((err) => {
      });
      console.log(values)
    if (data.status === 200) {
      console.log('وصلت')
    }
  }
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const initialValues = {
      WaqfName: "", //r
      FounderName: "", // 
      DocumentNumber: 1, //
      EstablishmentDate: "03-02-2000",
      EstablishmentDateH: "01-01-1444",
      WaqfDescription: "",
      WaqfCountryId: idCountry,
      WaqfCityId: cityId,
      WaqfTypeId: 1,
      WaqfActivityId: 1,
      WaqfImage: null,
      WaqfDocument: null,
      AdminNotes: "",
      InsUserId: 1 //r
  };
  const WaqfType =[
    {name:'أهلي' , id:1},
    {name:'خيري' , id:2},
  ];
  const WaqfActivity =[
    {name:'مسجد' , id:1},
    {name:'مستشفى' , id:2},
    {name:'عمارة' , id:3},
    {name:'منزل طلبة' , id:4},
    {name:'مدرسة' , id:5},
    {name:'جامعة' , id:6},
  ]
  const onSubmit = (values) => {
    console.log("Form data", values);
    apiReq(values)
    // console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };
  return (<>
    <Formik
      initialValues={initialValues}
      onSubmit={apiReq}
      onChange={changeValue}
    >
      {(formik) => (
        
        <Form className='my-5 container'>
          <div className='d-flex'>
            <div className='w-50 ms-3'>
              <FormikControl
              control="input"
              type="text"
              label="اسم الواقف"
              name="FounderName"
              className="form-control my-2"
              placeholder='ادخل اسم الواقف'
            />
            </div>
            <div className='w-50'>
              <FormikControl
                control="input"
                type="text"
                label="اسم الوقف"
                name="WaqfName"
                className="form-control my-2"
                placeholder='ادخل اسم الوقف'
              />
            </div>
          </div>
          <FormikControl
            control="input"
            type="date"
            label='تاريخ الوقف'
            name="EstablishmentDate"
            className="form-control my-2"
          />
          <div className='d-flex'>
            <div className='w-50 ms-3'>
              <FormikControl
                control="select"
                label="دولة الوقف"
                name="WaqfTypeId"
                className='form-control my-2'
                options={WaqfType}
              />
            </div>
            <div className='w-50'>
              <FormikControl
                control="select"
                label="مدينة الوقف"
                name="WaqfActivityId"
                className='form-control my-2'
                options={WaqfActivity}
              />
            </div>
          </div>
          {/* الدولة والمدينة */}
          <div className='d-flex'>
            <div className='w-50 ms-3'>
              <FormikControl
                control="select"
                label="دولة الوقف"
                name="WaqfCountryId"
                className='form-control my-2'
                options={countries}
                onChange={formik.handleChange}
                onClick={printValue}
              />
            </div>
            <div className='w-50'>
              <FormikControl
                control="select"
                label="دولة الوقف"
                name="WaqfCityId"
                className='form-control my-2'
                                onChange={formik.handleChange}

                onClick={changeCity}
                options={cities}
              />
            </div>
          </div>
          <div className=''>
              <FormikControl
                control="textarea"
                type="text"
                label="وصف الوقف"
                name="WaqfDescription"
                className="form-control my-2"
                placeholder='صف الوقف'
              />
            </div>
            <div className=''>
              <FormikControl
                control="textarea"
                type="text"
                label="ملاحظات"
                name="WaqfDescription"
                className="form-control my-2"
                placeholder='اكتب ملاحظات عن الوقف'

              />
            </div>
          <div className='d-flex'>
            <div className='w-50 ms-3'>
              <label htmlFor="WaqfDocument" className="form-label">مستند للوقف</label>
              <input className="form-control my-2" name='WaqfDocument' type="file" id="WaqfDocument" onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
            </div>
            <div className='w-50'>
              <label htmlFor="WaqfImage" className="form-label">صورة الوقف</label>
              <input className="form-control my-2" name='WaqfImage' type="file" id="WaqfImage" onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
            </div>
          </div>
          <FormikControl control="date" label="Pick a date" name="birthDate" />
          <div className='text-start'>
            <button type="submit" className='btn btn-success btn-lg px-5 py-2 fs-3 my-3'>حفظ</button>
          </div>
        </Form>
      )}
    </Formik>
  </>
  );
}
