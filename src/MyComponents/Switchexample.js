import Form from 'react-bootstrap/Form';

function SwitchExample() {
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Mark as done"
      />
    </Form>
  );
}

export default SwitchExample;