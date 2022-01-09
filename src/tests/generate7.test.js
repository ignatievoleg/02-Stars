const {generate7} = require('../functions');

describe('generate7', () => {
    test('generate7', () => {
        expect(generate7())
            .toEqual(' *           *\n' +
                     '   *       *  \n' +
                     '     *   *    \n' +
                     '       *      \n' +
                     '     *   *    \n' +
                     '   *       *  \n' +
                     ' *           *\n')
    })
})