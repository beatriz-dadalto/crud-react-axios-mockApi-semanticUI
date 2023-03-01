import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Create() {
  let history = useHistory();
  const [firstName, setFirsName] = useState('');
  const [lastName, setLastName] = useState('');

  const sendDataAPI = () => {
    axios
      .post(`https://63fe5a87370fe830d9d2e1a6.mockapi.io/crud`, {
        firstName,
        lastName,
      })
      .then(() => {
        history.push('/');
      });
  };

  return (
    <>
      <div style={{marginTop: 20}}>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input
              name="fname"
              placeholder="First Name"
              onChange={(e) => setFirsName(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              name="lname"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Field>
          <Button type="submit" onClick={sendDataAPI} color='blue'>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
