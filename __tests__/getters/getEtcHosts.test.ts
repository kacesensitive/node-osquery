import { getEtcHosts } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getEtcHosts', () => {
  it('resolves with etc_hosts table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedEtcHosts = [
      {
        address: '127.0.0.1',
        hostnames: 'localhost',
        pid_with_namespace: 0,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedEtcHosts));

    await expect(getEtcHosts()).resolves.toEqual(expectedEtcHosts);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM etc_hosts', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getEtcHosts()).rejects.toEqual('Command failed');
  });
});
