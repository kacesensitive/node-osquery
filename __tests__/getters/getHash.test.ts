import { getHash } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getHash', () => {
  it('resolves with hash table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedHashes = [
      {
        path: '/path/to/file',
        directory: '/path/to',
        md5: '098f6bcd4621d373cade4e832627b4f6',
        sha1: '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8',
        sha256: '6dcd4ce23d88e2ee95838f7b014b6284ff4a7acca8819c769ce6aec8f55a1834',
        pid_with_namespace: 0,
        mount_namespace_id: '',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedHashes));

    await expect(getHash()).resolves.toEqual(expectedHashes);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM hash', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getHash()).rejects.toEqual('Command failed');
  });
});
