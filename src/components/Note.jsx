import react from "react";

function Note(props) {
  function handleClick() {
      props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick} style={{backgroundColor: "white"}}>Delete</button>
    </div>
  );
}

export default Note;
