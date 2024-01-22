// import React, { Component } from 'react';
// class Alert extends Component {
//     render() {
//         return (
//             <div className="alert alert-success">
//                 <h4>Info</h4>
//                 Belajar React JS itu membagongkan
//             </div>
//         );
//     }
// }
// export default Alert; 
import React from 'react';

const Alert = ({ type, children }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;
