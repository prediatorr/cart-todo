
import "./App.css";
import React, { useState } from "react";

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const [checked, setChecked] = useState(0);

  function addActivity() {
    // setListData([...listData,activity])
    // console.log(listData)
    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setListData(updatedListData);
  }

  function removeAll() {
    setListData([]);
  }

  function handleChange(e) {
    console.log(e.target.checked)
    if (e.target.checked===true) {
      setChecked(checked + 1);
    } else {
      setChecked(checked - 1);
    }
    console.log(checked)
  }

  return (
    <div className="container">
      <div className="subcontainer">
        <div className="header">Todo List</div>
        <input
          className="input"
          type="text"
          placeholder="Add activitiy"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity} className="add-btn">
          Add
        </button>
        <h2 className="">Here is your List:</h2>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <div className="lists" key={i}>
                <div className="listdata">{data}</div>
                <input value="test" type="checkbox" onChange={handleChange} />
                <button className="remove bg-red-400 rounded-lg" onClick={() => {removeActivity(i);
                setChecked(checked - 1)
                }}>
                  remove
                </button>
              </div>
            );
          })}
          NO of completed  task: {checked}
        {listData.length >= 1 && (
          <button className="remove bg-red-400 rounded-lg" onClick={removeAll}>
            Remove All
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoList;
