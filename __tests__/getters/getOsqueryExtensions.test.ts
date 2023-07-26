import { getOsqueryExtensions } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getOsqueryExtensions', () => {
  it('resolves with osquery_extensions table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedOsqueryExtensions = [
      {
        uuid: 123,
        name: 'TestExtension',
        version: '1.0.0',
        sdk_version: '4.5.1',
        path: '/usr/local/osquery/extensions/test_extension.ext',
        type: 'extension',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedOsqueryExtensions));

    await expect(getOsqueryExtensions()).resolves.toEqual(expectedOsqueryExtensions);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM osquery_extensions', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getOsqueryExtensions()).rejects.toEqual('Command failed');
  });
});
