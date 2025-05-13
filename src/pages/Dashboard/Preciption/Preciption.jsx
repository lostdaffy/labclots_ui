import React, { useEffect } from "react";
import "./Preciption.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import labIcon from "../../../assets/icon.png";
import { useParams } from "react-router-dom";
import useAuthStore from "../../../store/authStore";

const Preciption = () => {
  const { id } = useParams();
  const { user, data, result, fetchPatient } = useAuthStore();

  useEffect(() => {
    if (id) fetchPatient(id);
  }, [id]);

  const downloadPDF = () => {
    const input = document.getElementById("pdfDownload");
    if (!input) return;

    html2canvas(input, {
      scale: 3,
      allowTaint: false,
      logging: false,
    }).then((canvas) => {
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
      <div className="presc-download-btn">
        <i
          className="ri-file-download-line"
          onClick={downloadPDF}
          title="Download PDF"
        ></i>
      </div>

      <div className="presc-a4-page" id="pdfDownload">
        <div className="presc-header-top">
          <div className="presc-lab-logo">
            <img src={labIcon} alt="Lab Logo" />
          </div>
          <div className="presc-header">
            <h1>{user?.labName}</h1>
            <p>
              <i className="ri-map-pin-fill"></i> J.V Jain College Road,
              Saharanpur (U.P) 247001
            </p>
            <p>
              <i className="ri-phone-fill"></i> +91 8273998875 &nbsp;|&nbsp;
              <i className="ri-mail-fill"></i> satyaasingh001@gmail.com
            </p>
          </div>
        </div>

        <div className="presc-mini-banner">LABORATORY REPORT</div>

        <div className="presc-patient-info">
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Patient Name:</strong> {data?.patientName}
                </td>
                <td>
                  <strong>Patient ID:</strong> {data?.patientId}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Age / Sex:</strong> {data?.patientAge} yrs /
                  {data?.patientGender}
                </td>
                <td>
                  <strong>Consultant:</strong> {data?.consultant}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Contact No.:</strong> +91 {data?.patientMobile}
                </td>
                <td>
                  <strong>Report Date / Time: </strong>
                  {data?.createdAt &&
                    new Date(data.createdAt).toLocaleString()}
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <strong>Address:</strong> {data?.patientAddress}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="presc-rs-table">
          <h5>{data?.test}</h5>
          <table>
            <thead>
              <tr>
                <th>Test Name</th>
                <th>Results</th>
                <th>Reference Range</th>
                <th>Units</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(result) &&
                result.map((item) => (
                  <tr key={item?._id}>
                    <td>{item?.name}</td>
                    <td>{item?.result}</td>
                    <td>{item?.range}</td>
                    <td>{item?.unit}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Preciption;
