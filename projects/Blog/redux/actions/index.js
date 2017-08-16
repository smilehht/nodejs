let nextId = 0;

// 定义添加一条todolist的action
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextId++,
        text
    };
}

// 设置可见性
export const setVibility = (filter) => {
    return {
        type: 'SET_VIBILITY',
        filter
    };
}

// 可见性发生变化
export const toggle = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
}