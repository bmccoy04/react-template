export default function blogReducer(state = [], action) {
    switch(action, type) {
        case "CREATE_BLOG":
            return [...state, { ...action.blog }];
        default:
            return state;
    }
}