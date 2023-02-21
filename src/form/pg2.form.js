import React, { useContext } from "react";
import FormContext from "../formContext/form.context";

export const Pg2 = () => {
  const { mobile_no, setmobile_no, company_name, setcompany_name } = useContext(
    FormContext
  );

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          mobile_no
        </label>
        <input
          value={mobile_no}
          onChange={(e) => {
            setmobile_no(e.target.value);
          }}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          company_name
        </label>
        <input
          value={company_name}
          onChange={(e) => {
            setcompany_name(e.target.value);
          }}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
  );
};
