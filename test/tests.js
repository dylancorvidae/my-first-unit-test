import add from '../add.js';
const test = QUnit.test;

test('time to test!', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const x = 3;
    const y = 4;
    const expected = 7;

    //Act 
    // Call the function you're testing and set the result to a const
    const sum = add(x, y);

    //Assert
    // What should the result be?
    assert.equal(sum, expected);
});
