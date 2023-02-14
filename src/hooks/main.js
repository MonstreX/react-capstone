import { createContext, useContext, useState, useReducer } from "react"

const MainContext = createContext(undefined)

export const MainProvider = ({ children }) => {

    const [cart, cartDispatch] = useReducer(cartReducer, {items: []})

    function cartReducer(state, action) {
        console.log(state.items)
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