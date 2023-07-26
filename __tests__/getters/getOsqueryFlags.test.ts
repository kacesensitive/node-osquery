import { getOsqueryFlags } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getOsqueryFlags', () => {
  it('resolves with osquery_flags table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedOsqueryFlags = [
      {
        name: 'disable_events',
        type: 'bool',
        description: 'Disable osquery publish/subscribe system.',
        default_value: 'false',
        value: 'false',
        shell_only: 0,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedOsqueryFlags));

    await expect(getOsqueryFlags()).resolves.toEqual(expectedOsqueryFlags);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM osquery_flags', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getOsqueryFlags()).rejects.toEqual('Command failed');
  });
});
