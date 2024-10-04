let arr=[6,13,22,18,0,3,45,57,5,12]

let largest = -1
let secondLargest=-1
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secondLargest=largest;
        largest=arr[i]
    } else if(arr[i]>secondLargest && arr[i]!=largest){
        secondLargest=arr[i]
    }
}
secondLargest = (secondLargest>-1)?secondLargest:"All are equal"
console.log(secondLargest)