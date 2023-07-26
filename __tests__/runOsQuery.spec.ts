import * as os from 'os';
import { runOsquery, OsType } from '../src/runOsquery';
import { run } from 'node:test';

// Mock child_process.exec
jest.mock('child_process', () => ({
  exec: jest.fn(
    (command, options) =>
      new Promise((resolve, reject) => {
        if (command === 'osqueryi --json "select * from users"') {
          resolve({ stdout: 'command output', stderr: '' });
        } else {
          reject(new Error('Command failed'));
        }
      }),
  ),
}));

// Mock os.type
jest.mock('os', () => ({
  type: jest.fn(),
}));

describe('runOsquery', () => {
  it('resolves with command output on success', async () => {
    const mockOsType = os.type as jest.MockedFunction<typeof os.type>;
    mockOsType.mockReturnValue('Linux');
    runOsquery('select * from users', [OsType.LINUX]).then((result) => {
      expect(result).toEqual('command output');
    });
  }, 10000);

  it('rejects with error on unsupported OS', async () => {
    const mockOsType = os.type as jest.MockedFunction<typeof os.type>;
    mockOsType.mockReturnValue('Windows_NT');

    await expect(
      runOsquery('select * from users', [OsType.LINUX]),
    ).rejects.toEqual('Unsupported operating system: windows_nt');
  });
});
