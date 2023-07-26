import { getUserSshKeys } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { UserSshKeys } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getUserSshKeys', () => {
  it('resolves with user_ssh_keys table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedUserSshKeys: UserSshKeys[] = [
      {
        uid: 123,
        path: "/home/test/.ssh/id_rsa",
        encrypted: 1,
        key_type: "rsa",
        pid_with_namespace: 0,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedUserSshKeys));

    await expect(getUserSshKeys()).resolves.toEqual(expectedUserSshKeys);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM user_ssh_keys', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getUserSshKeys()).rejects.toEqual('Command failed');
  });
});
