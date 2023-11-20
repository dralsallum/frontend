import { useState } from "react";
import axios from "axios";

async function postImage({ image, description }) {
  try {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    const result = await axios.post(
      "https://agency-saudi-688c7ddad04b.herokuapp.com/images",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error posting image:", error);
    throw error; // rethrow the error for further handling if necessary
  }
}

const Something = () => {
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const submit = async (event) => {
    event.preventDefault();
    const result = await postImage({ image: file, description });
    setImages([result.image, ...images]);
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        ></input>
        <button type="submit">Submit</button>
      </form>

      {images.map((image, index) => (
        <div key={image || index}>
          <img src={image} alt={`Uploaded ${index}`}></img>
        </div>
      ))}
    </div>
  );
};

export default Something;
