import React from 'react';

const TodoList = ({ choice }) => {

  console.log(choice)
  
  let title;

  switch (choice) {
    case 'all':
      title = '전체';
      break;
    case 'tomorrow':
      title = '내일';
      break;
    case 'today':
      title = '오늘';
      break;
    case 'bookmark':
      title = '깃발 표시됨';
      break;
    default:
  }

  return (
    <div>
      <div style={{ display: 'block' }}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default TodoList;
