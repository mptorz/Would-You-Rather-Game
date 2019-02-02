import React from 'react';
import QCardPreview from './QCardPreview';

export default function QuestionList(props) {
  const { questions, answered } = props;

  return (
    <div
      style={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {questions.map(q => {
        return <QCardPreview key={q.id} question={q} answered={answered} />;
      })}
    </div>
  );
}
