import { exec } from 'child_process';
import * as os from 'os';
import { runOsquery, OsType } from '../src/runOSQuery';

// Mock child_process.exec
jest.mock('child_process', () => ({
    exec: jest.fn((command, callback) => callback(null, 'command output', ''))
}));

// Mock os.type
jest.mock('os', () => ({
    type: jest.fn(),
}));

describe('runOsquery', () => {
    it('resolves with command output on success', async () => {
        const mockExec = exec as jest.MockedFunction<typeof exec>;
        const mockOsType = os.type as jest.MockedFunction<typeof os.type>;
        mockOsType.mockReturnValue('Linux');

        await expect(runOsquery('select * from users', [OsType.LINUX])).resolves.toEqual('command output');
        expect(mockExec).toHaveBeenCalledWith('osqueryi --json "select * from users"', expect.any(Function));
    });

    it('rejects with error on command failure', async () => {
        const mockExec = exec as jest.MockedFunction<typeof exec>;
        const mockOsType = os.type as jest.MockedFunction<typeof os.type>;
        mockOsType.mockReturnValue('Linux');
        //@ts-ignore
        mockExec.mockImplementationOnce((command, callback) => callback(new Error('Command failed'), '', 'stderr message'));

        await expect(runOsquery('select * from users', [OsType.LINUX])).rejects.toEqual('Execution error: Command failed');
    });

    it('rejects with error on unsupported OS', async () => {
        const mockOsType = os.type as jest.MockedFunction<typeof os.type>;
        mockOsType.mockReturnValue('Windows_NT');

        await expect(runOsquery('select * from users', [OsType.LINUX])).rejects.toEqual('Unsupported operating system: windows_nt');
    });
});
