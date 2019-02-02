import React, { Component } from 'react';
import { Card, Radio, Button, Avatar, List } from 'antd';
import { connect } from 'react-redux';
import { vote } from '../actions';

class QCardVoting extends Component {
  state = { selected: null, disableButton: true };

  onChange = value => {
    this.setState({ selected: value, disableButton: false });
  };

  handleVote = () => {
    const { question, signedUser, dispatch } = this.props;
    if (this.state.selected) {
      dispatch(vote(signedUser, question.id, this.state.selected));
    }
  };

  render() {
    const { question, author } = this.props;
    const RadioGroup = Radio.Group;
    const data = [
      {
        title: question.optionOne.text,
        value: 'optionOne',
      },
      {
        title: question.optionTwo.text,
        value: 'optionTwo',
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
            <RadioGroup
              style={{ width: '100%' }}
              onChange={event => this.onChange(event.target.value)}
              value={this.state.selected}
            >
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={
                        <div>
                          <Radio value={item.value}> {item.title}</Radio>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </RadioGroup>
          </div>
          <Button onClick={() => this.handleVote()}>VOTE</Button>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ signedUser }) => {
  return { signedUser };
};

export default connect(mapStateToProps)(QCardVoting);
