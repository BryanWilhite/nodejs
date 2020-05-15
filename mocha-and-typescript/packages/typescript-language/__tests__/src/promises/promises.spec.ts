describe(Promise.name, function () {
    const timeInMilliseconds = 50;

    it('can wrap `setTimeout()`', function (done) {
        const delay = new Promise((resolve: () => void) => {
            setTimeout(function () { resolve(); }, timeInMilliseconds);
        });

        delay.then(done);
    });

    it('can wrap `setTimeout()` with `async`/`await`', async function () {

        await new Promise((resolve: () => void) => {
            setTimeout(function () { resolve(); }, timeInMilliseconds);
        });

        // 📖 https://stackoverflow.com/a/49406846/22944
    });
});
