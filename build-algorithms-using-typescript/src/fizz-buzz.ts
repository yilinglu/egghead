for (let index = 1; index < 101; index++) {
    const isFizz = index % 3 === 0;
    const isBuzz = index % 5 === 0;
    const result =
      isFizz && isBuzz
        ? 'FizzBuzz'
        : isFizz
          ? 'Fizz'
          : isBuzz
            ? 'Buzz'
            : index;
    console.log(result);
  }