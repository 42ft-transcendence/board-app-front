import Button from "../components/Button";
import { StyledInput } from "../components/StyledInput";
import User from "../User";

export interface CreateBoardProps {
  user: User;
}


const CreateBoard = ({user}: CreateBoardProps) => {
  return (
    <>
      <h1 style={{ color: "#E5EAF5" }}>Create Board</h1>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        Title
        <StyledInput type="text" placeholder="title" />
        Description
        <StyledInput type='text' placeholder='description' />
        Author
        <StyledInput type='text' placeholder={user.username} disabled/>
        <div style={{ marginTop: "40px" }}>
          <Button title="Cancel"/>
          <Button title="Create"/>
        </div>
      </form>
    </>
  );
}

export default CreateBoard;