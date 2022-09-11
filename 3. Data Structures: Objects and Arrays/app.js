/*
    1. The sum of a range
    console.log(sum(range(1, 10)));
    Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

    Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

    As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. 
    If no step is given, the elements go up by increments of one, corresponding to the old behavior. 
    The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
    Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

    // Your code here.

    console.log(range(1, 10));
    // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(5, 2, -1));
    // → [5, 4, 3, 2]
    console.log(sum(range(1, 10)));
    // → 55
*/

/*
    2. Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
    
    let list = {
                value: 1,
                rest: {
                    value: 2,
                    rest: {
                    value: 3,
                    rest: null
                    }
                }
                };
    Also write a listToArray function that produces an array from a list. Then add a helper function prepend, 
    which takes an element and a list and creates a new list that adds the element to the front of the input list, 
    and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) 
    or undefined when there is no such element.
*/

/*
    3. Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
    For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
    The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
    The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. 
    Neither may use the standard reverse method.

    Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations?
    Which one runs faster?

    // Your code here.

    console.log(reverseArray(["A", "B", "C"]));
    // → ["C", "B", "A"];
    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
    // → [5, 4, 3, 2, 1]
*/

/*
    4. Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, 
    where the values of the properties are equal when compared with a recursive call to deepEqual.
*/
