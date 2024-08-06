import { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vat, setVat] = useState(0);

  function handlePriceChange(e) {
    const p = parseFloat(e.target.value) || 0;
    setPrice(p);
    calculateVAT(p, discount);
  }

  function handleDiscountChange(e) {
    const d = parseFloat(e.target.value) || 0;
    setDiscount(d);
    calculateVAT(price, d);
  }

  function calculateVAT(price, discount) {
    const v = (price - discount) * 0.07;
    setVat(v.toFixed(2));
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>VAT Calculator</h1>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ fontSize: '20pt' }}>Price</label>
        <input 
          type="number" 
          onChange={handlePriceChange}
          style={{ fontSize: '20pt', marginLeft: '10px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ fontSize: '20pt' }}>Discount</label>
        <input 
          type="number" 
          onChange={handleDiscountChange}
          style={{ fontSize: '20pt', marginLeft: '10px' }}
        />
      </div>
      <p style={{ fontSize: '20pt' }}>VAT = {vat}</p>
    </div>
  );
}

export default App;
