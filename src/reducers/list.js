export const listReducer = (lists, action) => {
    switch (action.type) {
        case 'CREATE_LIST' : {
            const list = {
                id: action.payload.id,
                title: action.payload.title,
                tasks: action.payload.tasks || [],
                boardId: action.payload.boardId
            }

            return [...lists, list]
        }

        case 'REMOVE_LIST' : {
            return lists.filter(item => item.id !== action.payload)
        }

        case 'UPDATE_LIST' : {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                }

                return item
            })
        }

        case 'CHANGE_BOARD_ID_OF_A_LIST': {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    item.boardId = action.payload.boardId
                }

                return item
            })
        }

        case 'ADD_TASK_ID_TO_A_LIST' : {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    item.tasks.push(action.payload.taskId)
                }

                return item
            })
        }

        case 'REMOVE_TASK_ID_FROM_A_LIST' : {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    item.tasks = item.tasks.filter(task => task !== action.payload.taskId)
                }

                return item
            })
        }

        // case 'SORT_TASK_IDS_IN_LIST' : {
        //     const {source, destination, draggableId} = action.payload;

        //     const previousList = lists.find(item => item.id === source.droppableId)
        //     const latestList = lists.find(item => item.id === destination.droppableId);

        //     if (source.droppableId !== destination.droppableId) {
        //         previousList.tasks.splice(source.index, 1)
        //     } else {
        //         latestList.tasks.splice(source.index, 1)
        //     }

            

        //     latestList.tasks.splice(destination.index, 0, draggableId);

        //     return [...lists]
        // }

        case 'SORT_TASK_IDS_IN_A_LIST' : {
            const {source, destination, draggableId} = action.payload;

            const previousList = lists.find(item => item.id === source.droppableId);

            const latestList = lists.find(item => item.id === destination.droppableId);

            if (previousList.id !== latestList.id) {
                previousList.tasks.splice(source.index, 1)
            } else {
                latestList.tasks.splice(source.index, 1)
            }

            latestList.tasks.splice(destination.index, 0, draggableId);

            return [...lists]


        }



        default : {
            return lists
        }
    }
}

/**
 * 
 * lists = [
 *      {
 *          id: 'list0-1',
 *          title: 'list-1',
 *          tasks: ['task-1', 'task-2'],
 *          boardId: 'board-1'
 *      }
 * 
 * ]
 */