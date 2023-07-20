import Board from "../Board";
import { StyledButton } from "../components/StyledButton";
import { StyledInput } from "../components/StyledInput";
import User from "../User";

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
        <StyledInput type='text' placeholder={board.title} disabled/>
        Description
        <StyledInput type='text' placeholder={board.description} disabled/>
        Author
        <StyledInput type='text' placeholder={author.username} disabled/>
        <div style={{ marginTop: "40px" }}>
          <StyledButton>Back</StyledButton>
          <StyledButton>Edit</StyledButton>
        </div>
      </form>
    </>
  );
}

export default ShowBoard;