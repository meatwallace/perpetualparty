export function findLastIndex<T>(
  array: Array<T>,
  predicate: (value: T, index: number, obj: Array<T>) => boolean
): number {
  let length = array.length;

  while (length--) {
    if (predicate(array[length], length, array)) {
      return length;
    }
  }

  return -1;
}
