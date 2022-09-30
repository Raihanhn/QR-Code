import { useRef } from "react";
import { useState } from "react"
import QrScanner from 'qr-scanner'

const ReadQr = () => {

    const [file, setFile] = useState(null);
    const [data, setData] = useState(null);
    const fileRef = useRef();

    const handleClick = () => {
        fileRef.current.click();
    };

    const handleChange = async (e) => {
        const file = e.target.files[0];
        setFile(file);
        const result = await QrScanner.scanImage(file)
        setData(result);
    }

    return (
      <div className="col-md-5 mx-auto">
      <h2 className="text-center mb-5">Read QR Code</h2>
      <div className="card border-0">
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
              <button type="button" onClick={handleClick} className="btn btn-success">
                  Scan QR Code
              </button>
              <input type="file" ref={fileRef} onChange={handleChange} accept=".png, .jpg, .jpeg" className="d-none" />
              <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
                 {file && <img src={URL.createObjectURL(file)} alt="QR Code" /> }
                 {data && <p className="small fw-bold mt-5">Data: {data}</p> }
              </div>
          </div>
      </div>
  </div>
    )
  }
  
  export default ReadQr