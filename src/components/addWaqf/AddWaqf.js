import React, { Component } from "react";
import "./AddWaqf.css";
export default class AddWaqf extends Component {
  render() {
    return (
      <div className="container">
        <p className="h1 text-center">بيانات حول الوقف</p>
        <div className="d-md-flex data-waqaf">
          <div class="form-floating my-3 ms-3 w-50">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">اسم الواقف</label>
          </div>
          <div class="form-floating my-3 me-3 w-50">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">اسم الوقف</label>
          </div>
        </div>
        <div className="d-flex">
          <select
            class="form-select my-3 ms-3"
            aria-label="Default select example"
          >
            <option selected>نوع الوقف</option>
            <option value="1">خيري</option>
            <option value="2">أهلي</option>
          </select>
          <select
            class="form-select my-3 me-3"
            aria-label="Default select example"
          >
            <option selected>نوع الوقف</option>
            <option value="1">مسجد/جامع</option>
            <option value="2">مستشفى</option>
            <option value="3">مدرسة</option>
            <option value="4">أرض زراعية</option>
            <option value="5">غير ذلك</option>
          </select>
        </div>
        <div class="input-group my-3">
          <span class="input-group-text">وصف الوقف</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <div class="input-group my-3">
          <span class="input-group-text">ريــع الوقف</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">
            ملحقات الوقف
          </label>
          <input
            class="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="submit"
            class="btn btn-success btn-lg px-5 py-2 fs-3 my-3"
          >
            حــفــظ
          </button>
        </div>
      </div>
    );
  }
}
