const {generate3} = require('../functions');

describe('generate3', () => {
    test('generate3', () => {
        expect(generate3())
            .toEqual(' * * * * * * *\n' +
                     ' *         *  \n' +
                     ' *       *    \n' +
                     ' *     *      \n' +
                     ' *   *        \n' +
                     ' * *          \n' +
                     ' *            \n')
    })
})