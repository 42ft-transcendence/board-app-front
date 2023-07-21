import { useSearchParams } from "react-router-dom";
import Board from "../Board";
import { StyledButton } from "../components/StyledButton";
import { StyledInput } from "../components/StyledInput";
import User from "../User";
import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../api";
import Cookies from 'js-cookie';

const ShowBoard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [board, setBoard] = useState<Board>();
  // const [author, setAuthor] = useState<User>();

  const getBoardInfo = async () => {
    const token = Cookies.get('accessToken') as string;
    const id = searchParams.get('id') as string;

    try {
      const response = await axios.get(base_url + `/boards/${id}`, {
        headers: {'Authorization': `Bearer ${token}`,}
      });

      setBoard(response.data as Board);
    } catch (e) {
      console.error(e);
    }
  }

  const handleBackClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.href = '/boards';
  }

  const handleDeleteClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const token = Cookies.get('accessToken') as string;
    const id = searchParams.get('id') as string;

    try {
      const response = await axios.delete(base_url + `/boards/${id}`, {
        headers: {'Authorization': `Bearer ${token}`,}
      });

      if (response.status === 200) {
        window.location.href = '/boards';
      } else {
        alert('denied');
      }
    } catch (e) {
      console.error(e);
    }
  }
  
  useEffect(() => {
    getBoardInfo();
  }, []);

  return (
    <>
      <h1 style={{ color: "#E5EAF5" }}>Show Board</h1>
      {(board) ? 
        <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          Title
          <StyledInput type='text' placeholder={board.title} disabled/>
          Description
          <StyledInput type='text' placeholder={board.description} disabled/>
          {/* Author
          <StyledInput type='text' placeholder={author.username} disabled/> */}
          <div style={{ marginTop: "40px" }}>
            <StyledButton onClick={handleBackClick}>Back</StyledButton>
            <StyledButton onClick={handleDeleteClick}>Delete</StyledButton>
          </div>
        </form> :
        <h3>Loading</h3>
      }
    </>
  );
}

export default ShowBoard;