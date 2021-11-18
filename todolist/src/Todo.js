import { ListGroup, ListGroupItem } from "reactstrap";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

export default function Todos(props) {
  const handleNote = (getNote) => {
    $("#note").empty().append(getNote);
    $("#notebox").css("visibility", "visible");
    $("#notebox").css("position", "relative");
  };

  const dismissNote = () => {
    $("#note").empty();
    $("#notebox").css("visibility", "hidden");
    $("#notebox").css("position", "absolute");
  };

  return (
    <ListGroup>
      {props.todolists.map((todoList) => (
        <div className="d-flex justify-content-center">
          <ListGroupItem
            key={todoList.id}
            tag="button"
            style={{ textDecoration: todoList.done ? "line-through" : "" }}
            onClick={() => handleNote(todoList.note)}
            className="align-self-center py-2 w-50 bg-info text-white"
          >
            {todoList.text}
          </ListGroupItem>
          <button
            id="todoDone"
            className="border border-0"
            onClick={() => props.updateTodo(todoList)}
          >
            {todoList.done ? (
              <FontAwesomeIcon
                icon={faTimes}
                className="fas fa-sm text-danger"
              />
            ) : (
              <FontAwesomeIcon
                icon={faCheck}
                className="fas fa-sm text-success"
              />
            )}
          </button>
        </div>
      ))}
      <ListGroupItem id="notebox" className="border border-dark rounded m-5">
        <div id="note" className="mt-1 font-weight-bold text-dark"></div>
        <button
          id="btn"
          className="w-25 mt-2 align-self-center bg-warning border-0"
          onClick={() => dismissNote()}
        >
          done
        </button>
      </ListGroupItem>
    </ListGroup>
  );
}
