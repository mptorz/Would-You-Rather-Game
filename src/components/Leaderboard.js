import React from 'react';
import { connect } from 'react-redux';
import { List, Avatar } from 'antd';

const Leaderboard = props => {
  return (
    <div
      style={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        margin: 50,
      }}
    >
      <List
        style={{ width: 500 }}
        bordered
        itemLayout="horizontal"
        dataSource={props.users}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.name}
              avatar={<Avatar src={item.avatarURL} />}
              description={`${item.name} asked ${
                item.questions.length
              } questions and answered ${
                Object.keys(item.answers).length
              } questions. That gives him/her a score of ${item.score}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const usersWithScore = Object.values(users).map(user =>
    Object.assign(user, {
      score: Object.keys(user.answers).length + user.questions.length,
    })
  );
  const usersSorted = usersWithScore.sort((a, b) => b.score - a.score);
  return { users: usersSorted };
};

export default connect(mapStateToProps)(Leaderboard);
