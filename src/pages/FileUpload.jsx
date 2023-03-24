import React, {useState} from "react";

function FileUpload(props) {
  const [imagePreview, setImage] = useState("");


  const convertBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  async function onFileChange(e) {
    console.log("event file", e);

    // setImage(e.target.files[0]);

    const file = e.target.files[0]
    const base64 = await convertBase64(file)
    console.log(base64)
    setImage(base64);

  }



  return (
    <div>
      <h2>File Uplaod Component</h2>
      <div>
        <input type="file" name="item" id="item" onChange={onFileChange} />
      </div>

      <br />
      <br />
      <br />

      <div>
        <h3>Image Preview</h3>
        <img src={imagePreview} alt="item" />
      </div>
    </div>
  );
}

export default FileUpload;
