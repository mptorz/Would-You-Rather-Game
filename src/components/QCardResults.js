import React from 'react';
import { Card, Radio, Progress, Avatar, List } from 'antd';

export default props => {
  const { question, author, chosenOptionOne } = props;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const tie = optionOneVotes === optionTwoVotes;
  const data = [
    {
      title: question.optionOne.text,
      votes: optionOneVotes,
      totalVotes,
      winner: () =>
        optionOneVotes > optionTwoVotes ? <b>WINNER</b> : <b>LOOSER</b>,
      chosen: chosenOptionOne,
      tie,
    },
    {
      title: question.optionTwo.text,
      votes: optionTwoVotes,
      totalVotes,
      winner: () =>
        optionTwoVotes > optionOneVotes ? <b>WINNER</b> : <b>LOOSER</b>,
      chosen: !chosenOptionOne,
      tie,
    },
  ];
  return (
    <div style={{ margin: 15 }}>
      <Card
        title={
          <span>
            <Avatar src={author.avatarURL} />

            {`  ${author.name} asks...`}
          </span>
        }
        style={{ width: 400 }}
      >
        <h3>Would you rather?</h3>
        <div>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={item.title}
                  description={
                    <div>
                      <div style={{ display: 'flex' }}>
                        <Radio disabled defaultChecked={item.chosen} />
                        <Progress
                          status="normal"
                          percent={Math.round(
                            (item.votes / item.totalVotes) * 100
                          )}
                        />
                        <span>{`    (${item.votes}/${item.totalVotes})`}</span>
                      </div>
                      <div>{item.tie ? <b>It is a TIE</b> : item.winner()}</div>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </div>
      </Card>
    </div>
  );
};
