export const taskReducer = (tasks, action) => {
    switch (action.type) {
        case 'CREATE_TASK' : {
            const task = {
                id: action.payload.id,
                title: action.payload.title,
                boardId: action.payload.boardId,
                listId: action.payload.listId
            }

            return [...tasks, task]
        }

        case 'REMOVE_TASK' : {
            return tasks.filter(item => item.id !== action.payload)
        }

        case 'UPDATE_TASK' : {
            return tasks.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                }

                return item
            })
        }

        case 'CHANGE_LIST_ID_OF_A_TASK' : {
            console.log(action.payload);
            return tasks.map(item => {
                if (item.id === action.payload.id) {
                    item.listId = action.payload.listId
                }

                return item
            })
        }

        case 'CHANGE_BOARD_ID_OF_A_TASK' : {
             return tasks.map(item => {
                if (item.id === action.payload.id) {
                    item.boardId = action.payload.boardId
                }

                return item
            })
        }

        default : {
            return tasks
        }
    }
}

/**
 * tasks= [
 *      {
 *          id: '1',
 *          title: 'task-1',
 *          listId: 'list-1',
 *          boardId: 'board-1'    
 *      }
 * ]
 */