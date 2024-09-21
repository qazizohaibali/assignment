import { Form } from "react-bootstrap";

const Checkbox = ({ id,style }) => {
  return(
     <Form.Check type="checkbox" style={style} onChange={id} />
    );
};

export default Checkbox;
