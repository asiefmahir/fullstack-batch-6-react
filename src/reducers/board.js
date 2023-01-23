export const boardReducer = (boards, action) => {

    switch (action.type) {
        case 'CREATE_BOARD': {
            const board = {
                id: Date.now() + '',
                title: action.payload,
                lists: [],
                tasks: []
            }

            return [...boards, board]
        }

        case 'REMOVE_BOARD' : {
            return boards.filter(item => item.id !== action.payload)
        }

        case 'ADD_LIST_ID_TO_A_BOARD': {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    item.lists.push(action.payload.listId)
                }

                return item
            })

            // return newState
        }

        case 'ADD_TASK_ID_TO_A_BOARD' : {
             return boards.map(item => {
                if (item.id === action.payload.id) {
                    item.tasks.push(action.payload.taskId)
                }

                return item
            })
        }

        case "UPDATE_BOARD" : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                }

                return item
            })
        }


        case 'REMOVE_LIST_ID_FROM_A_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    item.lists = item.lists.filter(list => list !== action.payload.listId)
                }

                return item
            })
        }

        case 'REMOVE_TASK_ID_FROM_A_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    item.tasks = item.tasks.filter(task => task !== action.payload.taskId)
                }

                return item
            })
        }
            
    
        default:
            return boards;
    }
}

/**
 * boards = [
 *      {
 *          id: '1',
 *          title: 'Board 1',
 *          lists: ["list-1", "list-2", "list-3"],
 *          tasks: ["task-1", "task-2"],
 *     
 *       },
 * 
 *        {
 *          id: '2',
 *          title: 'Board 1',
 *          lists: ["list-1", "list-2"],
 *          tasks: ["task-1", "task-2"],
 *     
 *       },
 *          
 * ]
 */


// action = {type: 'CREATE', payload: {id: '1', title: 'board1'}}