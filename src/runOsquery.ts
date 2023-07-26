import { exec } from 'child_process';
import * as os from 'os';

export enum OsType {
    LINUX = 'linux',
    DARWIN = 'darwin',
    WINDOWS_NT = 'windows_nt',
}

/**
 * Executes an osquery command and returns the output.
 * @param query The osquery command to be executed.
 * @param osTypes The list of operating systems on which the command can be executed.
 * @return A Promise that resolves with the command output, or rejects with an error message.
 */
export function runOsquery(query: string, osTypes: OsType[]): Promise<string> {
    return new Promise((resolve, reject) => {
        const currentOsType = os.type().toLowerCase();

        if (!osTypes.includes(currentOsType as OsType)) {
            reject(`Unsupported operating system: ${currentOsType}`);
            return;
        }

        exec(
            `osqueryi --json "${query}"`,
            (error: Error | null, stdout: string, stderr: string) => {
                if (error) {
                    reject(`Execution error: ${error.message}`);
                } else if (stderr) {
                    reject(`Command error: ${stderr}`);
                } else {
                    resolve(stdout);
                }
            },
        );
    });
}
