import { getOsVersion } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getOsVersion', () => {
  it('resolves with os_version table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedOsVersion = {
      name: 'macOS',
      version: '10.15.7',
      major: 10,
      minor: 15,
      patch: 7,
      build: '19H15',
      platform: 'darwin',
      platform_like: 'darwin',
      codename: 'Catalina',
      arch: 'x86_64',
      install_date: 1596240000,
      pid_with_namespace: 12345,
      mount_namespace_id: '45678',
    };
    mockRunOsquery.mockResolvedValue(JSON.stringify([expectedOsVersion])); // Mock as an array, getOsVersion expects the result as an array and selects the first element

    await expect(getOsVersion()).resolves.toEqual(expectedOsVersion);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM os_version', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getOsVersion()).rejects.toEqual('Command failed');
  });
});
