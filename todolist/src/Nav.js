import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faHome } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
import AllTodos from "./AllTodos";

function Nav(props) {
  return (
    <div className="header bg-dark">
      <Router>
        <ul className="nav mx-2 mb-4">
          <li>
            <Link to="/">
              <FontAwesomeIcon
                icon={faHome}
                className="fas fa-2x my-3 mr-2 text-white"
              />
            </Link>
          </li>
          <li>
            <Link to="/allLists">
              <FontAwesomeIcon
                icon={faClipboardList}
                className="fas fa-2x my-3 text-white"
              />
            </Link>
          </li>
        </ul>
        {
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/allLists">
              <AllTodos onSort={props.onSort} lists1={props.lists1} lists2={props.lists2} sortType={props.sortType} listNum={props.listNum}/>
            </Route>
          </Switch>
        }
      </Router>
    </div>
  );
}

export default Nav;
