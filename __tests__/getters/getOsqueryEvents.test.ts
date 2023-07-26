import { getOsqueryEvents } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getOsqueryEvents', () => {
  it('resolves with osquery_events table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedOsqueryEvents = [
      {
        name: 'fsevents',
        publisher: 'kernel',
        type: 'subscription',
        subscriptions: 5,
        events: 1200,
        refreshes: 3,
        active: 1,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedOsqueryEvents));

    await expect(getOsqueryEvents()).resolves.toEqual(expectedOsqueryEvents);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM osquery_events', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getOsqueryEvents()).rejects.toEqual('Command failed');
  });
});
