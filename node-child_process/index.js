// Import the child_process module
import { exec } from 'child_process';

// Command to run (example: list files)
exec('dotnet --info', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing command: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Command error output: ${stderr}`);
        return;
    }
    console.log(`Command output:\n${stdout}`);
});
