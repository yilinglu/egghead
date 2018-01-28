export function insertionSort(array: number[]): number[]{
    array = array.slice();

    for (let i = 1; i < array.length; i++) {
        const cur = array[i];

        let j = i-1;

        while(j >= 0 && array[j] > cur) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = cur;
    }
    return array;
}