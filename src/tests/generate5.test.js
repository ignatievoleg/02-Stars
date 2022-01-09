const {generate5} = require('../functions');

describe('generate5', () => {
    test('generate5', () => {
        expect(generate5())
            .toEqual('             *\n' +
                     '           * *\n' +
                     '         *   *\n' +
                     '       *     *\n' +
                     '     *       *\n' +
                     '   *         *\n' +
                     ' * * * * * * *\n')
    })
})