import React, { useContext } from "react";
import FormContext from "../formContext/form.context";

export const Pg1 = () => {
  const {
    first_name,
    setfirst_name,
    last_name,
    setlast_name,
    address,
    setaddress,
  } = useContext(FormContext);

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          first_name
        </label>
        <input
          type="text"
          value={first_name}
          onChange={(e) => {
            setfirst_name(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          last_name
        </label>
        <input
          type="text"
          value={last_name}
          onChange={(e) => {
            setlast_name(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div>
        <label htmlFor="exampleInputEmail1" className="form-label">
          address
        </label>
        <div></div>
        <input
          type="text"
          value={address}
          onChange={(e) => {
            setaddress(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
        {/* const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target.first_name.value);
  console.log((e.target.first_name.value)); */}
        {/* // whatever you typed into the input */}
        {/* }         */}
      </div>
    </form>
  );
};
