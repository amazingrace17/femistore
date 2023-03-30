import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
export const Contact = () => {

  return  <Container fluid>
  <Row >
  <h2  className='mb-4 pt-4'>Have you completed the second stage of the shopping task? i.e shoppped on Tife store? </h2> 
  <h2> If Yes, you have successfully completed the demonstration. Thank you</h2>
   
   <h2 > If No,  please click the button to move to the second stage</h2>
   <Button vaiant="Success" size="md" href='https://tifestore.netlify.app/' className='m-3 p-3'>  Stage 2 </Button>
  </Row>
</Container>
};
