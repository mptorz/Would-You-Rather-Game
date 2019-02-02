import React from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';
import { Redirect } from 'react-router-dom';
import QCardResults from './QCardResults';
import QCardVoting from './QCardVoting';

const QuestionWrapper = props => {
  const { author, question, answered, chosenOptionOne, notFound } = props;

  const renderError = () => (
    <div>
      <h1>QUESTION NOT FOUND SORRY</h1>
    </div>
  );

  const renderQuestion = () => (
    <div>
      {answered ? (
        <QCardResults
          author={author}
          question={question}
          chosenOptionOne={chosenOptionOne}
        />
      ) : (
        <QCardVoting author={author} question={question} />
      )}
    </div>
  );
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {notFound ? renderError() : renderQuestion()}
    </div>
  );
};

const mapStateToProps = ({ questions, users, signedUser }, ownProps) => {
  const question = questions[ownProps.match.params.qid];
  if (!question) {
    return { notFound: true };
  }
  const author = users[question.author];
  let answered = false;
  let chosenOptionOne = null;
  if (question.optionOne.votes.includes(signedUser)) {
    answered = true;
    chosenOptionOne = true;
  } else if (question.optionTwo.votes.includes(signedUser)) {
    answered = true;
    chosenOptionOne = false;
  }
  return {
    author,
    question,
    answered,
    chosenOptionOne,
  };
};
export default connect(mapStateToProps)(QuestionWrapper);
