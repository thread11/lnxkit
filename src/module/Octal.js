import React from 'react';
import { Container } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import TextareaAutosize from 'react-textarea-autosize';

class Octal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      raw_data:  '\\344\\270\\255\\346\\226\\207',
      new_data:  '中文',
      raw_data2: '中文',
      new_data2:  '\\344\\270\\255\\346\\226\\207',
    }
  }

  componentDidMount() {
  }

  handleChange(event) {
    this.setState({ raw_data: event.target.value });

    try {
      let new_data = event.target.value.replace(/\\\\/g, '\\');
      const matches = new_data.match(/(\\\d{3}){3}/g);
      if (matches) {
        matches.forEach(match => {
          let result = '';
          let fields = match.split('\\');
          fields.forEach(field => {
            if (field !== '') {
              result += '%' + parseInt(field, 8).toString(16);
            }
          });
          new_data = new_data.replace(match, decodeURI(result));
        });
      }
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
      let new_data2 = encodeURI(event.target.value).toLowerCase();
      const matches = new_data2.match(/(%\w{2}){3}/g);
      if (matches) {
        matches.forEach(match => {
          let result = '';
          let fields = match.split('%');
          fields.forEach(field => {
            if (field !== '') {
              result += '\\' + parseInt(field, 16).toString(8);
            }
          });
          new_data2 = new_data2.replace(match, decodeURI(result));
        });
      }
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
                          autoFocus={false}
                          rows="1"
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

export default Octal;
