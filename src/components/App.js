import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Main from './Main';
import AddQuestion from './AddQuestion';
import Leaderboard from './Leaderboard';
import QuestionWrapper from './QuestionWrapper';
import { handleLoadUsers, handleLoadQuestions } from '../actions/index';
import LogIn from './LogIn';
import PageNotFound from './PageNotFound';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleLoadUsers());
    dispatch(handleLoadQuestions());
  }

  signedOutRoutes = () => (
    <Switch>
      <Route component={LogIn} />
    </Switch>
  );

  signedInRoutes = () => (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/add" component={AddQuestion} />
      <Route exact path="/leaderboard" component={Leaderboard} />
      <Route exact path="/questions/:qid" component={QuestionWrapper} />
      <Route component={PageNotFound} />
    </Switch>
  );

  render() {
    const { askToLogin } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          {askToLogin ? this.signedOutRoutes() : this.signedInRoutes()}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ signedUser }) => {
  return {
    askToLogin: signedUser === null,
  };
};

export default connect(mapStateToProps)(App);
