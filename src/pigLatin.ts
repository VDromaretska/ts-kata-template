/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/
function pigIt (str: string): string {
let wordArr: string [] = str.split(" ");
for (let i=0; i<wordArr.length; i++) {
    let word :string = wordArr[i];
    if (word.length >1 && onlyLetters(word)) {
        const firstChar :string = word.charAt(0);
        const rest: string = word.slice(1);
        wordArr[i] = rest + firstChar + "ay";
    } else if (onlyLetters(word)) {
        wordArr[i] += "ay";
    }
} 

   let message:string = wordArr.join(" "); 
    return message
}
export default pigIt

function onlyLetters(word: string) :boolean {
    let pattern = /^[A-Za-z]+$/;
    return pattern.test(word)

}
