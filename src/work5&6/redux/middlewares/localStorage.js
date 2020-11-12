import {addProductToCart, removeProductFormCart} from '../actions/card'

export const cartLocalStorage = store => next => action => {
    if([addProductToCart.type, removeProductFormCart.type].includes(action.type)){
        next(action)
        const nextState = store.getState();
        try {
            localStorage.setItem('product', JSON.stringify(nextState.cart))
        } catch (e) {
            console.log('error set product to localStorage cart')
        }
        return;
    }
     return next(action)
}