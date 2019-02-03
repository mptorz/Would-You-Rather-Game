import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../actions';

const { SubMenu } = Menu;

class Navigation extends Component {
  getUserName = () => {
    return 'Mikolaj Torz';
  };

  signOut = () => {
    const { dispatch } = this.props;
    dispatch(logOut());
  };

  render() {
    const { signedIn, userName, tab } = this.props;
    return (
      <Menu selectedKeys={[tab]} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="home" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item disabled={!signedIn} key="add">
          <Link to="/add">
            <Icon type="plus" />
            Add Question
          </Link>
        </Menu.Item>
        <Menu.Item disabled={!signedIn} key="leaderboard">
          <Link to="/leaderboard">
            <Icon type="trophy" />
            Leaderboard
          </Link>
        </Menu.Item>

        {signedIn && (
          <SubMenu
            title={
              <span>
                <Icon type="user" />
                {userName}
              </span>
            }
          >
            <Menu.Item onClick={() => this.signOut()} key="user">
              <Link to="/">
                <Icon type="user" />
                Log Out
              </Link>
            </Menu.Item>
          </SubMenu>
        )}
      </Menu>
    );
  }
}

const mapStateToProps = ({ users, signedUser, navigation }) => {
  return {
    signedIn: signedUser,
    userName: users[signedUser] ? users[signedUser].name : null,
    tab: navigation,
  };
};

export default connect(mapStateToProps)(Navigation);
