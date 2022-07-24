import React from 'react';
import { Container } from 'semantic-ui-react';

class Test extends React.Component {
  render() {
    return (
      <>
        <Container className="MyContainer">
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-block', textAlign: 'left' }}>
              TEST
            </div>
          </div>
        </Container>
      </>
    );
  }
};

export default Test;
