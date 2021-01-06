import Api from './Api'

export default {
    register(data) {
        return Api().get('/register', data);
    }
}
