function verificaPalindromo(string) {
    const stringInvertida = string.split('').reverse().join('');
    return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("arara")); // true
console.log(verificaPalindromo("Frase")); // false