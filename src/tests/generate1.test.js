const {generate1} = require('../functions');

describe('generate1', () => {
    test('generate1', () => {
        expect(generate1())
            .toEqual(' * * * * * * *\n' +
                ' * * * * * * *\n' +
                ' * * * * * * *\n' +
                ' * * * * * * *\n' +
                ' * * * * * * *\n' +
                ' * * * * * * *\n' +
                ' * * * * * * *\n')
    })
})
