import React from 'react';
import { Button } from 'semantic-ui-react';
// import { Icon } from 'semantic-ui-react';

class BackToTop extends React.Component {
  render () {
    return (
      <>
        <Button basic icon
          title="Back to Top"
          className="ScrollButton"
          onClick={() => window.scrollTo(0, 0)}
        >
          {/* <Icon name="chevron up" /> */}
          <div className="BackToTop">&and;</div>
        </Button>
      </>
    );
  }
};

export default BackToTop;
