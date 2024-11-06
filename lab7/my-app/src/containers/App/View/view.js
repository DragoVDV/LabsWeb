import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../DataContext';// Імпорт вашого DataContext
import './view_style.css';

const Overview = () => {
  const { id } = useParams(); // Отримуємо id з URL
  const { data } = useContext(DataContext); // Отримуємо дані з контексту
  const item = data.find(item => item.id === Number(id)); // Знаходимо елемент за id

  console.log('Requested ID:', id);
  console.log('Data:', data);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="overview-container">
      <h1 className="overview-title">{item.title}</h1>
      <img className="overview-image" src={item.image} alt={item.title} />
      <p className="overview-text">{item.text}</p>
      <p className="overview-price">Price: ${item.price}</p>
      <p className="overview-type">Type: {item.type}</p>
    </div>
  );
};

export default Overview;
