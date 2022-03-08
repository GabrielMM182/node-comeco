const fs = require('fs')

function trataErro(erro) {
    throw new Error(erro.code, 'não há arquivo');
}

async function pegaArquivo(caminhoDoArquivo) { // codigo assimcrono da maneira mais usado async trycatch
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(texto)
    } catch(erro) {
        trataErro(erro);
    }
}

// function pegaArquivo(caminhoDoArquivo) { codigo assincrono usando fetch then
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(texto))
//     .catch((erro) => trataErro(erro))
// }

// function pegaArquivo(caminhoDoArquivo) { codigo sincrono
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         }
//         console.log(texto);
//     })
// }

pegaArquivo('./arquvios/texto1.md');