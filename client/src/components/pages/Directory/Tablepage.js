
import React from 'react';
import {MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBContainer  } from 'mdbreact';
import "./Directory.css";

const TablePage = (props) => {
  const data_panel = {
    columns: [
      {
        'label': <MDBInput label=" " type="checkbox" id="checkbox5" />,
        'field': 'check',
        'sort': 'asc'
      },
      {
        'label': 'First Name',
        'field': 'first',
        'sort': 'asc'
      },
      {
        'label': 'Last Name',
        'field': 'last',
        'sort': 'asc'
      },
      {
        'label': 'Location',
        'field': 'Location',
        'sort': 'asc'
      },
      {
        'label': 'Title',
        'field': 'Title',
        'sort': 'asc'
      },
      {
        'label': 'GitHub',
        'field': 'GitHub',
        'sort': 'asc'
      },
      {
        'label': 'Linkedin',
        'field': 'Linkedin',
        'sort': 'asc'
      }
    ],
    rows: [
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox6" />,
        'first': 'Mark',
        'last': 'Otto',
        'Location': '@mdo',
        'Title': 'Mark',
        'GitHub': 'Otto',
        'Linkedin': '@mdo'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox7" />,
        'first': 'Mark',
        'last': 'Otto',
        'Location': '@mdo',
        'Title': 'Mark',
        'GitHub': 'Otto',
        'Linkedin': '@mdo'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox8" />,
        'first': 'Mark',
        'last': 'Otto',
        'Location': '@mdo',
        'Title': 'Mark',
        'GitHub': 'Otto',
        'Linkedin': '@mdo'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox9" />,
        'first': 'Mark',
        'last': 'Otto',
        'Location': '@mdo',
        'Title': 'Mark',
        'GitHub': 'Otto',
        'Linkedin': '@mdo'
      },
      {
        'check': <MDBInput label=" " type="checkbox" id="checkbox10" />,
        'first': 'Mark',
        'last': 'Otto',
        'Location': '@mdo',
        'Title': 'Mark',
        'GitHub': 'Otto',
        'Linkedin': '@md',
      }
    ]
  };

  return(
    <MDBContainer>  
    <MDBCard narrow>

      <MDBCardHeader ClassName="bg-info" className="view view-cascade gradient-card-header py-4 mx-6 mb-4">
      <div className="white-text font-weight-bold text-uppercase text-center mx-6"> <a href="#" className="black-text  text-center mx-6">Contacts</a></div>
        
      </MDBCardHeader>
    
      <MDBCardBody className="cardaround">
        <MDBTable className="cardbody" btn fixed>
          <MDBTableHead columns={data_panel.columns} />
          <MDBTableBody rows={data_panel.rows} />
        </MDBTable>
      </MDBCardBody>   
    </MDBCard>
  
    </MDBContainer>

   
  );
};

export default TablePage;