export const fizzBuzz = (n) => {
  const divBy3 = n % 3 === 0;
  const divBy5 = n % 5 === 0;

  return divBy3 && divBy5
    ? 'FizzBuzz'
    : divBy3
    ? 'Fizz'
    : divBy5
    ? 'Buzz'
    : n.toString();
};
