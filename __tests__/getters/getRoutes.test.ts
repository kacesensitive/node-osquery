import { getRoutes } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { Routes } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getRoutes', () => {
  it('resolves with routes table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedRoutes: Routes[] = [
      {
        destination: "192.168.1.0",
        netmask: 24,
        gateway: "192.168.1.1",
        source: "192.168.1.100",
        flags: 2,
        interface: "eth0",
        mtu: 1500,
        metric: 1,
        type: "U",
        hopcount: 0,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedRoutes));

    await expect(getRoutes()).resolves.toEqual(expectedRoutes);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM routes', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getRoutes()).rejects.toEqual('Command failed');
  });
});
