import React, { useRef } from 'react';
import { Table, Button } from 'react-bootstrap';

const DataTable = ({ data, onDelete, onSearch }) => {
  const sRef = useRef();

  const handleSearch = () => {
    const keyword = sRef.current.value;
    onSearch(keyword);
  };

  const handleSortAscending = () => {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    onSearch('', sortedData);
  };

  const handleSortDescending = () => {
    const sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
    onSearch('', sortedData);
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
              <td colSpan="5">No items to display</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
