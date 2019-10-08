import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

const ListGroupPage = () => {
return (
<MDBContainer>
  <MDBListGroup className="my-4 mx-4" style={{ width: "22rem" }}>
    <MDBListGroupItem color="primary">Cras justo odio</MDBListGroupItem>
    <MDBListGroupItem color="secondary">Dapibus ac facilisis in</MDBListGroupItem>
    <MDBListGroupItem color="danger">Morbi leo risus</MDBListGroupItem>
    <MDBListGroupItem color="warning">Porta ac consectetur ac</MDBListGroupItem>
    <MDBListGroupItem color="info">Vestibulum at eros</MDBListGroupItem>
    <MDBListGroupItem color="light">Vestibulum at eros</MDBListGroupItem>
    <MDBListGroupItem color="dark">Vestibulum at eros</MDBListGroupItem>
  </MDBListGroup>
</MDBContainer>
);
};

export default ListGroupPage;