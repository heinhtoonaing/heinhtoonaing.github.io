import { useRef, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import productList from './accessory-products.json';
import DataTable from './components/DataTable';

function App() {
  const pRef = useRef();
  const qRef = useRef();
  const [price, setPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredSelectedItems, setFilteredSelectedItems] = useState([]);

  const handleAdd = () => {
    const pid = pRef.current.value;
    const product = productList.find((p) => p.id == pid);
    const q = parseInt(qRef.current.value, 10);

    if (product && q > 0) {
      const newItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: q,
        total: product.price * q,
      };
      setSelectedItems([...selectedItems, newItem]);
      setFilteredSelectedItems([...selectedItems, newItem]); // Update filtered list
    }
  };

  const handleProductChange = (e) => {
    const pid = e.target.value;
    const product = productList.find((p) => p.id == pid);
    const p = product ? product.price : 0;
    setPrice(p);
  };

  const deleteItemByIndex = (index) => {
    const newItems = selectedItems.filter((_, i) => i !== index);
    setSelectedItems(newItems);
    setFilteredSelectedItems(newItems);
  };

  const search = (keyword) => {
    setFilteredSelectedItems([
      ...selectedItems.filter((item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
      ),
    ]);
  };

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <span>Product</span>
          <Form.Select ref={pRef} onChange={handleProductChange}>
            <option value="">Select a product</option>
            {productList.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>Price: {price}</Col>
      </Row>
      <Row>
        <Col xs={6}>
          <span>Quantity</span>
          <input type="number" ref={qRef} min="1" />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Button variant="secondary" onClick={handleAdd}>
            Add
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <DataTable
            data={filteredSelectedItems}
            onDelete={deleteItemByIndex}
            onSearch={search}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
