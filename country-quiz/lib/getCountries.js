const getCountries = (data) => {
  const arrayCountry = [];
  const arrayNumbers = [];
  for (let i = 0; i < 4; i++) {
    const number = Math.floor(Math.random() * data.length + 1);
    const country = data[number];

    if (country && arrayNumbers[i - 1] !== number) {
      arrayCountry.push({ id: i, country: country });
      arrayNumbers.push(number);
    } else {
      i--;
    }
  }
  return arrayCountry;
};

export default getCountries;
