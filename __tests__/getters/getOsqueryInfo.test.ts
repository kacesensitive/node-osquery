import { getOsqueryInfo } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getOsqueryInfo', () => {
  it('resolves with osquery_info table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedOsqueryInfo = {
      pid: 12345,
      uuid: 'uuid',
      instance_id: 'instance_id',
      version: '4.5.1',
      config_hash: 'config_hash',
      config_valid: 1,
      extensions: 'active',
      build_platform: 'darwin',
      build_distro: '10.15',
      start_time: 1596250000,
      watcher: 0,
      platform_mask: 1,
    };
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedOsqueryInfo));

    await expect(getOsqueryInfo()).resolves.toEqual(expectedOsqueryInfo);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM osquery_info', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getOsqueryInfo()).rejects.toEqual('Command failed');
  });
});
