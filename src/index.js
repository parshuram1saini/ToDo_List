import React, { useState } from "react";
import ReactDOM from "react-dom";
import Todoaddlist from "./todoaddlist";
import "./style.css";

function TodoForm() {
  const [title, settitle] = useState("");
  const [textarea, setTextarea] = useState("");

  //  handle title input........
  const handletitle = (e) => {
    settitle(e.target.value);
  };

  //  handle text input ........
  const handletext = (e) => {
    setTextarea(e.target.value);
  };
  // console.log(title);
  const [data, setData] = useState([
    { title: "parshuram", textarea: "first project" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const objform = {
      title,
      textarea,
    };
    data.push(objform);
    setData(data);
    settitle("");
    setTextarea("");
  };

  const handleDelete = (id) => {
    const newlist = data.filter((item, index) => {
      return item.title + index != id;
    });
    setData(newlist);
  };

  const [mystyle, setMystyle] = useState({
    color: "#222", //black
    backgroundColor: "#e2e8f0", //color white
  });

  const [btn, setBtn] = useState("Enable dark mode");
  const handleMode = () => {
    console.log("mode is changed");
    if (mystyle.color === "#222") {
      setMystyle({
        color: "#e2e8f0",
        backgroundColor: "#222",
      });
      setBtn("Disable dark mode");
    } else {
      setMystyle({
        color: "#222",
        backgroundColor: "#e2e8f0",
      });
      setBtn("Enable dark mode");
    }
  };

  return (
    <div className="main" style={mystyle}>
      <button
        id="light-button"
        onClick={handleMode}
        className="ui inverted primary button"
      >
        {btn}
      </button>
      <div className="inputfield" style={mystyle}>
        <form id="formset" style={mystyle} className="ui form">
          <div>
            <h1 style={mystyle}>ToDo LIST</h1>
          </div>
          <div>
            <div className="ui right labeled left icon input">
              <i htmlFor="title" className="tags icon"></i>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => handletitle(e)}
                placeholder="Enter text...."
              ></input>
              <a htmlFor="title" className="ui tag label">
                Add Title
              </a>
            </div>
            <div>
              <div id="input" className="ui right labeled left icon input">
                <i htmlFor="textarea" className="tags icon"></i>
                <input
                  type="text"
                  htmlFor="textarea"
                  value={textarea}
                  onChange={(e) => handletext(e)}
                  placeholder="Enter message...."
                ></input>
                <a htmlFor="textarea" className="ui tag label">
                  Add Text
                </a>
              </div>
            </div>
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            className="ui inverted green button"
          >
            Add Item <i className="edit icon"></i>
          </button>
        </form>
      </div>
      <div className="yournote" style={mystyle}>
        Your ToDo List
      </div>
      ;{/* // show items list of UI......................................... */}
      <Todoaddlist
        dark={mystyle}
        listitem={data}
        handleremove={(e) => handleDelete(e)}
      />
    </div>
  );
}

ReactDOM.render(<TodoForm />, document.getElementById("root"));
