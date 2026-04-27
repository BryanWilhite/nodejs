// Import the child_process module
import { exec } from 'child_process';

const args = process.argv.slice(2); //because arg-0 is path to the Node.js executable and arg-1 is path to this script file

// Command to run (example: list files)
exec(`dotnet run --file hello-world-with-args.cs -- ${args[0]}`,
    (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`, {error});

            return;
        }

        if (stderr) {
            console.error(`Command error output: ${stderr}`, {stderr});

            return;
        }

        console.log(`Command output:\n${stdout}`);
    });
