import { createContext, useContext, useReducer } from "react"

const MainContext = createContext(undefined)

export const MainProvider = ({ children, cartItems = [] }) => {

    const [cart, cartDispatch] = useReducer(cartReducer, {items: cartItems})

    function cartReducer(state, action) {
        switch (action.type) {
            case 'add':
                let newItem = true
                let changedItems = state.items.map(item => {
                    if (item.key === action.payload.key) {
                        newItem = false
                        return {...item, qty: item.qty + 1}
                    } else {
                        return item
                    }
                })
                if (newItem) {
                    changedItems = [...changedItems, action.payload]
                }
                return { ...state, items: changedItems }
            case 'change':
                return { ...state, items: state.items.map(item => {
                        if (item.key === action.payload.key) {
                            return {...item, qty:action.payload.qty}
                        } else {
                            return item
                        }
                    })
                }
            case 'remove':
                return { ...state, items: state.items.filter(item => item.key !== action.payload.key) }
            case 'clear':
                return { ...state, items: [] }
            default:
                throw new Error()
        }
    }

    return (
        <MainContext.Provider value={{
            cart, cartDispatch,
        }}>
            { children }
        </MainContext.Provider>
    )

}

export const useMain = () => useContext(MainContext);