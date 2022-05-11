const stringLength = (string) => {
    let str = [...string].length;
    if (str > 0 && str <= 10) {
        return str
    }
   
}

const reverseString = (string) => {
    let str = string.split('').reverse('').join('');
    return str
}



const capitalizeString = (string) => {
    const str = string;
    const capitalize= str.charAt(0).toUpperCase() + str.slice(1);
    return capitalize
  }
