import Api from './Api'

export default {

    getCartItems() {
        return Api().get('/allCartItems')
    },

    addCartItem(itemId) {

        console.log(itemId)
        return Api().post('/cartItem/' + itemId);
    },

    removeCartItem(itemId) {
        return Api().post('/removeCartItem/' + itemId);
    }
}