import React, { useEffect, useState } from "react";
import "./PaymentReceipt.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
      <div className="payment-receipt" id="pdfDownload">
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
                <strong>Age/Gender:</strong> {data.patientAge}yr. /{" "}
                {data.patientGender}
              </td>
              <td>
                <strong>Date:</strong>{" "}
                {new Date(data.createdAt).toLocaleString()}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Consultant:</strong> {data.consultant}
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

          <div class="payment-footer">
            Thank you for choosing Pathology Lab. Stay healthy!
          </div>
        </div>
      </div>

      <div>
        <button onClick={downloadPDF}>Print Receipt</button>
      </div>
    </>
  );
};

export default PaymentReceipt;
