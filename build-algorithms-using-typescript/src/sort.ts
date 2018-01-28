  
  // Sorting an array of strings
  const arr: ReadonlyArray<string> = ['foo', 'bar'];
  const copy = arr.slice().sort();
  
  console.log("Sort a String without mutation:", "")
  console.log("arr: ", arr);
  console.log("copy: ", copy);
  
  // Sorting an array of numbers in descending order
  const foo = [1, 22, 3];
  foo.sort((a,b) => b - a);
  
  console.log("Sort numbers in an array:", "")
  console.log("foo: ", foo);
  
  const movies = [
      {
          name: "The Shawshank Redemtion",
          year: 1994
      },
      {
          name: "The Godfather",
          year: 1972
      },
      {
          name: "The Godfather: Part II",
          year: 1974
      },
      {
          name: "The Dark Knight",
          year: 2008
      }
]
// Sorts in ascending order
movies.sort((b,a) => b.year - a.year);

console.log("Sort on an attribute of an object: ", "")
movies.forEach(function(movie) {
    console.log("", movie.name)
})