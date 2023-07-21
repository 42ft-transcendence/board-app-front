import Board from "../Board";

export interface BoardItemProps {
  board: Board;
}

const BoardItem = ({ board }: BoardItemProps) => {

  const moveToBoard = () => {
    window.location.href = `/board?id=${board.id}`;
  }

  return (
    <li
      onClick={moveToBoard}
      style={{ width: '300px', height: '200px', backgroundColor: '#E5EAF5', borderRadius: '30px', display: 'flex', flexDirection: 'column', margin: '10px', color: 'black' }}>
      <h3 style={{ height: '40px', margin: '20px', textAlign: 'center' }}>{board.title}</h3>
      <span style={{ flexGrow: '1', marginInline: '20px'}}>{board.description}</span>
    </li>
  );
}

export default BoardItem;