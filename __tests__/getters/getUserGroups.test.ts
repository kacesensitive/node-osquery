import { getUserGroups } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { UserGroups } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getUserGroups', () => {
  it('resolves with user_groups table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedUserGroups: UserGroups[] = [
      {
        uid: 123,
        gid: 123,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedUserGroups));

    await expect(getUserGroups()).resolves.toEqual(expectedUserGroups);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM user_groups', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getUserGroups()).rejects.toEqual('Command failed');
  });
});
