import React from 'react';
import { useLocation } from "react-router-dom";

export const Sugest = () => {
  const location = useLocation();
  let itemId = location.state.itemId;

  return (
    <div className='container'>
        <h1>Recomendaciones</h1>
        <h2>{itemId}</h2>
    </div>
  )
}