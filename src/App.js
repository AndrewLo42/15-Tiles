import React, {useState,  useEffect} from 'react';


// the exported component can be either a function or a class

export default function Board( ) {
    // let initialConfiguration=
    const [board, setBoard] = useState([1,2,0,4,3,5,6,7,8,9,10,11,12,13,15,14])
    const [emptyTile, setEmpty ] = useState(board.indexOf(0))
    const victoryBoard = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

    const inCol = (idx) => {
        return Math.abs(idx - emptyTile) >= 4 && emptyTile % 4 === idx % 4;
    }

    const inRow = (idx) => {
        return Math.abs(idx - emptyTile) < 4 && Math.floor(idx / 4) === Math.floor(emptyTile / 4);
    }

    const checkTiles = () => {
        for (let i = 0; i < board.length; i++) {
          if(board[i] !== victoryBoard[i]) {
                return false
            }
        }
        return true;
    }

    const moveTiles = (idx) => {
        const emptyIdx = emptyTile;
        const newBoard = board.slice();
        const min = Math.min(idx, emptyIdx);
        const max = Math.max(idx, emptyIdx);
        const adjacent = Math.abs(idx - emptyTile) === 4 || Math.abs(idx - emptyTile) === 1 ? true : false

          if(adjacent) {
            if(!newBoard[max]) {
                newBoard[max] = newBoard[min];
                newBoard[min] = 0;
                setEmpty(idx);
                return newBoard
            } else {
                newBoard[min] = newBoard[max];
                newBoard[max] = 0;
                setEmpty(idx);
                return newBoard
            }
         }
            return newBoard
    }

    const handleClick = (e) => {
        let idx = Number(e.target.id)

        if(!(inCol(idx) || inRow(idx))) {
            return false;
        }
        const newBoard = moveTiles(idx);
        setBoard(newBoard);

    }

    const renderTiles = (currentBoard) => {

        return currentBoard.map((tile, key) => {
            if(tile !== 0) {
                return (
                <div className="tile" onClick={handleClick.bind(this)} id={key}>
                    <div id={key}>{tile}</div>
                </div>
                )
            } else {
                return <div className="empty"> </div>
            }
        })
    }

    useEffect(() => {
        if (checkTiles(board)) {
            console.log("win")
            alert("you win!")
        }
    }, [board])
  return (
    <div className='board'>
        {renderTiles(board)}
    </div>
  );
}
