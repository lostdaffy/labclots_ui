import React, { useEffect } from "react";
import "./PaymentReceipt.css";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import useAuthStore from "../../../store/authStore";

const PaymentReceipt = () => {
  const { id } = useParams();
  const { data, fetchPatient, isLoading, error } = useAuthStore();
  const { user } = useAuthStore();

  useEffect(() => {
    if (id) {
      fetchPatient(id);
    }
  }, [id, fetchPatient]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const downloadPDF = () => {
    const input = document.getElementById("pdfDownload");
    if (!input) return;

    html2canvas(input, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
        precision: 16,
      });
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`${data?.patientName || "report"}.pdf`);
    });
  };

  return (
    <>
      <div className="receipt-download-btn">
        <i
          className="ri-file-download-line"
          onClick={downloadPDF}
          title="Download PDF"
        ></i>
      </div>

      <div className="receipt-page" id="pdfDownload">
        <div className="receipt-container">
          <div className="receipt-header">
            <h2>{user?.labName || "Lab Name"}</h2>
            <p>003, Yashodan Bldg.II, Four Bungalows Andheri (W), Mumbai - 400053</p>
            <p>Tel: 26365852, 66997034, 9821017047</p>
          </div>
          <div className="receipt-info-section">
            <div>
              <p><strong>Name:</strong> {data?.patientName || "N/A"}</p>
              <p><strong>Patient ID:</strong> {data?.patientId || "N/A"}</p>
            </div>
            <div>
              <p><strong>Gender / Age:</strong> {data?.patientGender || "N/A"} / {data?.patientAge || "N/A"} yr.</p>
              <p><strong>Registration Date: </strong>{data?.createdAt ? new Date(data.createdAt).toLocaleString() : "N/A"}</p>
            </div>
          </div>
          <table className="receipt-table">
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Service Name</th>
                <th>Charge (Rs.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{data?.test || "N/A"}</td>
                <td>{data?.totalAmount || "0"}</td>
              </tr>
            </tbody>
          </table>
          <div className="receipt-amount-info">
            <p><strong>Total Amount:</strong> Rs. {data?.totalAmount || "0"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentReceipt;
