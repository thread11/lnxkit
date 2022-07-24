import React from 'react';
import { Button } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import TextareaAutosize from 'react-textarea-autosize';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import BackToTop from './BackToTop.js';

class Json extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // raw_data: '[{"x": 1, "y": 2, "z": 3}]',
      // new_data:  [{"x": 1, "y": 2, "z": 3}] ,
      raw_data: '[{"x": 1}]',
      new_data:  [{"x": 1}] ,
      raw_data2: '[\n  {\n    "x": 1\n  }\n]',
      new_data2:  [{"x": 1}] ,
      copied: false,
    };
  }

  componentDidMount() {
  }

  handleChange(event) {
    this.setState({ raw_data: event.target.value });

    try {
      let new_data = JSON.parse(event.target.value);
      this.setState({ new_data });
    } catch (error) {
      let msg = 'Invalid syntax!!';
      let new_data = event.target.value === '' ? '' : msg;
      this.setState({ new_data });
    }
  }

  handleChange2(event) {
    this.setState({ raw_data2: event.target.value });

    try {
      let new_data2 = JSON.parse(event.target.value);
      this.setState({ new_data2 });
    } catch (error) {
      let msg = 'Invalid syntax!!';
      let new_data2 = event.target.value === '' ? '' : msg;
      this.setState({ new_data2 });
    }
  }

  render() {
    return (
      <>
        <Container className="MyContainer">
          <Grid columns={2} stackable divided>
            <Grid.Row stretched>
              <Grid.Column>
                <Grid columns={2} stackable>
                  <Grid.Row stretched>
                    <Grid.Column>
                    </Grid.Column>

                    <Grid.Column>
                      <Form>
                        <TextareaAutosize
                          autoFocus={false}
                          rows="1"
                          // minRows={13}
                          minRows={5}
                          value={this.state.raw_data}
                          onChange={this.handleChange.bind(this)}
                        />
                      </Form>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>

              <Grid.Column>
                <pre className="WrapAndBreak">
                  {(
                    typeof this.state.new_data === 'object'
                  ) ? (
                    JSON.stringify(this.state.new_data, null, 2)
                  ) : (
                    this.state.new_data
                  )}
                </pre>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Grid columns={2} stackable divided>
            <Grid.Row stretched>
              <Grid.Column>
                <Grid columns={2} stackable>
                  <Grid.Row stretched>
                    <Grid.Column>
                    </Grid.Column>

                    <Grid.Column>
                      <Form>
                        <TextareaAutosize
                          autoFocus={false}
                          rows="1"
                          minRows={5}
                          value={this.state.raw_data2}
                          onChange={this.handleChange2.bind(this)}
                        />
                      </Form>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>

              <Grid.Column>
                <pre className="WrapAndBreak">
                  {(
                    typeof this.state.new_data2 === 'object'
                  ) ? (
                    JSON.stringify(this.state.new_data2, null, 0)
                  ) : (
                    this.state.new_data2
                  )}
                </pre>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <CopyToClipboard
            text={
              (
                typeof this.state.new_data === 'object'
              ) ? (
                JSON.stringify(this.state.new_data)
              ) : (
                this.state.new_data
              )
            }
            onCopy={() => {
              this.setState({ copied: true });
              setTimeout(() => {
                this.setState({ copied: false });
              }, 200);
            }}
          >
            <Button basic icon className="Copy">
              { this.state.copied === false ? 'COPY' : 'COPIED' }
            </Button>
          </CopyToClipboard>

          <BackToTop />
        </Container>
      </>
    );
  }
};

export default Json;
