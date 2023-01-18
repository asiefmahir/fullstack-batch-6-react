import { useState, useContext } from "react";
import { Draggable } from "react-beautiful-dnd";

import AddItemForm from "./AddItemForm";

import { TaskContext } from "../contexts/Task";
import { ListContext } from "../contexts/List";
import { BoardContext } from "../contexts/Board";
import { icons } from "../assets";

const TaskCard = ({ task, index }) => {
	const [taskTitle, setTaskTitle] = useState(task.title);
	const [editMode, setEditMode] = useState(false);
	const { dispatchTaskAction } = useContext(TaskContext);
	const { dispatchListAction } = useContext(ListContext);
	const { dispatchBoardAction } = useContext(BoardContext);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatchTaskAction({
			type: "UPDATE_TASK",
			payload: { id: task.id, title: taskTitle },
		});
		setEditMode(false);
	};

	const removeHandler = () => {
		dispatchTaskAction({ type: "REMOVE_TASK", payload: task.id });
		dispatchListAction({
			type: "REMOVE_TASK_ID_FROM_A_LIST",
			payload: { id: task.listId, taskId: task.id },
		});
		dispatchBoardAction({
			type: "REMOVE_TASK_ID_FROM_A_BOARD",
			payload: { id: task.boardId, taskId: task.id },
		});
	};

	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided) => {
				// console.log(provided);
				return (

				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					{!editMode ? (
						<div
							onClick={() => setEditMode(true)}
							className="task-card"
						>
							<p>{task.title}</p>
							<img
								onClick={removeHandler}
								src={icons.crossIcon}
								alt=""
								className="add-item-icon"
							/>
						</div>
					) : (
						<AddItemForm
							title={taskTitle}
							onChangeHandler={(e) =>
								setTaskTitle(e.target.value)
							}
							setEditMode={setEditMode}
							submitHandler={submitHandler}
						/>
					)}
				</div>
			)	
}}
		</Draggable>
	);
};

export default TaskCard;
