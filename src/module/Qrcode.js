import React from 'react';
import { Container } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import QRCode from 'qrcode.react';
import TextareaAutosize from 'react-textarea-autosize';

class Qrcode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '123',
    };
  }

  componentDidMount() {
  }

  handleChange(event) {
    // Uncaught Error: code length overflow. (10212>10208)
    // 10208 bits / 8 = 1276 bytes / 3 = 425
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <>
        <Container className="MyContainer">
          <Grid columns={2} stackable divided>
            <Grid.Row stretched>
              <Grid.Column>
                <Grid columns={2} stackable>
                  <Grid.Row >
                    <Grid.Column>
                    </Grid.Column>

                    <Grid.Column>
                      <Form>
                        <TextareaAutosize
                          autoFocus={false}
                          rows="1"
                          minRows={13}
                          value={this.state.text}
                          onChange={this.handleChange.bind(this)}
                          style={{ widthx: '50%', floatx:'right' }}
                        />
                      </Form>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>

              <Grid.Column>
                <QRCode
                  value={this.state.text}
                  size={255}
                  bgColor={"#FFFFFF"}
                  fgColor={"#000000"}
                  level={"H"}
                  includeMargin={false}
                  renderAs={"svg"}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
    );
  }
};

export default Qrcode;
