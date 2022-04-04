import React from "react";

export default function Todoaddlist(props) {
  console.log(props.dark);
  const strikeCheck = (e, index) => {
    if (e.target.checked) {
      document.getElementById(`id${index}`).style.textDecoration =
        "line-through";
      document.getElementById(`text${index}`).style.textDecoration =
        "line-through";
    } else {
      document.getElementById(`id${index}`).style.textDecoration = "none";
      document.getElementById(`text${index}`).style.textDecoration = "none";
    }
  };

  return (
    <div>
      <div className="flexfield" style={props.dark}>
        {props.listitem.map((value, index) => {
          return (
            <div key={index} id={`${value.title + index}`} className="carditem">
              <div id={`text${index}`} style={props.dark} className="ui cards">
                <div className="card" style={props.dark}>
                  <div className="content" style={props.dark}>
                    <div className="checktitle">
                      <div>
                        <h1 id={`id${index}`} style={props.dark}>
                          {value.title}
                        </h1>
                        <p style={props.dark}>{value.textarea}</p>
                      </div>
                      <div>
                        <div className="margin">
                          <div
                            className="  ui left floated compact segment"
                            style={{ broder: "2px aqua" }}
                          >
                            <div className="ui fitted toggle checkbox">
                              <input
                                type="checkbox"
                                onChange={(e) => {
                                  strikeCheck(e, index);
                                }}
                              ></input>
                              <label></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ui two button">
                    <div>
                      <button
                        className="ui red basic button"
                        id={index}
                        onClick={() => props.handleremove(value.title + index)}
                      >
                        Delete
                      </button>
                      <i className="trash icon" style={{ color: "red" }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
