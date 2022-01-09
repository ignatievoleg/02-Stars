const {generate2} = require('../functions');

describe('generate2', () => {
    test('generate2', () => {
        expect(generate2())
            .toEqual(' * * * * * * *\n' +
                ' *           *\n' +
                ' *           *\n' +
                ' *           *\n' +
                ' *           *\n' +
                ' *           *\n' +
                ' * * * * * * *\n')
    })
})