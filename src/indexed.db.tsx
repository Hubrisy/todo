// export function initDB(): Promise<IDBDatabase> {
//   return new Promise((resolve, reject) => {
//     const request = indexedDB.open('todos_db', 1);

//     request.onerror = event => {
//       const target = event.target as IDBRequest;

//       if (target.error) {
//         // eslint-disable-next-line no-console
//         console.error('Error', target.error);
//       }

//       reject(target.error);
//     };

//     request.onupgradeneeded = event => {
//       const target = event.target as IDBOpenDBRequest;
//       const db = target.result;

//       if (!db.objectStoreNames.contains('todo')) {
//         db.createObjectStore('todo', { keyPath: 'id' });
//       }
//     };

//     request.onsuccess = event => {
//       const target = event.target as IDBOpenDBRequest;
//       resolve(target.result);
//     };
//   });
// }
