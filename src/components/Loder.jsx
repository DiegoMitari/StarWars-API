import React from 'react';
import '../style/loader.css'

export function Loader() {
  return (
    <div className="loader">
      <div className="lds-spinner"></div>
      <div className="loader-text">Cargando...</div>
    </div>
  );
};