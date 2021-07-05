function TODOList() {
  const { useState, useCallback } = React;
  const [todos, setTodos] = useState(['吃饭']);
  const [todoItem, setTodoItem] = useState('');
  const addTodo = useCallback(() => {
    setTodos([...todos, todoItem]);
    setTodoItem('');
  }, [todoItem]);
  const onChange = (e) => {
    setTodoItem(e.target.value);
  };
  return React.createElement('div', { className: 'todo-list' },
    React.createElement('h1', null, 'TODO'),
    React.createElement('ul', null,
      ...todos.map((item) => React.createElement('li', null, item))),
    React.createElement('div', { className: 'add-item-block' },
      React.createElement('label', { htmlFor: 'todo' }, '今天要做什么呢'),
      React.createElement('input', { onChange, value: todoItem, id: 'todo' }),
      React.createElement('button', { onClick: addTodo, type: 'button' }, 'Add TODO')));
}

ReactDOM.render(React.createElement(TODOList, null), document.getElementById('root'));
