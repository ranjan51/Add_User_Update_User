import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
const Example = (props: any) => {
  const { data, setdata } = props;
  // const[data,setdata] = useState<any>({name:name,age:age})
  const [show, setShow] = useState(false);

  const [name, setName] = useState<string>();
  const handleModel = () => setShow(!show);
  const [id, setId] = useState<any>();
  const [age, setAge] = useState<string>();

  const handleName = (e: React.FormEvent) => {
    e.preventDefault();
    const id = Date.now();

    setShow(false);
    const AllData = {
      name,
      age,
      id,
    };
    setdata([...data, AllData]);
    setName("");
    setAge("");
  };

  const edititems = (card: any) => {
    handleModel();
    setAge(card.age);
    setName(card.name);
    setId(card.id);
  };

  const del = (id: any) => {
    setdata(data.filter((x: any) => x.id !== id));
  };
  const saveedited = () => {
    const AllData = {
      name,
      age,
      id,
    };
    setdata(data.map((item: any) => (item.id === id ? AllData : item)));
    setId(null);
    setName("");
    setAge("");

    handleModel();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleModel} className="my-5">
        Add Users
      </Button>
      {data.map((card: any) => {
        return (
          <>
            <center>
              <div
                className=" d-flex mx-5 border border-success rounded my-3 "
                id="div"
              >
                <h5 className="mx-5">{card.name}</h5>

                <h5 className="mx-5">{card.age}</h5>
                <div className="container justify-content-end">
                  <Button
                    variant="primary"
                    className="mx-5 "
                    onClick={() => del(card.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="primary"
                    className="mx-5 "
                    onClick={() => edititems(card)}
                  >
                    Edit
                  </Button>
                </div>
                {/* <button className='btn btn-primary mx-5 '>Edit</button> */}
              </div>
            </center>
          </>
        );
      })}

      <Modal show={show} onHide={handleModel}>
        <Modal.Header closeButton>
          <Modal.Title>Users Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>user name</Form.Label>
              <Form.Control
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>User age</Form.Label>
              <Form.Control
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModel}>
            Close
          </Button>
          {id ? (
            <Button variant="primary" onClick={saveedited}>
              save edited data
            </Button>
          ) : (
            <Button variant="primary" onClick={handleName}>
              Submit data
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      {/* card */}
    </div>
  );
};

export default Example;
