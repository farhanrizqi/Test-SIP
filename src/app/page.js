"use client";
import React, { useEffect, useState } from "react";
import Modal from "./components/Modal";
import PersyaratanContent from "./components/Modal";
import PerjanjianContent from "./components/Modal";
import BpkbContent from "./components/Modal";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://wiremock.solusione.id/wiremock/test/services/MBFIN202111080000016"
        );

        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const openModal = (serviceId) => {
    if (serviceId && !modalOpen) {
      setModalOpen(true);
      setSelectedService(serviceId);
    }
  };

  const closeModal = () => {
    setSelectedService(null);
    setModalOpen(false);
  };

  return (
    <main className="flex h-screen flex-col items-center py-24 px-5 md:px-80 md:pt-0 overflow-hidden">
      {/* Title */}
      <section className="flex flex-col w-full gap-3 px-2 ">
        <h1 className="text-xl text-center font-bold">
          List Pengerjaan Service
        </h1>
        <h2 className="text-xs font-light text-center">
          Silahkan selesaikan Pengerjaan Service ini, jika sudah selesai klik
          tombol "Order Selesai"
        </h2>
        <h2 className="text-sm font-bold text-center text-red-500">
          * Mandatory (harus dilengkapi)
        </h2>
      </section>

      {/* Options */}
      <section className="flex flex-col w-full h-full py-10 px-2 gap-4 md:px-44">
        {/* Persyaratan */}
        <div
          className="flex w-full h-full justify-between items-center  bg-white rounded-2xl p-5 cursor-pointer"
          onClick={() => openModal(1)}
        >
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 128 128"
            >
              <path
                fill="#90A4AE"
                d="M25.24 39.27H12.99c-1.63 0-2.95-1.32-2.95-2.95V29.1c0-1.63 1.32-2.95 2.95-2.95h12.25c1.63 0 2.95 1.32 2.95 2.95v7.22a2.962 2.962 0 0 1-2.95 2.95"
              />
              <path
                fill="#94D1E0"
                d="M16.28 40.52h-4v-10.4c0-1.1.9-2 2-2s2 .9 2 2z"
              />
              <path
                fill="#546E7A"
                d="M42.36 35.8h-5.51c-1.1 0-1.99-.89-1.99-1.99V28.3c0-1.1.53-1.58 1.99-1.99c1.46-.41 4.12-.46 5.51 0c1.14.38 1.99.89 1.99 1.99v5.51c0 1.1-.9 1.99-1.99 1.99"
              />
              <path fill="#212121" d="M4 58.9h120v60.14H4z" />
              <path
                fill="#B0BEC5"
                d="M4 117.68v2.73c0 1.98 1.61 3.59 3.59 3.59h112.83c1.98 0 3.59-1.61 3.59-3.59v-2.73z"
              />
              <path
                fill="#90A4AE"
                d="M43.34 40.55h-7.49c-2.44 0-4.42-1.98-4.42-4.42v-.65c0-2.44 1.98-4.42 4.42-4.42h7.49c2.44 0 4.42 1.98 4.42 4.42v.65a4.409 4.409 0 0 1-4.42 4.42"
              />
              <path
                fill="#B0BEC5"
                d="M121.73 34.16H8.05C5.81 34.16 4 35.97 4 38.21v21.72h120v-23.5c0-1.26-1.02-2.27-2.27-2.27"
              />
              <path
                fill="#78909C"
                d="M112.49 55.24H94.34a1.92 1.92 0 0 1-1.92-1.92V40.67c0-1.06.86-1.92 1.92-1.92h18.15c1.06 0 1.92.86 1.92 1.92v12.66c0 1.05-.85 1.91-1.92 1.91"
              />
              <path
                fill="#757575"
                d="M92.42 52.84V40.88c0-1.18.95-2.13 2.13-2.13h17.79c1 0 1.41.55 1.41.55L93.11 54.72s-.69-.42-.69-1.88"
              />
              <path fill="#212121" d="M96.44 41.76h13.95v10.47H96.44z" />
              <path
                fill="#616161"
                d="M10.58 115.87H5.7c-.94 0-1.7-.76-1.7-1.7V68.28c0-.94.76-1.7 1.7-1.7h4.88c.94 0 1.7.76 1.7 1.7v45.89c0 .94-.77 1.7-1.7 1.7m111.7 0h-4.88c-.94 0-1.7-.76-1.7-1.7V68.28c0-.94.76-1.7 1.7-1.7h4.88c.94 0 1.7.76 1.7 1.7v45.89c0 .94-.76 1.7-1.7 1.7"
              />
              <path
                fill="#B9E4EA"
                d="M8.04 122.64c-1.1 0-2-.9-2-2v-2.44h4v2.44a2 2 0 0 1-2 2m113.82-64.12h-4v-20.4c0-1.1.9-2 2-2s2 .9 2 2zm-110.7 0h-4v-20.4c0-1.1.9-2 2-2s2 .9 2 2zm108.7 64.12c-1.1 0-2-.9-2-2v-2.44h4v2.44a2 2 0 0 1-2 2"
              />
              <path
                fill="#FCEBCD"
                d="M60.78 50.42c-.22 0-.41-.18-.41-.41V39.66c0-.22.18-.41.41-.41H84c.22 0 .41.18.41.41v10.35c0 .22-.18.41-.41.41z"
              />
              <path
                fill="#78909C"
                d="M83.9 39.76v10.16H60.88V39.76zm.1-1.01H60.78c-.5 0-.91.41-.91.91v10.35c0 .5.41.91.91.91H84c.5 0 .91-.41.91-.91V39.66c0-.5-.4-.91-.91-.91"
              />
              <path
                fill="#FFF"
                d="M64.54 48.49c-.76 0-1.38-.62-1.38-1.38v-4.54c0-.76.62-1.38 1.38-1.38c.76 0 1.38.62 1.38 1.38v4.54c0 .76-.62 1.38-1.38 1.38m3.91 0c-.58 0-1.05-.47-1.05-1.05v-5.2a1.05 1.05 0 1 1 2.1 0v5.2c0 .58-.47 1.05-1.05 1.05m3.44 0a.77.77 0 0 1-.77-.77v-5.75a.77.77 0 0 1 1.54 0v5.75c0 .42-.34.77-.77.77"
              />
              <circle cx="72.39" cy="88.31" r="32.79" fill="#616161" />
              <circle cx="72.39" cy="88.31" r="28.47" fill="#E0E0E0" />
              <circle cx="72.39" cy="88.31" r="20.33" fill="#2F7889" />
              <circle cx="72.39" cy="88.31" r="26.16" />
              <circle cx="72.39" cy="88.31" r="19.94" fill="#2F7889" />
              <path
                fill="#94D1E0"
                d="M67.67 71.58c-6.31 1.43-10.08 7.57-10.08 12.1c0 3.67 2.43 2.75 3.21 1.42c2.01-3.41 4.44-6.25 8.63-7.44c1.68-.48 3.64-1.53 3.44-3.49c-.28-2.79-3.05-3.08-5.2-2.59"
              />
              <circle cx="72.39" cy="88.31" r="8.9" opacity=".25" />
            </svg>
            <h1 className="text-sm font-bold text-center">
              Foto Persyaratan <span className="text-red-500">*</span>
            </h1>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#26bc4f"
                fill-rule="evenodd"
                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Perjanjian */}
        <div
          className="flex w-full h-full justify-between items-center bg-white rounded-2xl p-5"
          onClick={() => openModal(2)}
        >
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
            >
              <path
                fill="#ffd357"
                d="M12.479 1.772a2.445 2.445 0 0 0-3.458 0L2.396 8.397a.5.5 0 0 0-.12.195l-1.25 3.75a.5.5 0 0 0 .595.643l4-1a.5.5 0 0 0 .233-.131L11.5 6.207l.086.086a1 1 0 0 1 0 1.414l-1.44 1.44a.5.5 0 0 0 .708.707l1.439-1.44a2 2 0 0 0 0-2.828l-.086-.086l.272-.271a2.445 2.445 0 0 0 0-3.457M4.967 15c-1.235 0-2.208-.566-2.855-1.107l1.284-.32a3.2 3.2 0 0 0 1.57.427c.406 0 .824-.164 1.27-.457c.447-.293.878-.687 1.314-1.095l.113-.107c.385-.361.784-.737 1.166-.996c.408-.278.95-.53 1.517-.311c.376.144.62.41.791.736c.161.306.272.688.38 1.105c.05.19.133.374.23.498a.46.46 0 0 0 .114.112c.025.015.036.015.039.015c.122 0 .331-.082.63-.286c.185-.126.344-.252.502-.379c.098-.078.197-.157.302-.235c.279-.209.52-.349.697-.438a3.05 3.05 0 0 1 .278-.124l.02-.008l.007-.002l.003-.001h.001l.16.473l-.159-.474a.5.5 0 0 1 .321.947l-.004.002a2.141 2.141 0 0 0-.175.08c-.13.064-.321.174-.55.346c-.059.043-.135.104-.223.174c-.181.143-.409.324-.618.466c-.31.212-.741.46-1.192.46c-.436 0-.751-.265-.946-.517a2.435 2.435 0 0 1-.405-.858c-.11-.423-.196-.7-.296-.89c-.09-.168-.17-.232-.266-.27c-.082-.03-.245-.033-.595.206c-.313.212-.655.533-1.058.912l-.1.093c-.431.405-.92.855-1.449 1.202c-.53.348-1.14.621-1.818.621"
              />
            </svg>
            <h1 className="text-sm font-bold text-center">
              Tanda Tangan Perjanjian <span className="text-red-500">*</span>
            </h1>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#26bc4f"
                fill-rule="evenodd"
                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Submission */}
        <div
          className="flex w-full h-full justify-between items-center bg-white rounded-2xl p-5"
          onClick={() => openModal(3)}
        >
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#e7e7e7"
                d="M14 10h5.5L14 4.5zM5 3h10l6 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2m0 9v2h14v-2zm0 4v2h9v-2z"
              />
            </svg>
            <h1 className="text-sm font-bold text-center">
              BPKB Kendaraan <span className="text-red-500">*</span>
            </h1>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#26bc4f"
                fill-rule="evenodd"
                d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </section>

      <a
        className="cursor-pointer p-4 border-none bg-blue-400 rounded-xl"
        onClick={() => openModal(3)}
      >
        <h1 className="text-md font-bold text-white">Submit</h1>
      </a>

      {selectedService && modalOpen && (
        <Modal
          isOpen={modalOpen}
          closeModal={closeModal}
          serviceId={selectedService}
        >
          {selectedService === 1 && <PersyaratanContent />}
          {selectedService === 2 && <PerjanjianContent />}
          {selectedService === 3 && <BpkbContent />}
        </Modal>
      )}
    </main>
  );
}
