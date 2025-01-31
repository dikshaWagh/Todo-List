import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [listItem, setListItem] = useState([]);

  function handleClick(event) {
    const newInputItem = event.target.value;
    setInputText(newInputItem);
  }

  function addItem() {
    setListItem([...listItem, { text: inputText, completed: false }]);
    setInputText("");
  }

  function removeItem(index) {
    const newUpdateList = listItem.filter((listItem, i) => i !== index);
    setListItem(newUpdateList);
  }

  function checkItem(index) {
    const updatedList = listItem.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setListItem(updatedList);
  }

  return (
    <>
      <div className='ToDo'>
        <h1>To Do List</h1>
        <div className='inputField'>
          <input onChange={handleClick} type='text' value={inputText} />
          <button onClick={addItem}>+</button>
        </div>
        <div className='lists'>
          <ul>
            {listItem.map((item, index) => (
              <div className="items" key={index}>
                <li
                  style={{
                    textDecoration: item.completed ? 'line-through' : 'none',
                    color: item.completed ? 'gray' : 'black',
                  }}
                >
                  {item.text}
                </li>
                <div className="btn1">
                    <button  onClick={() => checkItem(index)}>
                        {item.completed ? 'Undo' : 'Completed'}
                    </button>
                    <button onClick={() => removeItem(index)}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div><hr></hr>
               
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
