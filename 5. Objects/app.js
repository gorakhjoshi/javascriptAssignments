/*
    1. Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
    Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector 
    that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
    Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

/*
    2. Write a class called Group (since Set is already taken). 
    Like Set, it has add, delete, and has methods. 
    Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), 
    delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.
    Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
    Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.
*/

/*
    3. Make the Group class from the previous exercise iterable.
*/

/*
    4. Borrowing a method
    Earlier in the chapter I mentioned that an object’s hasOwnProperty can be used as a more robust alternative to the in operator 
    when you want to ignore the prototype’s properties. But what if your map needs to include the word "hasOwnProperty"? 
    You won’t be able to call that method anymore because the object’s own property hides the method value.
    Can you think of a way to call hasOwnProperty on an object that has its own property by that name?
*/