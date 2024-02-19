// Define a function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    // Iterate through both arrays until one of them is exhausted
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]); // Push the smaller element to the result
            i++; // Move to the next element in arr1
        } else {
            result.push(arr2[j]); // Push the smaller element to the result
            j++; // Move to the next element in arr2
        }
    }

    // If there are remaining elements in arr1, append them to the result
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, append them to the result
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// Example input lists
const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

// Merge the two lists
const mergedList = mergeSortedArrays(list1, list2);

// Print the merged list
console.log(mergedList); // Output: [1, 1, 2, 3, 4, 4]
