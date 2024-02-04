import React from "react";
import jsPDF from "jspdf";

const ImageToPDF = ({ images }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    images.forEach((image, index) => {
      if (index > 0) {
        doc.addPage();
      }
      doc.addImage(image, "JPEG", 10, 10, 180, 160);
    });

    doc.save("download.pdf");
  };

  return (
    <div>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default ImageToPDF;
