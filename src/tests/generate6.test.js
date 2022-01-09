const {generate6} = require('../functions');

describe('generate6', () => {
    test('generate6', () => {
        expect(generate6())
            .toEqual(' * * * * * * *\n' +
                     '   *         *\n' +
                     '     *       *\n' +
                     '       *     *\n' +
                     '         *   *\n' +
                     '           * *\n' +
                     '             *\n')
    })
})