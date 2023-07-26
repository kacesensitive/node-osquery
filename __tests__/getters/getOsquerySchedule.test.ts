import { getOsquerySchedule } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getOsquerySchedule', () => {
  it('resolves with osquery_schedule table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedOsquerySchedule = [
      {
        name: 'TestQuery',
        query: 'SELECT * FROM osquery_schedule',
        interval: 10,
        executions: 123,
        last_executed: 123,
        denylisted: 0,
        output_size: 123,
        wall_time: 123,
        wall_time_ms: 123,
        last_wall_time_ms: 123,
        user_time: 123,
        last_user_time: 123,
        system_time: 123,
        last_system_time: 123,
        average_memory: 123,
        last_memory: 123,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedOsquerySchedule));

    await expect(getOsquerySchedule()).resolves.toEqual(expectedOsquerySchedule);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM osquery_schedule', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getOsquerySchedule()).rejects.toEqual('Command failed');
  });
});
