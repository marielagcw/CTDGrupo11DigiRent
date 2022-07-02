import "../styles/ProductoForm.css";
import { Modal, Form, Button } from "react-bootstrap";


const ProductoFormAgregar = ({mostrar, setMostrar, titulo, children, sendClick}) => {


  return (
    <>
      <Modal show={mostrar} onHide={()=>setMostrar(()=>false)}>
        <Modal.Header closeButton>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setMostrar((e)=>false)} >
            Cancelar
          </Button>
          <Button 
          variant="primary" 
          type="submit"
          onClick={()=>{
            sendClick();
            setMostrar(()=>false);
            }}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ProductoFormAgregar;
