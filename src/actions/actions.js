export function operationPressed(operation) {
    return {
        type: 'OPERATION',
        payload: { operation }
    }
}

export function digitPressed(digit) {
    return {
        type: 'DIGIT',
        payload: { digit }
    }
}

export function equals() {
    return {
        type: 'EQUALS'
    }
}