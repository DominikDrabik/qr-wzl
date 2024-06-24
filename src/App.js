import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import './App.css';
function App() {

  let containerWidth = window.innerHeight * 0.5;

  console.log(containerWidth);
  document.documentElement.style.setProperty('--container-width', `${containerWidth}px`);

  const [scanResult, setScanResult] = useState(null);



  useEffect(() => { 
    let readerElement = document.querySelector('#reader');
    let readerWidth = readerElement.getBoundingClientRect().width;
    let qrboxSize = readerWidth * 0.5;

    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: { width:  qrboxSize, height:  qrboxSize }, // window.innerWidth * 0.5
      fps: 10,
    });

    scanner.render(onScanSuccess, onScanError);

    function onScanSuccess(qrCodeMessage) {
      // handle on success condition with the decoded message
      scanner.clear(); // stop scanning
      setScanResult(qrCodeMessage);
      console.log(qrCodeMessage);
    }
  
  function onScanError(errorMessage) {  
      // handle on error condition with the error message
      console.warn(errorMessage); 
  }
}, []);


  

  return (
    <div className="App">
      
        <div id="navbar">
          <h1>QR Code Scanner - WZL Instruction</h1>
        </div>
        
      <div className="container">
        {
          
          scanResult 
          ? <div id="reader">Success: {scanResult}</div>
          : <div id="reader"></div>
      
        }
      </div>
      
    </div>
  );
}

export default App;
