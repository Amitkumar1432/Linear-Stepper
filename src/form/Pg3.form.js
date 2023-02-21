import React, { useContext } from "react";
import FormContext from "../formContext/form.context";

export const Pg3 = () => {
  const {
    company_address,
    setcompany_address,
    company_contact,
    setcompany_contact,
} = useContext(FormContext);

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
        company_address
        </label>
        <input
          type="text"
          value={company_address}
          onChange={(e) => {
            setcompany_address(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
        company_contact
        </label>
        <input
          type="text"
          value={company_contact}
          onChange={(e) => {
            setcompany_contact(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
  );
};
