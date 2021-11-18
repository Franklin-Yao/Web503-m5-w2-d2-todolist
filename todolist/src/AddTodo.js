import React from "react";

function AddTodo(props) {
  const addTodoRef = React.useRef();
  const addNoteRef = React.useRef();
  const submit = (e) => {
    e.preventDefault();
    const currentItem = props.currentList;
    const text = e.target.elements.addTodoItem.value;
    const note = e.target.elements.addTodoNote.value;
    const newTodoItem = {
      id: 4,
      text: text,
      note: note,
      done: false
    };
    props.addItem(newTodoItem, currentItem);
    addTodoRef.current.value = "";
    addNoteRef.current.value = "";
  };

  return (
    <div className="border border-dark m-4 p-3">
      <form onSubmit={submit}>
        <input
          className="d-block d-sm-inline my-2 mt-3 mx-auto mx-sm-2"
          type="text"
          name="addTodoItem"
          ref={addTodoRef}
          placeholder="Add Todo Item"
        />
        <input
          className="d-block d-sm-inline my-2 mt-3 mx-auto mx-sm-2"
          type="text"
          name="addTodoNote"
          ref={addNoteRef}
          placeholder="Add Todo Note"
        />
        <button className="d-block d-sm-inline my-3 mx-auto mx-sm-2">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
