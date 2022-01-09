const {generate8} = require('../functions');

describe('generate8', () => {
    test('generate8', () => {
        expect(generate8())
            .toEqual(' * * * * * * *\n' +
                     '   *       *  \n' +
                     '     *   *    \n' +
                     '       *      \n' +
                     '              \n' +
                     '              \n' +
                     '              \n')
    })
})