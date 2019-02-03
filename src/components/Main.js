import React, { Component } from 'react';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';
import { changeTab } from '../actions';

class Main extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(changeTab('home'));
  }

  render() {
    const { TabPane } = Tabs;
    const { answeredQuestions, unansweredQuestions } = this.props;
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane
            style={{
              justifyContent: 'center',
            }}
            tab="Unanswered Questions"
            key="1"
          >
            <QuestionList questions={unansweredQuestions} answered={false} />
          </TabPane>
          <TabPane
            style={{
              justifyContent: 'center',
            }}
            tab="Answered Question"
            key="2"
          >
            <QuestionList questions={answeredQuestions} answered />
          </TabPane>
        </Tabs>
        ,
      </div>
    );
  }
}

const mapStateToProps = ({ signedUser, questions, users }) => {
  const allQuestions = Object.values(questions);
  const user = users[signedUser];
  const userAnswers = Object.keys(user.answers);
  const answeredQuestions = allQuestions.filter(q =>
    userAnswers.includes(q.id) ? q : null
  );
  const unansweredQuestions = allQuestions.filter(q =>
    userAnswers.includes(q.id) ? null : q
  );

  return {
    answeredQuestions: answeredQuestions.sort(
      (a, b) => b.timestamp - a.timestamp
    ),
    unansweredQuestions: unansweredQuestions.sort(
      (a, b) => b.timestamp - a.timestamp
    ),
  };
};

export default connect(mapStateToProps)(Main);
