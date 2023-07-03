import React, { useEffect, useState } from 'react'
import "./AddWaqf.css";
import { Form, Formik } from "formik";
import axios from "axios";
import FormikControl from '../FormikControl';

export default function AddWaqf() {
  const [countries, setCountries] = useState([])
  const [idCountry, setidCountry] = useState('')
  async function getApi() {
    let { data } = await axios.get(`http://afdinc-001-site5.itempurl.com/api/Country`)
    setCountries(data);
    // console.log(data)
  }
  function printValue(event){
    setidCountry(event.target.value)
  }
  useEffect(() => {
    getApi()
  }, [])
  async function apiReq(values) {

    // setloading(true);
    let { data } = await axios.post(`http://afdinc-001-site5.itempurl.com/api/Waqf`, values)
      .catch((err) => {
      });
      console.log(data)
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
      WaqfCountryId: 1,
      WaqfCityId: 1,
      WaqfTypeId: 1,
      WaqfActivityId: 1,
      WaqfImage: null,
      WaqfDocument: null,
      AdminNotes: "",
      InsUserId: 1 //r
  };
  const onSubmit = (values) => {
    console.log("Form data", values);
    apiReq(values)
    // console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };
  // let formik = useFormik({
  //   initialValues: {
  //     WaqfName: "",
  //     FounderName: "",
  //     DocumentNumber: 1,
  //     EstablishmentDate: "03-02-2000",
  //     EstablishmentDateH: "01-01-1444",
  //     WaqfDescription: "",
  //     WaqfCountryId: idCountry,
  //     WaqfCityId: undefined,
  //     WaqfTypeId: 1,
  //     WaqfActivityId: 1,
  //     WaqfImage: null,
  //     WaqfDocument: null,
  //     AdminNotes: "",
  //     InsUserId: 1
  //   },
  //   onSubmit: apiReq,
  // });
  return (<>
    <Formik
      initialValues={initialValues}
      onSubmit={apiReq}
    >
      {(formik) => (
        <Form>
          
          <FormikControl
            control="input"
            type="text"
            label="اسم الواقف"
            name="FounderName"
            className="form-control"
          />
          <FormikControl
            control="input"
            type="text"
            label="اسم الوقف"
            name="WaqfName"
            className="form-control"
          />
          <FormikControl
            control="input"
            type="date"
            label='تاريخ الوقف'
            name="EstablishmentDate"
            className="form-control"
          />
          {/* <FormikControl
            control="input"
            type="file"
            label='تاريخ الوقف'
            name="WaqfDocument"
            className="form-control"
          />
          <FormikControl
            control="input"
            type="file"
            label='تاريخ الوقف'
            name="WaqfImage"
            className="form-control"
          />
          <FormikControl
            control="textarea"
            label="وصف الوقف"
            name="WaqfDescription"
          /> */}
          {/* <FormikControl
            control="select"
            label="Select a topic"
            name="anything"
            options={dropdownOptions}
          /> */}
          {/* <FormikControl
            control="radio"
            label="Radio topic"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="Checkbox topics"
            name="checkboxOption"
            options={checkboxOptions}
          /> */}
          <FormikControl control="date" label="Pick a date" name="birthDate" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </>
  );
}
