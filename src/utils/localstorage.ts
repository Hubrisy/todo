import { handleError } from '@/utils/error';

export enum StorageKeys {
  favorites = 'favorites',
  visitedProductIds = 'visitedProductIds',
  cart = 'cart',
  purchasedItems = 'purchasedItems',
  user = 'user',
  orderDetails = 'orderDetails',
}

export const setStorage = (key: StorageKeys, value: string) => {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  } catch (e) {
    handleError(e);
  }
};

export const getStorage = (key: StorageKeys) => {
  try {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
  } catch (e) {
    handleError(e);
  }
};
