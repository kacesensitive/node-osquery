import { getLoggedInUsers } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getLoggedInUsers', () => {
  it('resolves with logged_in_users table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedLoggedInUsers = [
      {
        type: 'user',
        user: 'jdoe',
        tty: 'pts/1',
        host: '192.168.1.1',
        time: 1629293155,
        pid: 12345,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedLoggedInUsers));

    await expect(getLoggedInUsers()).resolves.toEqual(expectedLoggedInUsers);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM logged_in_users', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getLoggedInUsers()).rejects.toEqual('Command failed');
  });
});
