import Api from './Api'


export default {

    migrateToNoSQL() {
        return Api().post('/migrate')
    },

    isMigrated() {
        return Api().get('/ismigrated')
    },
}
