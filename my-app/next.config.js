const {PHASE_DEVELOPMENT_SERVER} =  require('next/constants')

module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: 'koposblog1',
                mongodb_password: 'Tikd327TWV3MJIMl',
                mongodb_clustername: 'cluster0',
                mongodb_database:'my-site-dev',
            },
        }
    }


    return {
        env: {
            mongodb_username: 'koposblog1',
            mongodb_password: 'Tikd327TWV3MJIMl',
            mongodb_clustername: 'cluster0',
            mongodb_database:'my-site',
        },
    };
}
// mongodb+srv://:Tikd327TWV3MJIMl@cluster0.dsxgyrn.mongodb.net/Tikd327TWV3MJIMl