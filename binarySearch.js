const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let count = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    let findStatus = false;
    let position = -1;
    while(findStatus === false && start <= end) {
        count += 1 //вираховуємо скільки нам це зайняло ітерацій
        middle = Math.floor((start + end) / 2); //на кожній ітерації визначаємо середину масиву
        if(array[middle] === item) {
            findStatus = true;
            position = middle;
            return position;
        }
        if(item < array[middle]) {
            end = middle -1
        } else {
            start = middle +1
        }
    }
    return position;
}
console.log(binarySearch(array, 0))
console.log(`Кількість ітерацій: ${count}`)