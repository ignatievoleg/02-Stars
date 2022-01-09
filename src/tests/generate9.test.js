const {generate9} = require('../functions');

describe('generate9', () => {
    test('generate9', () => {
        expect(generate9())
            .toEqual('              \n' +
                     '              \n' +
                     '              \n' +
                     '       *      \n' +
                     '     *   *    \n' +
                     '   *       *  \n' +
                     ' * * * * * * *\n')
    })
})