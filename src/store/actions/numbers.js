import { CHANGE_MIN_NUMBER, CHANGE_MAX_NUMBER } from "./action_types";

export function setMin(number) {
    return {
        type: CHANGE_MIN_NUMBER,
        payload: number
    }
};

export function setMax(number) {
    return {
        type: CHANGE_MAX_NUMBER,
        payload: number
    }
};