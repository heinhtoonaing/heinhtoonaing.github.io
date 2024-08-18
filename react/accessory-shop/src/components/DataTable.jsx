import React, { useRef, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { TotalPriceContext } from '../context.jsx';

const DataTable = ({ data, onDelete, onSearch }) => {
  const { totalPrice, setTotalPrice } = React.useContext(TotalPriceContext);  // Correct destructuring
  const sRef = useRef();

  useEffect(() => {
    const sum = data.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(sum);
  }, [data, setTotalPrice]);

  const handleSearch = () => {
    const keyword = sRef.current.value;
    onSearch(keyword);
  };

  const handleSortAscending = () => {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    onSearch('', sortedData); // Assuming onSearch is also used for sorting
  };

  const handleSortDescending = () => {
    const sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
    onSearch('', sortedData); // Assuming onSearch is also used for sorting
  };

  return (
    <div>
      <input type="text" placeholder="Search..." ref={sRef} />{' '}
      <Button onClick={handleSearch}>Search</Button>
      <Button onClick={handleSortAscending}>Sort Ascending</Button>
      <Button onClick={handleSortDescending}>Sort Descending</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>
                  <i
                    className="bi bi-trash"
                    onClick={() => onDelete(index)}
                    style={{ cursor: 'pointer' }}
                  ></i>
                </td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No items to display</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
