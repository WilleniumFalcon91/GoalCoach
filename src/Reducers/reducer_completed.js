import { SET_COMPLETED } from '../constants';

export default (state = [], action) => {
    switch (action.type) {
        case SET_COMPLETED:
            const { completeGoal } = action;
            return completeGoal;
        default:
            return state;
    }
}