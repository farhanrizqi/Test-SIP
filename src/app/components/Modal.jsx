import React, { useEffect, useState } from "react";
import axios from "axios";

// Komponen Radio
const PerjanjianContent = ({ jsonContent, closeModal }) => {
  const [selectedOption1, setSelectedOption1] = React.useState("");
  const [selectedOption2, setSelectedOption2] = React.useState("");

  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleSaveDraft = () => {
    // Tambahkan logika penyimpanan draft di sini
    console.log("Draft saved!");
  };
  return (
    <div className="flex flex-col justify-center p-5 gap-5">
      <div>
        <h1 className="text-center font-bold text-lg">
          {jsonContent.service_id.service_name}
        </h1>
        <h2 className="text-center text-sm font-bold text-red-500">
          * Mandatory (harus, diisi)
        </h2>
      </div>
      <div className="flex flex-col justify-center bg-white rounded-xl py-5 px-2">
        <div className="flex flex-col gap-2">
          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option1"
                checked={selectedOption1 === "option1"}
                onChange={handleOptionChange1}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 2).description &&
                  jsonContent.json.find((item) => item.id === 2).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>

          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option2"
                checked={selectedOption1 === "option2"}
                onChange={handleOptionChange1}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 3).description &&
                  jsonContent.json.find((item) => item.id === 3).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>

          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option3"
                checked={selectedOption1 === "option3"}
                onChange={handleOptionChange1}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 4).description &&
                  jsonContent.json.find((item) => item.id === 4).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>

          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option4"
                checked={selectedOption1 === "option4"}
                onChange={handleOptionChange1}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 5).description &&
                  jsonContent.json.find((item) => item.id === 5).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>

          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option5"
                checked={selectedOption1 === "option5"}
                onChange={handleOptionChange1}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 6).description &&
                  jsonContent.json.find((item) => item.id === 6).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>

          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option6"
                checked={selectedOption1 === "option6"}
                onChange={handleOptionChange1}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 7).description &&
                  jsonContent.json.find((item) => item.id === 7).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>

          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option7"
                checked={selectedOption1 === "option7"}
                onChange={handleOptionChange1}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 8).description &&
                  jsonContent.json.find((item) => item.id === 8).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>

          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option8"
                checked={selectedOption1 === "option8"}
                onChange={handleOptionChange1}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 9).description &&
                  jsonContent.json.find((item) => item.id === 9).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-lg font-bold py-5">
            {jsonContent.json.find((item) => item.id === 10).description &&
              jsonContent.json.find((item) => item.id === 10).description}
          </h1>
          <div className="flex flex-col w-full gap-2">
            <label>
              <div className="flex  items-start ">
                <input
                  className="text-justify"
                  type="radio"
                  value="option11"
                  checked={selectedOption2 === "option11"}
                  onChange={handleOptionChange2}
                />
                <h1 className="text-xs font-medium ps-2">
                  {jsonContent.json.find((item) => item.id === 11)
                    .description &&
                    jsonContent.json.find((item) => item.id === 11).description}
                </h1>
              </div>
            </label>

            <label>
              <div className="flex  items-start ">
                <input
                  className="text-justify"
                  type="radio"
                  value="option12"
                  checked={selectedOption2 === "option12"}
                  onChange={handleOptionChange2}
                />
                <h1 className="text-xs font-medium ps-2">
                  {jsonContent.json.find((item) => item.id === 12)
                    .description &&
                    jsonContent.json.find((item) => item.id === 12).description}
                </h1>
              </div>
            </label>

            <label>
              <div className="flex  items-start ">
                <input
                  className="text-justify"
                  type="radio"
                  value="option13"
                  checked={selectedOption2 === "option13"}
                  onChange={handleOptionChange2}
                />
                <h1 className="text-xs font-medium ps-2">
                  {jsonContent.json.find((item) => item.id === 13)
                    .description &&
                    jsonContent.json.find((item) => item.id === 13).description}
                </h1>
              </div>
            </label>

            <label>
              <div className="flex  items-start ">
                <input
                  className="text-justify"
                  type="radio"
                  value="option14"
                  checked={selectedOption2 === "option14"}
                  onChange={handleOptionChange2}
                />
                <h1 className="text-xs font-medium ps-2">
                  {jsonContent.json.find((item) => item.id === 14)
                    .description &&
                    jsonContent.json.find((item) => item.id === 14).description}
                </h1>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="w-20% py-2 px-5 mr-2 cursor-pointer rounded-lg bg-white text-black border"
          onClick={handleSaveDraft}
        >
          Save Draft
        </button>
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
const PersyaratanContent = ({ jsonContent, closeModal }) => {
  const [debiturImage, setDebiturImage] = useState(null);
  const [pasanganImage, setPasanganImage] = useState(null);
  const [bagianImage, setBagianImage] = useState(null);
  const [tokenImage, setTokenImage] = useState(null);
  const [ktpImage, setKtpImage] = useState(null);
  const [kkImage, setKkImage] = useState(null);
  const [bpkbImage, setBpkbImage] = useState(null);
  const [slipImage, setSlipImage] = useState(null);
  const [selfieImage, setSelfieImage] = useState(null);
  const [rangkaImage, setRangkaImage] = useState(null);
  const [mesinImage, setMesinImage] = useState(null);
  const [kananImage, setKananImage] = useState(null);
  const [kiriImage, setKiriImage] = useState(null);
  const [stnkImage, setStnkImage] = useState(null);
  const [kondisi1Image, setKondisi1Image] = useState(null);
  const [kondisi2Image, setKondisi2Image] = useState(null);
  const [kondisi3Image, setKondisi3Image] = useState(null);
  const [kendaraanVideo, setKendaraanVideo] = useState(null);

  const handleImageChange = (e, setImage) => {
    const imageFile = e.target.files[0];
    if (imageFile && imageFile.type.startsWith("image/")) {
      setImage(imageFile);
    } else {
      alert("Please upload a valid image file (JPEG or PNG).");
    }
  };

  const handleImageUpload = (image, label) => {
    if (image) {
      console.log(`${label} Image:`, image);
    } else {
      console.log(`No ${label} image selected`);
    }
  };

  const handleVideoChange = (e, setVideo) => {
    const videoFile = e.target.files[0];
    if (videoFile && videoFile.type.startsWith("video/")) {
      setVideo(videoFile);
    } else {
      alert("Please upload a valid video file.");
    }
  };

  const handleVideoUpload = (video, label) => {
    if (video) {
      console.log(`${label} Video:`, video);
    } else {
      console.log(`No ${label} video selected`);
    }
  };

  // handle start
  const handleDebiturImageChange = (e) => {
    handleImageChange(e, setDebiturImage);
  };

  const handleDebiturImageUpload = () => {
    handleImageUpload(debiturImage, "Debitur");
  };

  const handlePasanganImageChange = (e) => {
    handleImageChange(e, setPasanganImage);
  };

  const handlePasanganImageUpload = () => {
    handleImageUpload(pasanganImage, "Pasangan");
  };

  const handleBagianImageChange = (e) => {
    handleImageChange(e, setBagianImage);
  };

  const handleBagianImageUpload = () => {
    handleImageUpload(bagianImage, "Bagian");
  };

  const handleTokenImageChange = (e) => {
    handleImageChange(e, setTokenImage);
  };

  const handleTokenImageUpload = () => {
    handleImageUpload(tokenImage, "Token");
  };

  const handleKtpImageChange = (e) => {
    handleImageChange(e, setKtpImage);
  };

  const handleKtpImageUpload = () => {
    handleImageUpload(ktpImage, "Ktp");
  };

  const handleKkImageChange = (e) => {
    handleImageChange(e, setKkImage);
  };

  const handleKkImageUpload = () => {
    handleImageUpload(kkImage, "Kk");
  };

  const handleBpkbImageChange = (e) => {
    handleImageChange(e, setBpkbImage);
  };

  const handleBpkbImageUpload = () => {
    handleImageUpload(bpkbImage, "Bpkb");
  };

  const handleSlipImageChange = (e) => {
    handleImageChange(e, setSlipImage);
  };

  const handleSlipImageUpload = () => {
    handleImageUpload(slipImage, "Slip");
  };

  const handleSelfieImageChange = (e) => {
    handleImageChange(e, setSelfieImage);
  };

  const handleSelfieImageUpload = () => {
    handleImageUpload(selfieImage, "Selfie");
  };

  const handleRangkaImageChange = (e) => {
    handleImageChange(e, setRangkaImage);
  };

  const handleRangkaImageUpload = () => {
    handleImageUpload(rangkaImage, "Rangka");
  };

  const handleMesinImageChange = (e) => {
    handleImageChange(e, setMesinImage);
  };

  const handleMesinImageUpload = () => {
    handleImageUpload(mesinImage, "Mesin");
  };

  const handleKananImageChange = (e) => {
    handleImageChange(e, setKananImage);
  };

  const handleKananImageUpload = () => {
    handleImageUpload(kananImage, "Kanan");
  };

  const handleKiriImageChange = (e) => {
    handleImageChange(e, setKiriImage);
  };

  const handleKiriImageUpload = () => {
    handleImageUpload(kiriImage, "Kiri");
  };

  const handleStnkImageChange = (e) => {
    handleImageChange(e, setStnkImage);
  };

  const handleStnkImageUpload = () => {
    handleImageUpload(stnkImage, "Stnk");
  };

  const handleKondisi1ImageChange = (e) => {
    handleImageChange(e, setKondisi1Image);
  };

  const handleKondisi1ImageUpload = () => {
    handleImageUpload(kondisi1Image, "Kondisi");
  };
  const handleKondisi2ImageChange = (e) => {
    handleImageChange(e, setKondisi2Image);
  };

  const handleKondisi2ImageUpload = () => {
    handleImageUpload(kondisi2Image, "Kondisi");
  };
  const handleKondisi3ImageChange = (e) => {
    handleImageChange(e, setKondisi3Image);
  };

  const handleKondisi3ImageUpload = () => {
    handleImageUpload(kondisi3Image, "Kondisi");
  };

  const handleKendaraanVideoChange = (e) => {
    handleVideoChange(e, setKendaraanVideo);
  };

  const handleKendaraanVideoUpload = () => {
    handleVideoUpload(kendaraanVideo, "Kendaraan");
  };
  // handle end

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
        <h1 className="font-bold text-center">
          {jsonContent.json.find((item) => item.id === 24).description &&
            jsonContent.json.find((item) => item.id === 24).description}
        </h1>
        {/* Foto debitur start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 26).description &&
              jsonContent.json.find((item) => item.id === 26).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="debiturImageInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  debiturImage
                    ? URL.createObjectURL(debiturImage)
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
              id="debiturImageInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handleDebiturImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {debiturImage ? debiturImage.name : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Foto debitur end */}

        {/* Foto pasnangan start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 25).description &&
              jsonContent.json.find((item) => item.id === 25).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="pasanganImageInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  pasanganImage
                    ? URL.createObjectURL(pasanganImage)
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
              id="pasanganImageInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handlePasanganImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {pasanganImage
                ? pasanganImage.name
                : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Foto pasnangan end */}

        {/* Foto bagian depan start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 27).description &&
              jsonContent.json.find((item) => item.id === 27).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="bagianImageInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  bagianImage
                    ? URL.createObjectURL(bagianImage)
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
              id="bagianImageInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handleBagianImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {bagianImage ? bagianImage.name : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Foto bagian depan end */}

        {/* Foto token start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 28).description &&
              jsonContent.json.find((item) => item.id === 28).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="tokenInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  tokenImage
                    ? URL.createObjectURL(tokenImage)
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
              id="tokenInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handleTokenImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {tokenImage ? tokenImage.name : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Foto token end */}

        {/* Foto ktp start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 29).description &&
              jsonContent.json.find((item) => item.id === 29).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="ktpInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  ktpImage
                    ? URL.createObjectURL(ktpImage)
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
              id="ktpInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handleKtpImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {ktpImage ? ktpImage.name : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Foto ktp end */}

        {/* Foto kk start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 30).description &&
              jsonContent.json.find((item) => item.id === 30).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="kkInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  kkImage
                    ? URL.createObjectURL(kkImage)
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
              id="kkInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handleKkImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {kkImage ? kkImage.name : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Foto kk end */}

        {/* Foto bpkb start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 31).description &&
              jsonContent.json.find((item) => item.id === 31).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="bpkbInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  bpkbImage
                    ? URL.createObjectURL(bpkbImage)
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
              id="bpkbInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handleBpkbImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {bpkbImage ? bpkbImage.name : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Foto bpkb end */}

        {/* Foto slip start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 32).description &&
              jsonContent.json.find((item) => item.id === 32).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="slipInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  slipImage
                    ? URL.createObjectURL(slipImage)
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
              id="slipInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handleSlipImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {slipImage ? slipImage.name : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Foto slip end */}

        <h1 className="font-bold text-center">
          {jsonContent.json.find((item) => item.id === 33).description &&
            jsonContent.json.find((item) => item.id === 33).description}
        </h1>

        {/* Foto selfie start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 34).description &&
              jsonContent.json.find((item) => item.id === 34).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="selfieInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  selfieImage
                    ? URL.createObjectURL(selfieImage)
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
              id="selfieInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handleSelfieImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {selfieImage ? selfieImage.name : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Foto selfie end */}

        {/* Foto rangka start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 35).description &&
              jsonContent.json.find((item) => item.id === 35).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="rangkaInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  rangkaImage
                    ? URL.createObjectURL(rangkaImage)
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
              id="rangkaInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handleRangkaImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {rangkaImage ? rangkaImage.name : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Foto rangka end */}

        {/* Foto mesin start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 36).description &&
              jsonContent.json.find((item) => item.id === 36).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="mesinInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  mesinImage
                    ? URL.createObjectURL(mesinImage)
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
              id="mesinInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handleMesinImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {mesinImage ? mesinImage.name : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Foto mesin end */}

        {/* Foto kanan start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 37).description &&
              jsonContent.json.find((item) => item.id === 37).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="kananInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  kananImage
                    ? URL.createObjectURL(kananImage)
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
              id="kananInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handleKananImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {kananImage ? kananImage.name : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Foto kanan end */}

        {/* Foto kiri start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 38).description &&
              jsonContent.json.find((item) => item.id === 38).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="kiriInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  kiriImage
                    ? URL.createObjectURL(kiriImage)
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
              id="kiriInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handleKiriImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {kiriImage ? kiriImage.name : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Foto kiri end */}

        {/* Foto stnk start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 39).description &&
              jsonContent.json.find((item) => item.id === 39).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="stnkInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <img
                src={
                  stnkImage
                    ? URL.createObjectURL(stnkImage)
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
              id="stnkInput"
              type="file"
              accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
              onChange={handleStnkImageChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {stnkImage ? stnkImage.name : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Foto stnk end */}

        {/* Foto kondisi start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 40).description &&
              jsonContent.json.find((item) => item.id === 40).description}
          </h1>
          <div className="flex justify-center w-full gap-2">
            <div className="flex justify-center w-full rounded-xl border">
              <label
                htmlFor="kondisi1Input"
                className="cursor-pointer w-full flex flex-col items-center"
              >
                <img
                  src={
                    kondisi1Image
                      ? URL.createObjectURL(kondisi1Image)
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
                <h1 className="text-xs">
                  {kondisi1Image
                    ? kondisi1Image.name.length > 6
                      ? kondisi1Image.name.substring(0, 6) + "..."
                      : kondisi1Image.name
                    : "Upload"}
                </h1>
              </label>
              <input
                id="kondisi1Input"
                type="file"
                accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
                onChange={handleKondisi1ImageChange}
                className="hidden"
              />
            </div>
            <div className="flex justify-center w-full rounded-xl border">
              <label
                htmlFor="kondisi2Input"
                className="cursor-pointer w-full flex flex-col items-center"
              >
                <img
                  src={
                    kondisi2Image
                      ? URL.createObjectURL(kondisi2Image)
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
                <h1 className="text-xs">
                  {kondisi2Image
                    ? kondisi2Image.name.length > 6
                      ? kondisi2Image.name.substring(0, 6) + "..."
                      : kondisi2Image.name
                    : "Upload"}
                </h1>
              </label>
              <input
                id="kondisi2Input"
                type="file"
                accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
                onChange={handleKondisi2ImageChange}
                className="hidden"
              />
            </div>
            <div className="flex justify-center w-full rounded-xl border">
              <label
                htmlFor="kondisi3Input"
                className="cursor-pointer w-full flex flex-col items-center"
              >
                <img
                  src={
                    kondisi3Image
                      ? URL.createObjectURL(kondisi3Image)
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
                <h1 className="text-xs">
                  {kondisi3Image
                    ? kondisi3Image.name.length > 6
                      ? kondisi3Image.name.substring(0, 6) + "..."
                      : kondisi3Image.name
                    : "Upload"}
                </h1>
              </label>
              <input
                id="kondisi1Input"
                type="file"
                accept="image/jpeg, image/png" // Atur tipe dokumen yang diizinkan
                onChange={handleKondisi3ImageChange}
                className="hidden"
              />
            </div>
          </div>
          {/* <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {kondisiImage ? kondisiImage.name : "Belum ada file yang dipilih"}
            </h1>
          </div> */}
        </div>
        {/* Foto kondisi end */}

        <h1 className="font-bold text-center">
          {jsonContent.json.find((item) => item.id === 41).description &&
            jsonContent.json.find((item) => item.id === 41).description}
        </h1>

        {/* Video kendaraan start */}
        <div className="flex flex-col items-center px-5 py-2">
          <h1 className="text-xs w-full mt-2">
            {jsonContent.json.find((item) => item.id === 42).description &&
              jsonContent.json.find((item) => item.id === 42).description}
          </h1>
          <div className="flex justify-center w-full rounded-xl border">
            <label
              htmlFor="kendaraanVideoInput"
              className="cursor-pointer w-full flex justify-center"
            >
              <video
                width="200"
                height="200"
                controls
                className="w-32 h-32 object-cover rounded-full cursor-pointer hidden"
              >
                <source
                  src={
                    kendaraanVideo ? URL.createObjectURL(kendaraanVideo) : ""
                  }
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
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
              id="kendaraanVideoInput"
              type="file"
              accept="video/mp4" // Atur tipe dokumen yang diizinkan
              onChange={handleKendaraanVideoChange}
              className="hidden"
            />
          </div>
          <div className="w-full flex justify-center">
            <h1 className="text-xs">
              {kendaraanVideo
                ? kendaraanVideo.name
                : "Belum ada file yang dipilih"}
            </h1>
          </div>
        </div>
        {/* Video kendaraan end */}
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
const BpkbContent = ({ jsonContent, closeModal }) => {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSaveDraft = () => {
    // Tambahkan logika penyimpanan draft di sini
    console.log("Draft saved!");
  };
  return (
    <div className="flex flex-col justify-center p-5 gap-5">
      <div>
        <h1 className="text-center font-bold text-lg">
          {jsonContent.service_id.service_name}
        </h1>
        <h2 className="text-center text-sm font-bold text-red-500">
          * Mandatory (harus, diisi)
        </h2>
      </div>
      <div className="flex flex-col justify-center bg-white rounded-xl py-5 px-2">
        <div className="flex flex-col gap-2">
          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 16).description &&
                  jsonContent.json.find((item) => item.id === 16).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>

          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 17).description &&
                  jsonContent.json.find((item) => item.id === 17).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>

          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 18).description &&
                  jsonContent.json.find((item) => item.id === 18).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>

          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option4"
                checked={selectedOption === "option4"}
                onChange={handleOptionChange}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 19).description &&
                  jsonContent.json.find((item) => item.id === 19).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>

          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option5"
                checked={selectedOption === "option5"}
                onChange={handleOptionChange}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 20).description &&
                  jsonContent.json.find((item) => item.id === 20).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>

          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option6"
                checked={selectedOption === "option6"}
                onChange={handleOptionChange}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 7).description &&
                  jsonContent.json.find((item) => item.id === 7).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>

          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option7"
                checked={selectedOption === "option7"}
                onChange={handleOptionChange}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 8).description &&
                  jsonContent.json.find((item) => item.id === 8).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>

          <label>
            <div className="flex  items-start ">
              <input
                className="text-justify"
                type="radio"
                value="option8"
                checked={selectedOption === "option8"}
                onChange={handleOptionChange}
              />
              <h1 className="text-xs font-medium ps-2">
                {jsonContent.json.find((item) => item.id === 9).description &&
                  jsonContent.json.find((item) => item.id === 9).description}
                <span className="text-red-500">*</span>
              </h1>
            </div>
          </label>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="w-20% py-2 px-5 mr-2 cursor-pointer rounded-lg bg-white text-black border"
          onClick={handleSaveDraft}
        >
          Save Draft
        </button>
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
          console.log("isi json service: ", selectedJson);
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
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50">
            <h1
              className="flex justify-end items-center text-white p-2 text-5xl cursor-pointer z-50"
              onClick={closeModal}
            >
              &times;
            </h1>
          </div>
          <div className="h-[90%] w-full bg-blue-200 p-6 rounded-lg z-50 m-4 overflow-y-auto md:w-2/3">
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
