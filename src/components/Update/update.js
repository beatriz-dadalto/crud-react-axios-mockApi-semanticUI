import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Create() {
  const [firstName, setFirsName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setID] = useState(null);
  let history = useHistory();

  useEffect(() => {
    setID(localStorage.getItem('ID'));
    setFirsName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
  }, []);

  const sendDataAPI = () => {
    axios
      .put(`https://63fe5a87370fe830d9d2e1a6.mockapi.io/crud/${id}`, {
        firstName,
        lastName,
      })
      .then(() => {
        history.push('/');
      });
  };

  return (
    <>
      <div>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input
              name="firstname"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirsName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              name="lastname"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Field>
          <Button type="submit" onClick={sendDataAPI} color='blue'>
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}
