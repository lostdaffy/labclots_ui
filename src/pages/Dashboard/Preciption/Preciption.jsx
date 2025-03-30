import React from "react";
import "./Preciption.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Preciption = () => {
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
    <div className="a4-page" id="pdfDownload">
      <div className="header">
        <h1>Pathology Lab</h1>
        <p>123 Health Street, Medical City, Country</p>
        <p>Phone: (123) 456-7890 | Email: info@pathlab.com</p>
        <h2>Complete Blood Count (CBC) Report</h2>
      </div>

      <div className="patient-info">
        <table>
          <tr>
            <td>
              <strong>Patient Name:</strong> John Doe
            </td>
            <td>
              <strong>Age:</strong> 35
            </td>
            <td>
              <strong>Gender:</strong> Male
            </td>
          </tr>
          <tr>
            <td>
              <strong>Patient ID:</strong> PL123456
            </td>
            <td>
              <strong>Date:</strong> March 30, 2025
            </td>
            <td>
              <strong>Ref. Doctor:</strong> Dr. Jane Smith
            </td>
          </tr>
        </table>
      </div>

      <table className="results-table">
        <thead>
          <tr>
            <th>Test</th>
            <th>Result</th>
            <th>Unit</th>
            <th>Reference Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hemoglobin (Hb)</td>
            <td>14.5</td>
            <td>g/dL</td>
            <td>13.0 - 17.0</td>
          </tr>
          <tr>
            <td>Red Blood Cells (RBC)</td>
            <td>5.2</td>
            <td>million/µL</td>
            <td>4.5 - 5.9</td>
          </tr>
          <tr>
            <td>White Blood Cells (WBC)</td>
            <td>7.8</td>
            <td>thousand/µL</td>
            <td>4.0 - 11.0</td>
          </tr>
          <tr>
            <td>Platelets</td>
            <td>250</td>
            <td>thousand/µL</td>
            <td>150 - 450</td>
          </tr>
          <tr>
            <td>Hematocrit (HCT)</td>
            <td>45</td>
            <td>%</td>
            <td>38 - 50</td>
          </tr>
        </tbody>
      </table>

      <button onClick={downloadPDF}>Download</button>
    </div>
  );
};

export default Preciption;
