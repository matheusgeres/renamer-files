const fs = require('fs');

const path = '/media/matheus/1CB03CB2B03C946C/Users/mathe/Desktop/Pregacoes/Achados e Perdidos'
fs.readdir(path, (err, files) => {
    files.forEach(file => {
        let filePath = path + "/" + file

        let day = file.substring(0, 2)
        let month = file.substring(2, 4)
        let year = file.substring(4, 8)

        let regex = /(\(|\)|\ |\,|#|\[|\]+)/g

        let restFilename = replaceAccents(file.substring(8, file.length)
            .replace(regex, "_")
            .replace("_.mp3", ".mp3")
            .replace("__", "_")
            .replace("__", "_")
            .replace("__", "_")
        )

        let newFileName = year + month + day + restFilename
        let newFilePath = path + "/" + newFileName

        console.log("Rename ", file, " to ", newFileName);
        fs.renameSync(filePath, newFilePath)
    })
})

function replaceAccents(str) {
    const ACCENTS = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
    const NON_ACCENTS = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";

    const strAccents = str.split('');
    const strAccentsOut = new Array();

    const strAccentsLen = strAccents.length;

    for (let y = 0; y < strAccentsLen; y++) {
        if (ACCENTS.indexOf(strAccents[y]) != -1) {
            strAccentsOut[y] = NON_ACCENTS.substr(ACCENTS.indexOf(strAccents[y]), 1);
        }
        else {
            strAccentsOut[y] = strAccents[y];
        }
    }

    const newString = strAccentsOut.join('');
    return newString;
}