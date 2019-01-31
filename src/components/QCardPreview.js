import React from 'react';
import { Card, Row, Col, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const QCardPreview = props => {
  const { question, users, answered } = props;
  const author = users[question.author];
  return (
    <div style={{ margin: 15 }}>
      <Card
        title={
          <span>
            <Avatar src={author.avatarURL} />

            {`  ${author.name} asks...`}
          </span>
        }
        extra={
          <Link to={`/questions/${question.id}`}>
            {answered ? 'See Details' : 'Vote'}
          </Link>
        }
        style={{ width: 300 }}
      >
        <h3>Would you rather?</h3>
        <div>
          <Col>
            <Row>{question.optionOne.text}</Row>
            <Row>
              <b>Or...</b>
            </Row>
            <Row>{question.optionTwo.text}</Row>
          </Col>
        </div>
      </Card>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(QCardPreview);
