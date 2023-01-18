import { useState, useContext } from "react";
import { Droppable } from "react-beautiful-dnd";

import AddItem from "./AddItem";
import AddItemForm from "./AddItemForm";
import { icons } from "../assets";

import { BoardContext } from "../contexts/Board";
import { ListContext } from "../contexts/List";
import { TaskContext } from "../contexts/Task";
import TaskCard from "./TaskCard";

const TaskList = ({ taskList, index }) => {
	const [taskTitle, setTaskTitle] = useState("");
	const [editMode, setEditMode] = useState(false);

	const { tasks: allTasks, dispatchTaskAction } = useContext(TaskContext);
	const { dispatchListAction } = useContext(ListContext);
	const { dispatchBoardAction } = useContext(BoardContext);

	const submitHandler = (e) => {
		e.preventDefault();
		const id = Date.now() + "";

		dispatchTaskAction({
			type: "CREATE_TASK",
			payload: {
				id: id,
				title: taskTitle,
				listId: taskList.id,
				boardId: taskList.boardId,
			},
		});

		dispatchListAction({
			type: "ADD_TASK_ID_TO_A_LIST",
			payload: { id: taskList.id, taskId: id },
		});
		dispatchBoardAction({
			type: "ADD_TASK_ID_TO_A_BOARD",
			payload: { id: taskList.boardId, taskId: id },
		});

		setEditMode(false);
		setTaskTitle("");
	};

	const removeListHandler = () => {
		dispatchListAction({ type: "REMOVE_LIST", payload: taskList.id });
		dispatchBoardAction({
			type: "REMOVE_LIST_ID_FROM_A_BOARD",
			payload: { id: taskList.boardId, listId: taskList.id },
		});
	};
	return (
		<Droppable droppableId={taskList.id} index={index}>
			{(provided) => (
				<div ref={provided.innerRef} {...provided.droppableProps}>
					<div className="list-container">
						<div className="list-title-container">
							<h5>{taskList.title}</h5>
							<img
								onClick={removeListHandler}
								src={icons.crossIcon}
								alt=""
								className="add-item-icon"
							/>
						</div>
						{taskList.tasks
							.map((item) => {
								return allTasks.find((i) => i.id === item);
							})
							.map((task, index) => (
								<TaskCard
									index={index}
									task={task}
									key={task.id}
								/>
							))}
						{provided.placeholder}

						{!editMode ? (
							<AddItem setEditMode={setEditMode} />
						) : (
							<AddItemForm
								title={taskTitle}
								onChangeHandler={(e) =>
									setTaskTitle(e.target.value)
								}
								setEditMode={setEditMode}
								editMode={editMode}
								submitHandler={submitHandler}
							/>
						)}
					</div>
				</div>
			)}
		</Droppable>
	);
};

export default TaskList;
