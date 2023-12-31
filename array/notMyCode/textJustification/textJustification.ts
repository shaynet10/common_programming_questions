function textJustification(words: string[], maxWidth: number): string[] {
    let i:number=0;
    let j:number=0
    let c:number = 0;
    while(j < words.length || c < words.length){ 
        let nextWord = words[j];
        if(nextWord.length + i + j - c <= maxWidth){
            i = nextWord.length + i //if line does not overflow add length and move on
            j++
        } else{
          let nOfSpaces:number = Math.trunc((maxWidth - i)/(j-c-1)), justElement:string;
          if(j-c == 1 || j == words.length){ //If at end of array or if one word line then we just add spaces till maxWidth.
            nOfSpaces = 1
            justElement= words.splice(c,j-c).join(' '.repeat(nOfSpaces))
            justElement = justElement.concat(' '.repeat(maxWidth-justElement.length))
          }
          else{ //here we calculate the rest of spaces to distribute from begining of new line
            let justElementArr:string[] = words.splice(c,j-c) // by substracting from maxwidth + the max number 
            justElement= justElementArr.join(' '.repeat(nOfSpaces)) // of spaces between words, that does not make the line overflow
            justElementArr = justElementArr.map((x,i)=>{
              return i<maxWidth-justElement.length ? x+' ' : x
            })
            
            justElement = justElementArr.join(' '.repeat(nOfSpaces))
          }
          
          words.unshift(justElement)
          c++
          j=c
          i=0
        }
    }
    return words.reverse();
}


const maxWidth = 16;
[
    ["This", "is", "an", "example", "of", "text", "justification."],
].forEach(words => {
    console.log('words: ', words);
    console.log('textJustification: ', textJustification(words, maxWidth));
});