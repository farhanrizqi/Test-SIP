import React, { useEffect, useState } from "react";
import axios from "axios";

const ModalPersyaratan = ({ isOpen, closeModal, serviceId }) => {
  const [serviceData, setServiceData] = useState(null);
  const [jsonContent, setJsonContent] = useState(null);

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

          if (selectedJson) {
            setServiceData(selectedService);
            setJsonContent(selectedJson);
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

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      {serviceData && jsonContent ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto ">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 top-1/2 h-1/2 rounded-lg z-50">
            <span
              className="flex justify-end items-center text-xl cursor-pointer z-50"
              onClick={closeModal}
            >
              &times;
            </span>
            <div>
              <h1 className="text-center font-bold">
                {serviceData.service_name}
              </h1>
              <h2 className="text-center ">
                {jsonContent.json.find((item) => item.id === 23)?.description}
              </h2>

              <h2 className="text-sm font-bold text-red-500">
                * Mandatory (harus, diisi)
              </h2>
            </div>
            <div className="bg-gray-100 p-5 rounded-xl">
              {/* Render konten modal sesuai dengan data yang diambil dari services_json */}
              <div key={jsonContent.id}>
                <h1 className="text-center text-sm font-bold">
                  {jsonContent.service_id.service_name}
                </h1>
                <h1 className="text-center text-sm">
                  {jsonContent.json.description}
                </h1>
                {/* Sesuaikan dengan properti yang ada di data layanan Anda */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ModalPersyaratan;
