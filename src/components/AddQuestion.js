import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion, changeTab } from '../actions';

class AddQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    disableButtonOne: true,
    disableButtonTwo: true,
    goBack: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(changeTab('add'));
  }

  handleChangeOne = e => {
    if (e === '') {
      this.setState({ optionOne: e, disableButtonOne: true });
    } else {
      this.setState({ optionOne: e, disableButtonOne: false });
    }
  };

  handleChangeTwo = e => {
    if (e === '') {
      this.setState({ optionTwo: e, disableButtonTwo: true });
    } else {
      this.setState({ optionTwo: e, disableButtonTwo: false });
    }
  };

  handleOnClick = () => {
    const { optionOne, optionTwo } = this.state;
    const { signedUser, dispatch } = this.props;
    dispatch(
      handleAddQuestion({
        author: signedUser,
        optionOneText: optionOne,
        optionTwoText: optionTwo,
      })
    );
    dispatch(changeTab('home'));
    this.setState({ goBack: true });
  };

  render() {
    const {
      disableButtonOne,
      disableButtonTwo,
      optionOne,
      optionTwo,
      goBack,
    } = this.state;
    return goBack ? (
      <Redirect to="/" />
    ) : (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: 400, margin: 40 }}>
          <h1>Would you rather?</h1>
          <Input
            onChange={event => this.handleChangeOne(event.target.value)}
            placeholder="Option 1"
            value={optionOne}
          />
          <h4>Or</h4>
          <Input
            onChange={event => this.handleChangeTwo(event.target.value)}
            placeholder="Option 2"
            value={optionTwo}
          />
          <Button
            disabled={disableButtonOne || disableButtonTwo}
            style={{ margin: 20 }}
            onClick={() => this.handleOnClick()}
          >
            Add Question
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ signedUser }) => ({ signedUser });

export default connect(mapStateToProps)(AddQuestion);
