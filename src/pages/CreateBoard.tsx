import { useState } from "react";
import { StyledButton } from "../components/StyledButton";
import { StyledInput } from "../components/StyledInput";
import Cookies from 'js-cookie';
import axios from "axios";
import { base_url } from "../api";

const CreateBoard = () => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  }

  const handleCancelClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.href = '/boards';
  }

  const handleCreateClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const token = Cookies.get('accessToken') as string;
    
    try {
      const response = await axios.post(base_url + '/boards', {
        title: title,
        description: description,
      }, {
        headers: {'Authorization': `Bearer ${token}`,}
      });
      
      if (response.status === 201) {// Created
        const id = response.data?.id as string;
        window.location.href = `board?id=${id}`;
      } else {
        alert('Fail'); 
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <h1 style={{ color: "#E5EAF5" }}>Create Board</h1>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        Title
        <StyledInput type="text" placeholder="title" onChange={handleTitleChange} value={title}/>
        Description
        <StyledInput type='text' placeholder='description' onChange={handleDescriptionChange} value={description}/>
        <div style={{ marginTop: "40px" }}>
          <StyledButton onClick={handleCancelClick}>Cancel</StyledButton>
          <StyledButton onClick={handleCreateClick}>Create</StyledButton>
        </div>
      </form>
    </>
  );
}

export default CreateBoard;