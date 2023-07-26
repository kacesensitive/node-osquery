import { getGroups } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getGroups', () => {
  it('resolves with groups table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedGroups = [
      {
        gid: 1000,
        gid_signed: 1000,
        groupname: 'testgroup',
        group_sid: '',
        comment: '',
        is_hidden: 0,
        pid_with_namespace: 0,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedGroups));

    await expect(getGroups()).resolves.toEqual(expectedGroups);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM groups', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getGroups()).rejects.toEqual('Command failed');
  });
});
