import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Image, Menu,} from 'semantic-ui-react';
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
    const {authenticated} = this.props;
    const LoginButton = (
        <Menu.Item
        >
          <Button.Group size="mini">
            <Button to="/login" as={Link} basic positive>Sign In</Button>
            <Button to="/register" as={Link} basic color="orange">Sign Up</Button>
          </Button.Group>
        </Menu.Item>);
    const ToursDropdown = (
        <div style={{display: 'inherit'}}>
          <Menu.Item>
            <Button.Group size="mini">
              <Button to="/create-tour" basic secondary as={Link}>Create a Tour</Button>
              <Button basic color="orange" onClick={() => this.props.signOut()}>Sign Out</Button>
            </Button.Group>
          </Menu.Item>
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
