import Board from "./Board";
import Button from "./Button";
import User from "./User";

export interface ShowBoardProps {
  user: User;
  author: User;
  board: Board;
}


const ShowBoard = ({ user, author, board }: ShowBoardProps) => {
  return (
    <>
      <h1 style={{ color: "#E5EAF5" }}>Show Board</h1>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        Title
        <div style={{ width: "300px", height: "40px", borderRadius: "20px", backgroundColor: "#A4A6AF", textAlign: "center" }}>
          {board.title}
        </div>
        Description
        <div style={{ width: "300px", height: "40px", borderRadius: "20px", backgroundColor: "#A4A6AF", textAlign: "center" }}>
          {board.description}
        </div>
        Author
        <div style={{ width: "300px", height: "40px", borderRadius: "20px", backgroundColor: "#A4A6AF", textAlign: "center" }}>
          {author.username}
        </div>
        <div style={{ marginTop: "40px" }}>
          <Button title="Back"/>
          <Button title="Edit"/>
        </div>
      </form>
    </>
  );
}

export default ShowBoard;