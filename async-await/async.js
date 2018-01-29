/**
 * Starting with a function presented in JSConf video: https://youtu.be/qbKWsbJ76-s?t=24m16s
 * 
 * Fixed a bug in it by using a similiar 'coroutine' function from egghead video: 
 * https://egghead.io/lessons/javascript-use-javascript-es6-generators-with-promises-to-handle-async-flows
 * 
 * This function drives a generator function to its finish.
 * @param {Function} makeGenerator 
 */
function async(makeGenerator) {
    return function() {
        let generator = makeGenerator.apply(this, arguments);
        function handle(result) {
            // console.log(`result is ${result}`);
            // console.dir(result);
            if (result.done) return Promise.resolve(result.value);

            return Promise.resolve(result.value).then(
                function(res){
                    return handle(generator.next(res));
                },
                function(err) {
                    return handle(generator.throw(err));
                }
            );
        }
        return handle(generator.next());
    }
}

module.exports = async;