import { useContext } from "react";
import {Link} from 'react-router-dom'

import { BoardContext } from "../contexts/Board";
import BoardItem from "./BoardItem";

const BoardList = () => {
    const {boards} = useContext(BoardContext)
    return (
        <div className="flex-wrap m-top-md d-flex justify-content-around">
            {boards.map(board => (
                <Link key = {board.id} to = {`/boards/${board.id}`}>
                    <BoardItem board={board} />
                </Link>
            ))}
        </div>
    )
}

export default BoardList