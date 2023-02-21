import "./App.css";
import React, {useState,useContext } from "react";
import { Pg1 } from "./form/pg1.form";
import { Pg2 } from "./form/pg2.form";
import { Pg3 } from "./form/Pg3.form";
import axios from "axios";
import FormContext from "./formContext/form.context";


function App() {
  const [pgNo, setPgNo] = useState(1);

  const {
    first_name,
    last_name,
    address,
    mobile_no,
    company_name,
    company_address,
    company_contact,
  } = useContext(FormContext);

  // useEffect(()=>{
  //   let json ={};
  //   let pg = pgNo-1;
  //   if(pgNo==1){
  //     pg = 3;
  //   }
  //   if(pg==1){
  //     json["first_name"] = first_name;
  //     json["last_name"] = last_name;
  //     json["address"] = address;
  //   }
  //   if(pg==2){
  //     json["mobile_no"] = mobile_no;
  //     json["company_name"] = company_name;
  //   }
  //   if(pg==3){
  //     json["company_address"] = company_address;
  //     json["company_contact"] = company_contact;
  //   }

  //   let config = {
  //     url:"",
  //     data:json,
  //     method:"post"
  //   }

  //   axios(config).then((response)=>{
  //     console.log(response.data);
  //   })
  // },[pgNo])

  const submitEachStep=(pg)=>{
    let json ={};
    if(pg==1){
      json["first_name"] = first_name;
      json["last_name"] = last_name;
      json["address"] = address;
    }
    if(pg==2){
      json["mobile_no"] = mobile_no;
      json["company_name"] = company_name;
    }
    if(pg==3){
      json["company_address"] = company_address;
      json["company_contact"] = company_contact;
    }

    let config = {
      url:"http://192.168.29.12:5000/api/addEdit",
      data:json,
      method:"post",
    }

    axios(config).then((response)=>{
      console.log(response.data);
    })
  }
  return (
    <div className="container">
      <center className="mt-4">
        <h3 className="stepper">Multi stepper</h3>
      </center>
      <div>
        <p> Page {pgNo} / 3</p>
        {pgNo == 1 ? <Pg1 /> : pgNo == 2 ?  <Pg2 /> : <Pg3 />}
        <center>
          {pgNo > 1 && (
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => {
                let pg = pgNo;
                setPgNo(pg - 1);
              }}
            >
              Back
            </button>
          )}
          {pgNo < 3 && (
            <button 
              className="btn btn-primary mx-3"
              type="button"
              onClick={() => {
                let pg = pgNo;
                submitEachStep(pgNo);
                setPgNo(pg + 1);
              }}
            >
            Next
            </button>
          )}
            {pgNo > 2 && (
            <button 
              className="btn btn-primary mx-4"
              type="button"
              onClick={() => {
                let pg = pgNo;
                submitEachStep(pgNo);
                setPgNo(pg - 2);
              }}
            >
            submit
            </button>
           )}
        </center>
      </div>
    </div>
  );
}

export default App;
