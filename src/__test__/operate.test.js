import operate from '../logic/operate';

describe('operate function', () => {
  // Test case 1: addition operation
  test('+ operator should operate 10 + 2 into 12 ', () => {
    expect(operate('10', '2', '+')).toBe('12');
  });
  // Test case 2: subtraction operation
  test('- operator should operate 10 - 2 into 8 ', () => {
    expect(operate('10', '2', '-')).toBe('8');
  });
  // Test case 3: multiplication operation
  test('x operator should operate 10 x 2 into 20 ', () => {
    expect(operate('10', '2', 'x')).toBe('20');
  });
  // Test case 4: division operation
  test('÷ operator should operate 10 ÷ 2 into 5 ', () => {
    expect(operate('10', '2', '÷')).toBe('5');
  });
  // Test case 5: modulus operation
  test('% operator should operate 10 % 2 into 0 ', () => {
    expect(operate('10', '2', '%')).toBe('0');
  });
});
