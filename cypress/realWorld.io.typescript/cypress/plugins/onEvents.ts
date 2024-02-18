import { existsSync }  from 'fs';

export const onEvents = (on) => {
    on('task', {
        'isFileDownloaded': (filename) => existsSync(filename),
    });
}
