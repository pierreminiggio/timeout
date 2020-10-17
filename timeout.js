/**
 * @param {int} ms 
 * 
 * @return {Promise}
 */
function timeout (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

module.exports = timeout
