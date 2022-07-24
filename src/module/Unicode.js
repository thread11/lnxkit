import React from 'react';
import { Container } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import TextareaAutosize from 'react-textarea-autosize';

class Unicode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      raw_data:  '\\u4e2d\\u6587',
      new_data:  '中文',
      raw_data2: '中文',
      new_data2: '\\u4e2d\\u6587',
    }
  }

  componentDidMount() {
  }

  handleChange(event) {
    this.setState({ raw_data: event.target.value });

    try {
      // \\ -> \, \u -> %u
      let new_data = event.target.value;
      new_data = new_data.replace(/\\\\/g, '\\');
      new_data = new_data.replace(/\\u/g, '%u');
      new_data = unescape(new_data);
      this.setState({ new_data });
    } catch (error) {
      let msg = 'Something weng wrong!!';
      let new_data = event.target.value === '' ? '' : msg;
      this.setState({ new_data });
    }
  }

  handleChange2(event) {
    this.setState({ raw_data2: event.target.value });

    try {
      // %u -> \u
      let new_data2 = event.target.value;
      new_data2 = escape(new_data2);
      new_data2 = new_data2.replace(/%u/g, '\\u');
      new_data2 = new_data2.toLowerCase();
      this.setState({ new_data2 });
    } catch (error) {
      let msg = 'Something weng wrong!!';
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
                          rows="1"
                          autoFocus={false}
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
                  {this.state.new_data}
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
                  {this.state.new_data2}
                </pre>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
    );
  }
};

export default Unicode;
