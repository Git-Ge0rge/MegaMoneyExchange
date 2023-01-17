import React from 'react';
import "./BeneficiaryForm.css";
import {useState} from "react";

function BenefiecaryForm(props) {
    const [fullName, setFullName] = useState("");
    const [senderWhatsApp, setSenderWhatsApp] = useState("");
    const [beneficiaryPhoneNo, setBeneficiaryPhoneNo] = useState("");
    const [relation, setRelation] = useState("");
    const [accountNo, setAccountNo] = useState("");
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            />
            
          <label> Sender's WhatsApp #</label>
            <input
            type="number"
            required
            value={senderWhatsApp}
            onChange={(e) => setSenderWhatsApp(e.target.value)}
            />
          
          <label> Beneficiary's Phone #</label>
            <input
            type="number"
            required
            value={beneficiaryPhoneNo}
            onChange={(e) => setBeneficiaryPhoneNo(e.target.value)}
            />

          <label> Relationship </label>
            <input
            type="text"
            required
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
            />

          <label> Account # </label>
            <input
            type="text"
            required
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
            />

          <label> Branch Address</label>
            <input
            type="text"
            required
            value={branchAddress}
            onChange={(e) => setBranchAddress(e.target.value)}
            />

          <label> Beneficiary Address</label>
            <input
            type="text"
            required
            value={beneficiaryAddress}
            onChange={(e) => setBeneficiaryAddress(e.target.value)}
            />

          <label> Additional Comments</label>
            <input
            type="text"
            required
            value={additionalComments.toUpperCase()}
            onChange={(e) => setAdditionalComments(e.target.value)}
            />
        </form>
    </div>
  )
}

export default BenefiecaryForm