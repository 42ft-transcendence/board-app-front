import { useEffect, useState } from "react";
import { StyledButton } from "../components/StyledButton";
import Board from "../Board";
import BoardItem from "../components/BoardItem";
import axios from "axios";
import Cookies from 'js-cookie';
import { base_url } from "../api";

const BoardList = () => {
  const [boards, setBoards] = useState<Board[]>([]);

  const loadBoard = async (): Promise<void> => {
    setBoards([]);
    console.log('boards1', boards);

    try {
      const token = Cookies.get('accessToken') as string;
      const response = await axios.get(base_url + "/boards", {
        headers: {'Authorization': `Bearer ${token}`,}
      });

      setBoards(response.data as Board[]);
    } catch (e) {
      console.error(e);
    }
  }

  const handleCreateClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.href = '/create';
  }
  
  const handleLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    Cookies.remove('accessToken');
    window.location.href = '/';
  }

  useEffect(() => {
    loadBoard();
  }, []);

  return (
    <>
      <h1 style={{ color: "#E5EAF5" }}>Board List</h1>
      <h3 style={{ color: "#E5EAF5" }}>login with {}</h3>
      <div>
        <StyledButton onClick={handleCreateClick}>Create</StyledButton>
        <StyledButton onClick={handleLogoutClick}>Logout</StyledButton>
      </div>
      <div style={{ width: '80vw', overflowX: 'auto', marginTop: '40px' }}>
        {boards.length !== 0 ?
          <ul style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', width: 'min-content', height: '460px' }}>
            {boards.map((board) => <BoardItem board={board} />)}
          </ul>
          : 'Loading'}
      </div>
    </>
  );
}

export default BoardList;