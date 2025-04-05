import React, { useEffect, useState } from "react";
import "./PaymentReceipt.css";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import useAuthStore from "../../../store/authStore";

const PaymentReceipt = () => {
  const { id } = useParams();
  const { data, fetchPatient, isLoading, error } = useAuthStore();
  const { user, isAuthenticated } = useAuthStore();


  useEffect(() => {
    fetchPatient(id);
  }, []);

  const downloadPDF = () => {
    const input = document.getElementById("pdfDownload");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`name.pdf`);
    });
  };

  return (
    <>
      <div className="receipt" id="pdfDownload">
        <div className="payment-receipt">
          <div class="receipt-header">
            <h2>{user?.labName}</h2>
            <p>
              003, Yashodan Bldg.II, Four Bungalows Andheri (W), Mumbai - 400053
            </p>
            <p>Tel: 26365852, 66997034, 9821017047</p>
          </div>
          <hr />
          <div class="receipt-info">
            <div>
              <p>
                <strong>Name:</strong> {data?.patientName}
              </p>
              <p>
                <strong>Patient ID:</strong> {data?.patientId}
              </p>
            </div>
            <div>
              <p>
                <strong>Gender / Age:</strong> {data?.patientAge}yr. /
                {data?.patientGender}
              </p>
              <p>
                <strong>Registration Date:</strong>
                {new Date(data?.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <hr />
          <table class="table">
            <tr>
              <th>Sr.</th>
              <th>Service Name</th>
              <th>Charge (Rs.)</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Haemoglobin</td>
              <td>{data?.totalAmount}</td>
            </tr>
          </table>
          <div class="amount-info">
            <p>Total Amount: Rs. {data?.totalAmount}</p>
          </div>
        </div>
      </div>
      <div className="down-btn">
        <button onClick={downloadPDF}>
          <i class="ri-download-2-line"></i> Download
        </button>
      </div>
    </>
  );
};

export default PaymentReceipt;
