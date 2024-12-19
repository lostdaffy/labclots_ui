import React, { useEffect, useState } from "react";
import "./PaymentReceipt.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const PaymentReceipt = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/users/payment-receipt/${id}`
        );
        setData(response.data.patient);
      } catch (error) {
        throw error;
      }
    };

    fetchData(id);
  }, []);


  const receipt = () => {
    window.print();
  };

  return (
    <div className="payment-receipt">
      <div class="receipt-container">
        <div class="receipt-title">TEST RECEIPT</div>

        <table class="info-table">
          <tr>
            <td>
              <strong>Patient Name:</strong> {data.patientName}
            </td>
            <td>
              <strong>Bill No.:</strong> 
            </td>
          </tr>
          <tr>
            <td>
              <strong>Age/Gender:</strong> {data.patientAge}yr. / {data.patientGender}
            </td>
            <td>
              <strong>Date:</strong> 
            </td>
          </tr>
          <tr>
            <td>
              <strong>Referred by:</strong> {data.referBy}
            </td>
            <td>
              <strong>Patient ID:</strong> {data.patientId}
            </td>
          </tr>
        </table>

        <table class="charges-table">
          <tr>
            <td>Amount</td>
            <td>{data.amount}</td>
          </tr>
          <tr>
            <td>Discount (%)</td>
            <td>{data.discount}%</td>
          </tr>
          <tr>
            <td>
              <strong>Total Amount</strong>
            </td>
            <td>
              <strong>{data.totalAmount}</strong>
            </td>
          </tr>
        </table>

        <button onClick={receipt}>Print Receipt</button>

        <div class="footer">
          Thank you for choosing Pathology Lab. Stay healthy!
        </div>
      </div>
    </div>
  );
};

export default PaymentReceipt;
