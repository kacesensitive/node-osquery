import { getUsers } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { Users } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getUsers', () => {
  it('resolves with users table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedUsers: Users[] = [
      {
        uid: 123,
        gid: 123,
        uid_signed: 123,
        gid_signed: 123,
        username: "test",
        description: "Test User",
        directory: "/home/test",
        shell: "/bin/bash",
        uuid: "UUID",
        type: "user",
        is_hidden: 0,
        pid_with_namespace: 0,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedUsers));

    await expect(getUsers()).resolves.toEqual(expectedUsers);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM users', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getUsers()).rejects.toEqual('Command failed');
  });
});
