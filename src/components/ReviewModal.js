// import ReactDOM from "react-dom";
// import { useState, useEffect } from "react";

// import React from 'react'

// const ReviewModal = ({ show, onClose, children }) => {
//     const [isBrowser, setIsBrowser] = useState(false);
//     useEffect(() => {
//         setIsBrowser(true);
//       }, []);
//       const handleClose = (e) => {
//         e.preventDefault();
//         onClose();
//       };
//       const modalContent = show === "YES" && (
//         <div className={loading.wrapper}>
//           <div className={loading.modal}>
//             <img src="/logo.png" height="100px"></img>
//             <p className={loading.title}>작성 완료!</p>
//             <button className={loading.button} onClick={handleClose}>
//               닫기
//             </button>
//             {/* <button className={loading.button} onClick={handler}>
//             홈으로
//           </button> */}
//           </div>
//         </div>
//       );
      
      
//       if (isBrowser) {
//         return ReactDOM.createPortal(
//           modalContent,
//           document.getElementById("modal-root")
//         );
//       } else {
//         return null;
//       }
//     };

// export default ReviewModal