import Button from "./Button";
import User from "./User";

export interface CreateBoardProps {
  user: User;
}


const CreateBoard = ({user}: CreateBoardProps) => {
  return (
    <>
      <h1 style={{ color: "#E5EAF5" }}>Create Board</h1>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        Title
        <input style={{ width: "300px", height: "40px", borderRadius: "20px", backgroundColor: "#A4A6AF", textAlign: "center" }} type="text" placeholder="title"/>
        Description
        <input style={{ width: "300px", height: "40px", borderRadius: "20px", backgroundColor: "#A4A6AF", textAlign: "center" }} type="text" placeholder="description"/>
        Author
        <div style={{ width: "300px", height: "40px", borderRadius: "20px", backgroundColor: "#A4A6AF", textAlign: "center" }}>
          {user.username}
        </div>
        <div style={{ marginTop: "40px" }}>
          <Button title="Cancel"/>
          <Button title="Create"/>
        </div>
      </form>
    </>
  );
}

export default CreateBoard;