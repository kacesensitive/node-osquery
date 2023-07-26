import { getSshConfigs } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { SshConfigs } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getSshConfigs', () => {
  it('resolves with ssh_configs table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedSshConfigs: SshConfigs[] = [
      {
        uid: 1000,
        block: "Host",
        option: "Port",
        ssh_config_file: "/home/user/.ssh/config",
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedSshConfigs));

    await expect(getSshConfigs()).resolves.toEqual(expectedSshConfigs);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM ssh_configs', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getSshConfigs()).rejects.toEqual('Command failed');
  });
});
