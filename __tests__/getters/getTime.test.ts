import { getTime } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { Time } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getTime', () => {
  it('resolves with time table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedTime: Time = {
      weekday: "Friday",
      year: 2023,
      month: 7,
      day: 26,
      hour: 12,
      minutes: 0,
      seconds: 0,
      timezone: "UTC",
      local_timezone: "UTC",
      unix_time: 1691234567,
      timestamp: "Fri, 26 Jul 2023 12:00:00 UTC",
      datetime: "2023-07-26 12:00:00",
      iso_8601: "2023-07-26T12:00:00Z",
      win_timestamp: 123,
    };
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedTime));

    await expect(getTime()).resolves.toEqual(expectedTime);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM time', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getTime()).rejects.toEqual('Command failed');
  });
});