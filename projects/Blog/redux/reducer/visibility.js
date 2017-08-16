const vibility = (state='SHOW_All', action) => {
    swicth(axtion.type) {
        case 'SET_VIBILITY':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case: 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return Object({}, state, {
                completed: !state.completed
            });
        default:
            return state;
    }
}