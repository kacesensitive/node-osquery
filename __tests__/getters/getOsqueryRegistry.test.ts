import { getOsqueryRegistry } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getOsqueryRegistry', () => {
  it('resolves with osquery_registry table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedOsqueryRegistry = [
      {
        registry: 'config',
        name: 'filesystem',
        owner_uuid: 0,
        internal: 1,
        active: 1,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedOsqueryRegistry));

    await expect(getOsqueryRegistry()).resolves.toEqual(expectedOsqueryRegistry);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM osquery_registry', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getOsqueryRegistry()).rejects.toEqual('Command failed');
  });
});
