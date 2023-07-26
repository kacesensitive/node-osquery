import { getStartupItems } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { StartupItems } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getStartupItems', () => {
  it('resolves with startup_items table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedStartupItems: StartupItems[] = [
      {
        name: "Test",
        path: "/usr/bin/test",
        args: "-option",
        type: "Startup",
        source: "System",
        status: "Enabled",
        username: "User",
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedStartupItems));

    await expect(getStartupItems()).resolves.toEqual(expectedStartupItems);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM startup_items', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getStartupItems()).rejects.toEqual('Command failed');
  });
});
