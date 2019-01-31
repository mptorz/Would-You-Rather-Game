import React from 'react';
import { Card, Row, Col, Avatar } from 'antd';
import { connect } from 'react-redux';

const QCardResults = props => {
  const { questionId, users } = props;
  const author = users[authorId];
  return (
    <div style={{ margin: 15 }}>
      <Card
        title={
          <span>
            <Avatar src={author.avatarURL} />

            {`  ${author.name} asks...`}
          </span>
        }
        extra={<a href="#">Vote</a>}
        style={{ width: 300 }}
      >
        <h3>Would you rather?</h3>
        <div>
          <Col>
            <Row>{optionOne}</Row>
            <Row>
              <b>Or...</b>
            </Row>
            <Row>{optionTwo}</Row>
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

export default connect(mapStateToProps)(QCardResults);
