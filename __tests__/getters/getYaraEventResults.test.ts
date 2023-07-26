import { getYaraEventResults } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { YaraEvents } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getYaraEventResults', () => {
  it('resolves with yara_events table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedYaraEvents: YaraEvents[] = [
      {
        target_path: "/test/file",
        category: "test",
        action: "test",
        transaction_id: 1,
        matches: "test",
        count: 1,
        strings: "test",
        tags: "test",
        time: 1618808843,
        eid: "test",
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedYaraEvents));

    await expect(getYaraEventResults()).resolves.toEqual(expectedYaraEvents);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM yara_events', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getYaraEventResults()).rejects.toEqual('Command failed');
  });
});
