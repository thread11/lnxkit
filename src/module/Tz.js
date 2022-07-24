import React from 'react';
import { Container } from 'semantic-ui-react';
import { Table } from 'semantic-ui-react';

class Tz extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props)
    this.state = {
      // 2020, Sunday, March 8, 2:00 am
      // 2020, Sunday, November 1, 2:00 am
      // 2021, Sunday, March 14, 2:00 am
      // 2021, Sunday, November 7, 2:00 am
      // 2022, Sunday, March 13, 2:00 am
      // 2022, Sunday, November 6, 2:00 am
      switch_to_summer: true,
      switch_to_winter: false,

      tz_us_la: '12-08 09:00:00 +0000',
      tz_us_nyc: '12-08 09:00:00 +0000',
      tz_gb_ldn: '12-08 09:00:00 +0000',
      tz_fr_par: '12-08 09:00:00 +0000',
      tz_de_ber: '12-08 09:00:00 +0000',
      tz_ru_msk: '12-08 09:00:00 +0000',
      tz_cn_sz: '12-08 09:00:00 +0000',
      tz_jp_tky: '12-08 09:00:00 +0000',

      tz_us_la_offset: '+0000',
      tz_us_nyc_offset: '+0000',
      tz_gb_ldn_offset: '+0000',
      tz_fr_par_offset: '+0000',
      tz_de_der_offset: '+0000',
      tz_ru_msk_offset: '+0000',
      tz_cn_sz_offset: '+0000',
      tz_jp_tky_offset: '+0000',

      tz_pdt_offset: '-0700',
      tz_edt_offset: '-0400',
      tz_bst_offset: '+0100',
      tz_cest_offset: '+0200',
      tz_msk_offset: '+0300',
      tz_cst_offset: '+0800',
      tz_jst_offset: '+0900',

      tz_pst_offset: '-0800',
      tz_est_offset: '-0500',
      tz_gmt_offset: '+0000',
      tz_cet_offset: '+0100',
      tz_msk_offset2: '+0300',
      tz_cst_offset2: '+0800',
      tz_jst_offset2: '+0900',
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.initTimer();
    this.startTimer();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  initTimer() {
    // window.timer.push(t);
    if (typeof window.timer !== 'undefined') {
      for (let i = 0; i < window.timer.length; i++) {
        window.clearTimeout(window.timer[i]);
      }
    } else {
      window.timer = [];
    }
  }

  startTimer() {
    if (this.state.switch_to_summer === true) {
      this.setTime('tz_us_la', this.state.tz_pdt_offset);
      this.setTime('tz_us_nyc', this.state.tz_edt_offset);
      this.setTime('tz_gb_ldn', this.state.tz_bst_offset);
      this.setTime('tz_fr_par', this.state.tz_cest_offset);
      this.setTime('tz_de_ber', this.state.tz_cest_offset);
      this.setTime('tz_ru_msk', this.state.tz_msk_offset);
      this.setTime('tz_cn_sz', this.state.tz_cst_offset);
      this.setTime('tz_jp_tky', this.state.tz_jst_offset);
      this.setState({ tz_us_la_offset: this.state.tz_pdt_offset });
      this.setState({ tz_us_nyc_offset: this.state.tz_edt_offset });
      this.setState({ tz_gb_ldn_offset: this.state.tz_bst_offset });
      this.setState({ tz_fr_par_offset: this.state.tz_cest_offset });
      this.setState({ tz_de_der_offset: this.state.tz_cest_offset });
      this.setState({ tz_ru_msk_offset: this.state.tz_msk_offset });
      this.setState({ tz_cn_sz_offset: this.state.tz_cst_offset });
      this.setState({ tz_jp_tky_offset: this.state.tz_jst_offset });
    } else {
      this.setTime('tz_us_la', this.state.tz_pst_offset);
      this.setTime('tz_us_nyc', this.state.tz_est_offset);
      this.setTime('tz_gb_ldn', this.state.tz_gmt_offset);
      this.setTime('tz_fr_par', this.state.tz_cet_offset);
      this.setTime('tz_de_ber', this.state.tz_cet_offset);
      this.setTime('tz_ru_msk', this.state.tz_msk_offset);
      this.setTime('tz_cn_sz', this.state.tz_cst_offset);
      this.setTime('tz_jp_tky', this.state.tz_jst_offset);
      this.setState({ tz_us_la_offset: this.state.tz_pst_offset });
      this.setState({ tz_us_nyc_offset: this.state.tz_est_offset });
      this.setState({ tz_gb_ldn_offset: this.state.tz_gmt_offset });
      this.setState({ tz_fr_par_offset: this.state.tz_cet_offset });
      this.setState({ tz_de_der_offset: this.state.tz_cet_offset });
      this.setState({ tz_ru_msk_offset: this.state.tz_msk_offset });
      this.setState({ tz_cn_sz_offset: this.state.tz_cst_offset });
      this.setState({ tz_jp_tky: this.state.tz_jst_offset });
    }
  }

  setTime(tz, offset) {
    let today = new Date();
    if (offset.startsWith('-')) {
      let timezone = offset.replace('-0', '').replace('-1', '1').replace('00', '');
      timezone = parseInt(timezone);
      today.setTime(today.getTime() + today.getTimezoneOffset() * 60 * 1000 - timezone * 3600 * 1000);
    } else {
      let timezone = offset.replace('+0', '').replace('+1', '1').replace('00', '');
      timezone = parseInt(timezone);
      today.setTime(today.getTime() + today.getTimezoneOffset() * 60 * 1000 + timezone * 3600 * 1000);
    }

    // let year = today.getFullYear()
    // [0, 11]
    let month = this.formatTime(today.getMonth() + 1);
    let date = this.formatTime(today.getDate());
    let hours = this.formatTime(today.getHours());
    let minutes = this.formatTime(today.getMinutes());
    let seconds = this.formatTime(today.getSeconds());
    let time = month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;

    if (this._isMounted) {
      this.setState({ [tz]: time });
    }

    let that = this;

    setTimeout(function() {
      that.setTime(tz, offset);
    }, 1000);
  }

  formatTime(time) {
    if (time < 10) {
      time = '0' + time;
    }
    return time;
  }

  render() {
    return (
      <>
        <Container className="MyContainer">
          <Container style={{ marginTop: '10px', marginBottom: '-4px', textAlign: 'center' }}>
            <Table unstackable celled compact collapsing style={{ display: 'inline-block' }}>
              <Table.Body>
                <Table.Row textAlign="center">
                  <Table.Cell>
                    <span>{this.state.tz_us_la}</span>
                    <br />
                    <span>L.A., US, {this.state.tz_us_la_offset}</span>
                  </Table.Cell>
                </Table.Row>

                <Table.Row textAlign="center">
                  <Table.Cell>
                    <span>{this.state.tz_us_nyc}</span>
                    <br />
                    <span>NYC, US, {this.state.tz_us_nyc_offset}</span>
                  </Table.Cell>
                </Table.Row>

                <Table.Row textAlign="center">
                  <Table.Cell>
                    <span>{this.state.tz_gb_ldn}</span>
                    <br />
                    <span>LDN, GB, {this.state.tz_gb_ldn_offset}</span>
                  </Table.Cell>
                </Table.Row>

                <Table.Row textAlign="center">
                  <Table.Cell>
                    <span>{this.state.tz_fr_par}</span>
                    <br />
                    <span>PAR, FR, {this.state.tz_fr_par_offset}</span>
                  </Table.Cell>
                </Table.Row>

                <Table.Row textAlign="center">
                  <Table.Cell>
                    <span>{this.state.tz_de_ber}</span>
                    <br />
                    <span>BER, DE, {this.state.tz_de_der_offset}</span>
                  </Table.Cell>
                </Table.Row>

                <Table.Row textAlign="center">
                  <Table.Cell>
                    <span>{this.state.tz_ru_msk}</span>
                    <br />
                    <span>MSK, RU, {this.state.tz_ru_msk_offset}</span>
                  </Table.Cell>
                </Table.Row>

                <Table.Row textAlign="center">
                  <Table.Cell>
                    <span>{this.state.tz_cn_sz}</span>
                    <br />
                    <span>SZ, CN, {this.state.tz_cn_sz_offset}</span>
                  </Table.Cell>
                </Table.Row>

                <Table.Row textAlign="center">
                  <Table.Cell>
                    <span>{this.state.tz_jp_tky}</span>
                    <br />
                    <span>TKY, JP, {this.state.tz_jp_tky_offset}</span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Container>
        </Container>
      </>
    );
  }
}

export default Tz;
