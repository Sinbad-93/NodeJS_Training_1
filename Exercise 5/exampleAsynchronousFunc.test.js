const asFun = require('./async');

// il faut passer un argument pour signaler à Jest que le test est asynchrone
test('async test example', (done) => {
    function callback(data) {
        expect(typeof data).toBe('string');
        // test fail with number
        //expect(typeof data).toBe('number');
        done();
    };
    asFun.asyncData(callback);
})