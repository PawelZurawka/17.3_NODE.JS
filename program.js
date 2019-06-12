process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
    const input = process.stdin.read();
    if(input !== null) {
        const instruction = input.toString().trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write(`Quitting app!\n`);
                process.exit();
                break;
            case '/info':
                process.stdout.write(`Node version: ${process.versions.node}\nSystem language and encoding: ${process.env.LANG}\n`);
                break;
            default:
                process.stderr.write(`Wrong instruction!\n`);
        }
    }
});