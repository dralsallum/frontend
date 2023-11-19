import React, { useState } from "react";
import axios from "axios";

const Uploadd = () => {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(
        "https://agency-saudi-688c7ddad04b.herokuapp.com/api/upload",
        formData
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  return (
    <>
      <div>
        <input type="file" accept=".pdf" onChange={onFileChange} />
        <button onClick={onFileUpload}>Upload Me</button>
      </div>
    </>
  );
};

export default Uploadd;
