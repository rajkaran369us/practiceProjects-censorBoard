var censorWords = ["sad", "bad", "mad"];
var customCensorWord = [];
function censor(instr){
    for(idx in censorWords){
        instr = instr.replace(censorWords[idx],"****");
    }
    for(idx in customCensorWord){
        instr = instr.replace(customCensorWord[idx],"****");
    }
    return instr;
}

function addCensordWord(word){
    customCensorWord.push(word);
}

function getCensoredWord(){
    return censorWords.concat(customCensorWord);
}

exports.censor = censor;
exports.addCensordWord=addCensordWord;
exports.getCensoredWord = getCensoredWord;