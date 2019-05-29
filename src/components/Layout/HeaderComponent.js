import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Button,
  Image,
  Menu, Dropdown,
} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {signOut} from '../../actions/authActions';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, {name}) {
    this.setState({activeItem: name});
  }

  render() {
    const tourOptions = [
      {
        key: 'Create Tour',
        text: 'Create A Tour',
        value: 'CreateTour',
      },
      {
        key: 'Logout',
        text: 'Sign Out',
        value: 'SignOut',
      },
    ];
    const {activeItem} = this.state;
    const {authenticated} = this.props;
    const LoginButton = (
        <Menu.Item
            name="auth"
            active={activeItem === 'auth'}
            onClick={this.handleItemClick}
        >
          <Button.Group size="mini">
            <Link to="/login">
              <Button>Signin</Button>
            </Link>

            <Button.Or/>
            <Link to="/register">
              <Button positive>Signup</Button>
            </Link>
          </Button.Group>
        </Menu.Item>);
    const ToursDropdown = (
        <div style={{display: 'inherit'}}>
          <Menu.Item
              name="create-tour"
              active={activeItem === 'create-tour'}
          >
            <Link to="/create-tour">
              <Button size="tiny">Create A Tour</Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Button size="tiny" negative onClick={() => this.props.signOut()}>Sign Out</Button>
          </ Menu.Item>
        </div>

    );
    return (
        <Menu secondary>
          <div as={Link} to="/">
            <Image
                className="branner"
                size="tiny"
                circular
                centered
                as={Link}
                to="/"
                src={require('../../assets/images/logo.png')}
            />
          </div>

          <Menu.Menu position="right">
            {
              authenticated ? ToursDropdown : LoginButton
            }
          </Menu.Menu>
        </Menu>
    );
  }
}

export const mapStateToProps = ({auth}) => {
  return {
    authenticated: auth.authenticated,
  };
};

export default connect(
    mapStateToProps,
    {signOut}
)(HeaderComponent);
