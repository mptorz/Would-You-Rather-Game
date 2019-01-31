import React from 'react';
import QCardPreview from './QCardPreview';

export default function QuestionList(props) {
  return (
    <div
      style={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.questions.map(q => {
        return (
          <QCardPreview
            key={q.id}
            // authorId={q.author}
            // optionOne={q.optionOne.text}
            // optionTwo={q.optionTwo.text}
            question={q}
            answered={props.answered}
          />
        );
      })}
    </div>
  );
}
