import React from 'react';
import { Container } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';

class NotFound extends React.Component {
  render() {
    return (
      <>
        <Container className="MyContainer">
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-block', textAlign: 'left' }}>
              {/* <Message warning floating> */}
              <Message>
                <p>Not Found (a.k.a. 404)</p>
              </Message>
            </div>
          </div>
        </Container>
      </>
    );
  }
};

export default NotFound;
