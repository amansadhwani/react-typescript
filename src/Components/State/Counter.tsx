import { useReducer } from "react"
//import PrintCount from "./PrintCount"

const Counter = () => {
    const initialState = { count: 0 }

    type counterState = {
        count: number
    }

    type counterAction = {
        type: 'increment' | 'decrement'
        payload: number 
    }

    type resetAction = {
        type: 'reset'
    }

    type finalAction = resetAction| counterAction


    const reducer = (state: counterState, action: finalAction) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + action.payload }
            case 'decrement':
                return { count: state.count - action.payload }
            case 'reset':
                    return  initialState 
            default:
                return state
        }

    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <button onClick={() => dispatch({ type: "increment", payload: 10 })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset"})}>reset</button>
            {state.count}
        </div>
    )
}

export default Counter