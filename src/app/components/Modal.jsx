import React, { useEffect, useState } from "react";
import axios from "axios";

// Komponen Radio
const PerjanjianContent = ({ jsonContent, closeModal }) => (
  <div>
    <h2>Perjanjian Content</h2>
    <h2 className="text-center ">
      {jsonContent.json.description && jsonContent.json.description}
    </h2>
    <button onClick={closeModal}>Submit</button>
  </div>
);

// Komponen Upload
const PersyaratanContent = ({ jsonContent, closeModal }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];

    // Pastikan file yang diunggah adalah file gambar
    if (imageFile && imageFile.type.startsWith("image/")) {
      setSelectedImage(imageFile);
    } else {
      // Tampilkan pesan kesalahan jika file yang diunggah bukan gambar
      alert("Please upload a valid image file (JPEG or PNG).");
    }
  };

  const handleUpload = () => {
    // Lakukan logika upload di sini, Anda dapat menggunakan FormData
    // atau metode upload sesuai kebutuhan aplikasi Anda
    if (selectedImage) {
      console.log("Selected Image:", selectedImage);
      // Tambahkan logika upload gambar di sini
      // Contoh: Kirim gambar ke server menggunakan Axios atau API lainnya
    } else {
      console.log("No image selected");
    }
  };

  return (
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
        <div className="flex flex-col items-center px-5">
          <h1 className="font-bold text-center">
            {jsonContent.json.find((item) => item.id === 24).description &&
              jsonContent.json.find((item) => item.id === 24).description}
          </h1>
          <h1 className="text-xs text-center mt-2">
            {jsonContent.json.find((item) => item.id === 25).description &&
              jsonContent.json.find((item) => item.id === 25).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="imageInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  selectedImage
                    ? URL.createObjectURL(selectedImage)
                    : "https://via.placeholder.com/150"
                }
                alt="Selected Image"
                className="w-32 h-32 object-cover rounded-full cursor-pointer hidden"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#000"
                  d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
                />
              </svg>
              <h1>Upload</h1>
            </label>
            <input
              id="imageInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1>
              {selectedImage
                ? selectedImage.name
                : "Belum ada file yang dipilih"}
            </h1>
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
    </div>
  );
};

// Komponen Upload
const BpkbContent = ({ jsonContent, closeModal }) => (
  <div>
    <h2>BPKB Content</h2>
    <h2 className="text-center ">
      {jsonContent.json.find((item) => item.id === 23).description &&
        jsonContent.json.find((item) => item.id === 23).description}
    </h2>

    <button onClick={closeModal}>Submit</button>
  </div>
);

const Modal = ({ isOpen, closeModal, serviceId }) => {
  const [serviceData, setServiceData] = useState(null);
  const [jsonContent, setJsonContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await axios.get(
          `https://wiremock.solusione.id/wiremock/test/services/MBFIN202111080000016`
        );

        const services = response.data.data.services;
        console.log(`Data services: `, services);
        const selectedService =
          services && services.find((service) => service.id === serviceId);

        if (selectedService) {
          // Jika service ditemukan, panggil data dari services_json
          const servicesJson = response.data.data.services_json;
          console.log(response.data.data.services_json);
          console.log(`Data Json: `, servicesJson);
          console.log("ini services id: ", serviceId);
          const selectedJson = servicesJson.find(
            (json) => json.service_id.id === serviceId
          );
          console.log(selectedJson);
          if (selectedJson) {
            setServiceData(selectedService);
            setJsonContent(selectedJson);
            setLoading(false);
          }
        }
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    if (serviceId) {
      fetchServiceData();
    }
  }, [serviceId]);

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>; // Display a loading indicator while data is being fetched
    }

    if (jsonContent && jsonContent.service_id) {
      switch (jsonContent.service_id.id) {
        case 1:
          return (
            <PersyaratanContent
              jsonContent={jsonContent}
              closeModal={closeModal}
            />
          );
        case 2:
          return (
            <PerjanjianContent
              jsonContent={jsonContent}
              closeModal={closeModal}
            />
          );
        case 3:
          return (
            <BpkbContent jsonContent={jsonContent} closeModal={closeModal} />
          );
        default:
          return null;
      }
    } else {
      // Handle loading state or other conditions
      return <p>Loading...</p>;
    }
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      {serviceData && jsonContent ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto ">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="h-auto bg-blue-200 p-6 top-1/2 rounded-lg z-50 mx-2">
            <span
              className="flex justify-end items-center text-xl cursor-pointer z-50"
              onClick={closeModal}
            >
              &times;
            </span>
            <div className="flex flex-col justify-center">
              {renderContent()}
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Modal;
export { PersyaratanContent, PerjanjianContent, BpkbContent };
