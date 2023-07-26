import { getUptime } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { Uptime } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getUptime', () => {
  it('resolves with uptime table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedUptime: Uptime = {
      days: 10,
      hours: 12,
      minutes: 0,
      seconds: 0,
      total_seconds: 123,
    };
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedUptime));

    await expect(getUptime()).resolves.toEqual(expectedUptime);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM uptime', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getUptime()).rejects.toEqual('Command failed');
  });
});
