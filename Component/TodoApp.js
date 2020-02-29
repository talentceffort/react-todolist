import React, { useState } from 'react';
import TodoList from './TodoList';

const TodoApp = () => {
  const [keyword, setKeyword] = useState('');
  const [choice, setChoice] = useState('전체');

  const search = (e) => {
    setKeyword(e.target.value);
  };

  const submit = () => {
    console.log(keyword);
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      submit();
    }
  };

  const filterList = (e) => {
    setChoice(e.target.value);
  };

  const makeGroup = (e) => {

  }

  return (
    <div className='main'>
      <div
        className='leftDiv'
      >
        <div>
          <input className='search' placeholder="검색" value={keyword} onChange={search} onKeyPress={handleKeyPress} onSubmit={submit} />
        </div>
        {/* <ButtonColletion filterList={filterList} /> */}
        <div style={{ marginRight: '15px', float: 'right' }}>
          <button> 목록 추가 </button>
        </div>
      </div>
      <div
        className='rightDiv'
      >
        <button style={{ float: 'right', margin: '15px'}}> 일정 추가 </button>
        <TodoList choice={choice} />
      </div>
    </div>
  );
};

export default TodoApp;
