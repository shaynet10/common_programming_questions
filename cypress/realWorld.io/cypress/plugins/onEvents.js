const { existsSync } = require('fs');

const onEvents = (on) => {
    on('task', {
        'isFileDownloaded': (filename) => existsSync(filename),
    });
}

module.exports = { onEvents };