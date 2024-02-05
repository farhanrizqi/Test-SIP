import React, { useState } from "react";

const PersyaratanContent = ({ jsonContent, closeModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Lakukan logika upload di sini, Anda dapat menggunakan FormData
    // atau metode upload sesuai kebutuhan aplikasi Anda
    if (selectedFile) {
      console.log("Selected File:", selectedFile);
      // Tambahkan logika upload dokumen di sini
      // Contoh: Kirim file ke server menggunakan Axios atau API lainnya
    } else {
      console.log("No file selected");
    }
  };
  <div className="flex flex-col justify-center p-5 gap-5">
    <div>
      <h2 className="text-center font-bold text-lg">
        {jsonContent.json.find((item) => item.id === 22).description &&
          jsonContent.json.find((item) => item.id === 22).description}
      </h2>
      <h2 className="text-center text-sm">
        {jsonContent.json.find((item) => item.id === 23).description &&
          jsonContent.json.find((item) => item.id === 23).description}
      </h2>
      <h2 className="text-center text-sm font-bold text-red-500">
        * Mandatory (harus, diisi)
      </h2>
    </div>
    <div className="flex flex-col justify-center bg-white rounded-xl py-5">
      <div>
        <h1 className="font-bold text-center">
          {jsonContent.json.find((item) => item.id === 24).description &&
            jsonContent.json.find((item) => item.id === 24).description}
        </h1>
        <div className="flex flex-col items-center mt-4">
          <input
            type="file"
            accept=".pdf, .doc, .docx" // Atur tipe dokumen yang diizinkan
            onChange={handleFileChange}
          />
          <button
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <button
        className="w-20% py-2 px-5 cursor-pointer rounded-lg bg-blue-500 text-white"
        onClick={closeModal}
      >
        Submit
      </button>
    </div>
  </div>;
};

export default PersyaratanContent;
