import React from 'react';
import "./BeneficiaryForm.css";
import {useState} from "react";

function BenefiecaryForm(props) {
    const [fullName, setFullName] = useState("");
    const [senderWhatsApp, setSenderWhatsApp] = useState("");
    const [beneficiaryPhoneNo, setBeneficiaryPhoneNo] = useState("");
    const [relation, setRelation] = useState("");
    const [AccountNo, setAccountNo] = useState("");
    const [branchAddress, setBranchAddress] = useState("");
    const [beneficiaryAddress, setBeneficiaryAddress] = useState("");
    const [additionalComments, setAdditionalComments] = useState("");

  return (
    <div className='beneficiary-form'>
     <h2>Beneficiary Form</h2>
        <form>
            <label>Full Name:</label>
            <input
          type="text"
          required
          value={fullName.toUpperCase()}
          onChange={(e) => setFullName(e.target.value)}
        />

        </form>








    </div>
  )
}

export default BenefiecaryForm