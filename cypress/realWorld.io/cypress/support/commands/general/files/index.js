export const waitForDownloadedFile = (filename) => {
    cy.waitUntil(() => cy.task('isFileDownloaded', filename).then(exists => !!exists), {
        verbose: true,
        customCheckMessage: `is file downloaded: ${filename}`,
    });
};