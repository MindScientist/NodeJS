const fs = require('node:fs/promises');


async function listDirectoryContent() {
    const dirPath = './dir/'
    try {
        let output = "";
        const files = await fs.readdir(dirPath);
        for (const file of files) {
            output += file + "<br>\n";
        }
        return output;
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    listDirectoryContent
}