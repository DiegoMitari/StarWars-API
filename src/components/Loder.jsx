import React from 'react';
import '../style/loader.css'


const Loader = () => {
  return (
    <div className="loader">
      <div className="lds-spinner"></div>
      <div className="loader-text">Cargando...</div>
    </div>
  );
};

export default Loader;