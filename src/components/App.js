import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Main from './Main';
import AddQuestion from './AddQuestion';
import Leaderboard from './Leaderboard';
import QuestionWrapper from './QuestionWrapper';
import { handleLoadUsers, handleLoadQuestions } from '../actions/index';
import LogIn from './LogIn';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleLoadUsers());
    this.props.dispatch(handleLoadQuestions());
  }

  signedOutRoutes = () => (
    <Switch>
      <Route exact path="/" component={LogIn} />
      <Redirect from="*" to="/" />
    </Switch>
  );

  signedInRoutes = () => (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/add" component={AddQuestion} />
      <Route exact path="/leaderboard" component={Leaderboard} />
      <Route exact path="/questions/:qid" component={QuestionWrapper} />
      <Redirect from="*" to="/" />
    </Switch>
  );

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          {this.props.askToLogin
            ? this.signedOutRoutes()
            : this.signedInRoutes()}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    askToLogin: state.signedUser === null,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getUserData: () => dispatch(handleLoadUsers()),
//     getQuestionData: () => dispatch(handleLoadQuestions()),
//   };
// };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(App);
