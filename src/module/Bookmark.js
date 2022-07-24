import React from 'react';
import { Button } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';

class BkButton extends React.Component {
  constructor(props) {
    super(props);

    this.style = this.props.style;
    this.href = this.props.href;
    this.text = this.props.text;

    if (this.style === undefined) {
      this.style = {
        margin: '0 4px 8px 4px',
      };
    }
    if (this.href === undefined) {
      this.href = '';
    }
    if (this.text === undefined) {
      this.text = '';
    }
  }

  render() {
    return (
      <>
        <Button
          basic
          style={this.style}
          target="_blank"
          rel="noopener noreferrer"
          as="a"
          href={this.href}
        >
          {this.text}
        </Button>
      </>
    );
  }
};

class Bookmark extends React.Component {
  render() {
    return (
      <>
        <Container className="MyContainer">
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-block', textAlign: 'center' }}>
              <table>
                <tbody>
                  <tr>
                    <td align="left">
                      {/* <BkButton href="https://www.dnsleaktest.com/" text="DNSLEAK" /> */}
                      <BkButton href="https://browserleaks.com/dns" text="DNSLEAK" />
                    </td>
                    <td align="right">
                      {/* <BkButton href="https://wtfismyip.com/" text="WTFIP" /> */}
                      <BkButton href="https://myip.wtf/" text="IPLEAK" />
                    </td>
                  </tr>
                  <tr>
                    <td align="left">
                      <BkButton href="https://www.google.com/ncr" text="GOOGLE" />
                    </td>
                    <td align="right">
                      <BkButton href="https://thepiratebay.org/search.php?q=top100:300" text="TPB" />
                    </td>
                  </tr>
                  <tr>
                    <td align="left">
                      <BkButton href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/" text="UBLOCK" />
                    </td>
                    <td align="right">
                      {/* <BkButton href="https://translate.google.cn/?sl=en&tl=zh-CN&op=translate" text="TRANS" /> */}
                      <BkButton href="https://translate.google.com/?sl=en&tl=zh-CN&op=translate" text="TRANS" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Bookmark;
