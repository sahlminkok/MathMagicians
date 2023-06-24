import calculate from '../logic/calculate';

// Helper function to compare two objects
function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

describe('calculate function', () => {
  // Test case 1: AC button
  test('AC button should reset calculator data object', () => {
    const result = calculate({ total: 10, next: '5', operation: '+' }, 'AC');
    expect(isEqual(result, { total: null, next: null, operation: null })).toBe(true);
  });

  // Test case 2: Number button
  test('Number button should update next value', () => {
    const result = calculate({ total: 10, next: null, operation: '+' }, '5');
    expect(isEqual(result, { total: 10, next: '5', operation: '+' })).toBe(true);
  });

  // Test case 3: Number button with existing operation
  test('Number button should concatenate with existing next value', () => {
    const result = calculate({ total: 10, next: '5', operation: '+' }, '2');
    expect(isEqual(result, { total: 10, next: '52', operation: '+' })).toBe(true);
  });

  // Test case 4: Number button with '0' and existing next value
  test('Number button should ignore leading zeros', () => {
    const result = calculate({ total: null, next: '0', operation: '+' }, '0');
    expect(isEqual(result, {})).toBe(true);
  });

  // Test case 5: Number button with existing operation and non-zero next value
  test('Number button should update next value when operation is present', () => {
    const result = calculate({ total: 10, next: '5', operation: '+' }, '7');
    expect(isEqual(result, { total: 10, next: '57', operation: '+' })).toBe(true);
  });

  // Test case 6: Decimal point button with no existing next
  test('Decimal point button should add decimal point to next value', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '.');
    expect(isEqual(result, { total: null, next: '5.', operation: null })).toBe(true);
  });
});
