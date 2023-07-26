import { getOsqueryPacks } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getOsqueryPacks', () => {
  it('resolves with osquery_packs table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedOsqueryPacks = [
      {
        name: 'TestPack',
        platform: 'darwin',
        version: '1.0.0',
        shard: 0,
        discovery_cache_hits: 5,
        discovery_executions: 10,
        active: 1,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedOsqueryPacks));

    await expect(getOsqueryPacks()).resolves.toEqual(expectedOsqueryPacks);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM osquery_packs', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getOsqueryPacks()).rejects.toEqual('Command failed');
  });
});
