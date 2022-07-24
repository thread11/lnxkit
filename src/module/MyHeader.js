import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import routes from '../global/routes.js';
import withRouter from '../withRouter.js';

class MyHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: undefined,
    };

    this.pathname = undefined;
    if (this.props.router !== undefined) {
      if (this.props.router.location !== undefined) {
        this.pathname = this.props.router.location.pathname;
      }
    }
  }

  handleItemClick = (event, item) => {
    this.setState({ activeItem: item.to });
  }

  setActiveItem(keyword) {
    // this.pathname.match(/^\/keyword($|\/)/)
    // this.pathname.match(/(^\/keyword($|\/)|^\/$)/)
    // let isJson = this.match('json') ? true : false;
    let pattern = '^' + keyword + '($|/)';
    let regexp = new RegExp(pattern);
    if (regexp.test(this.pathname) === true) {
      this.setState({ activeItem: keyword });
    }
  }

  selectItem() {
    if (this.pathname === '/') {
      this.setState({ activeItem: '/json' });
      return
    }
    // this.setActiveItem('/json');
    routes.forEach(route => {
      if (route.isMenu === true) {
        this.setActiveItem(route.path);
      }
    });
  }

  componentDidMount() {
    this.selectItem();
  }

  render() {
    return (
      <div style={{ textAlign: 'center', paddingTop: '40px' }}>
        <Menu stackable compact>
          {/*
          <Menu.Item
            as={Link}
            to="/json"
            active={this.state.activeItem === '/json'}
            onClick={this.handleItemClick}
          >
            JSON
          </Menu.Item>
          */}
          {routes.map((route, key) => {
            if (route.isMenu === true && route.isHidden !== true) {
              return (
                <Menu.Item
                  key={key}
                  as={Link}
                  to={route.path}
                  active={this.state.activeItem === route.path}
                  onClick={this.handleItemClick}
                >
                  {route.text}
                </Menu.Item>
              );
            } else {
              return '';
            }
          })}
        </Menu>
      </div>
    );
  }
};

export default withRouter(MyHeader);
