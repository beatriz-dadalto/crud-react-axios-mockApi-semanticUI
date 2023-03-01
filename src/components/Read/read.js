import React, { useEffect, useState } from 'react';
import { Button, Label, Table } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://63fe5a87370fe830d9d2e1a6.mockapi.io/crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  const setData = (id, firstName, lastName) => {
    localStorage.setItem('ID', id);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
  };

  const getData = () => {
    axios
      .get(`https://63fe5a87370fe830d9d2e1a6.mockapi.io/crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://63fe5a87370fe830d9d2e1a6.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <>
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Update</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {apiData.map((data) => {
              return (
                <Table.Row key={data.id}>
                  <Table.Cell>
                    <Label ribbon>{data.id}</Label>
                  </Table.Cell>
                  <Table.Cell>{data.firstName}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>
                  <Table.Cell>
                    <Link to="/update">
                      <Button
                        color="blue"
                        onClick={() =>
                          setData(data.id, data.firstName, data.lastName)
                        }
                      >
                        &#9998;
                      </Button>
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Button color="red" onClick={() => onDelete(data.id)}>
                      &#10008;
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <Link to="/create">
          <Button fluid color="green" style={{ marginTop: 20 }}>
            ADD USER
          </Button>
        </Link>
      </div>
    </>
  );
}
