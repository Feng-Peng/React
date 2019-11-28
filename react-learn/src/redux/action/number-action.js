import * as numberActions from './action-type'

export function getIncreaseAction () {
    return {
        type: numberActions.INCREASE
    }
}

export function getDecreaseAction () {
    return {
        type: numberActions.DECREASE
    }
}

export function getSetAction (number) {
    return {
        type: numberActions.SET,
        payload: number
    }
}