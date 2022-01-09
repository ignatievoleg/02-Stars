const {generate4} = require('../functions');

describe('generate4', () => {
    test('generate4', () => {
        expect(generate4())
            .toEqual(' *            \n' +
                     ' * *          \n' +
                     ' *   *        \n' +
                     ' *     *      \n' +
                     ' *       *    \n' +
                     ' *         *  \n' +
                     ' * * * * * * *\n')
    })
})