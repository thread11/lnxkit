import React from 'react';
import { Container } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import TextareaAutosize from 'react-textarea-autosize';

class Time extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      raw_data:  '-28000000',
      new_data:  '1970-01-01 00:00:00',
      raw_data2: '1970-01-01 00:00:00',
      new_data2: '-28800000',
    }
  }

  componentDidMount() {
    let now = Date.now();

    let timestamp = now.toString();

    let today = new Date(now);
    let year = today.getFullYear();
    let month = this.formatTime(today.getMonth() + 1);
    let date = this.formatTime(today.getDate());
    let hours = this.formatTime(today.getHours());
    let minutes = this.formatTime(today.getMinutes());
    let seconds = this.formatTime(today.getSeconds());
    let YYYYMMDD = year + '-' + month + '-' + date;
    let HHmmss = hours + ':' + minutes + ':' + seconds;
    let datetime = YYYYMMDD + ' ' + HHmmss;

    let datetime2 = datetime;
    let timestamp2 = Date.parse(datetime2.replace(' ', 'T')).toString();

    this.setState({ raw_data: timestamp });
    this.setState({ new_data: datetime });
    this.setState({ raw_data2: datetime2 });
    this.setState({ new_data2: timestamp2 });
  }

  formatTime(time) {
    if (time < 10) {
      time = '0' + time;
    }
    return time;
  }

  handleChange(event) {
    this.setState({ raw_data: event.target.value });

    try {
      let value = event.target.value;
      // value = value.trim();
      value = value.replace(/^\s*|\s*$/g, '');

      if (isNaN(value)) {
        throw new Error();
      }

      if (value.length === 10) {
        value = value + '000';
      }

      if (value.length === 13) {
        let newDate = new Date(parseInt(value));
        let year = newDate.getFullYear();
        let month = this.formatTime(newDate.getMonth() + 1);
        let date = this.formatTime(newDate.getDate());
        let hours = this.formatTime(newDate.getHours());
        let minutes = this.formatTime(newDate.getMinutes());
        let seconds = this.formatTime(newDate.getSeconds());
        let YYYYMMDD = year + '-' + month + '-' + date;
        let HHmmss = hours + ':' + minutes + ':' + seconds;
        let datetime = YYYYMMDD + ' ' + HHmmss;
        this.setState({ new_data: datetime });
      } else {
        throw new Error();
      }
    } catch (error) {
      let msg = 'Something weng wrong!!';
      let new_data = event.target.value === '' ? '' : msg;
      this.setState({ new_data });
    }
  }

  handleChange2(event) {
    this.setState({ raw_data2: event.target.value });
    try {
      let value = Date.parse(event.target.value.replace(' ', 'T')).toString();

      if (isNaN(value)) {
        throw new Error();
      }

      let new_data2 = value.toString();

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

export default Time;
