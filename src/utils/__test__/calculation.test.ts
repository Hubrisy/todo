import { calculateOrderSummary } from '../calculations';

import type { CartItem } from '@/types';

describe('utils/calculations calculateOrderSummary', () => {
  test('should return 0 for empty cart', () => {
    const actualResult = calculateOrderSummary([]);
    const expectedResult = 0;

    expect(actualResult).toBe(expectedResult);
  });

  test('should return sum for cart', () => {
    const mockCart: Array<{ price: number; quantity: number }> = [
      { price: 10, quantity: 2 },
      { price: 20, quantity: 1 },
      { price: 5, quantity: 3 },
    ];

    const actualResult = calculateOrderSummary(mockCart as Array<CartItem>);
    const expectedResult = 55;

    expect(actualResult).toBe(expectedResult);
  });
});
