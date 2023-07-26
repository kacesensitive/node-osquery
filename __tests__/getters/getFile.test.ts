import { getFile } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getFile', () => {
  it('resolves with file table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedFile = [
      {
        path: '/path/to/file',
        directory: '/path/to',
        filename: 'file',
        inode: 123456,
        uid: 1001,
        gid: 1001,
        mode: 'rw-r--r--',
        device: 64769,
        size: 4096,
        block_size: 4096,
        atime: 1587152400,
        mtime: 1587152400,
        ctime: 1587152400,
        btime: 1587152400,
        hard_links: 1,
        symlink: 0,
        type: 'regular',
        attributes: '',
        volume_serial: '',
        file_id: '',
        file_version: '',
        product_version: '',
        original_filename: '',
        bsd_flags: '',
        pid_with_namespace: 0,
        mount_namespace_id: '',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedFile));

    await expect(getFile()).resolves.toEqual(expectedFile);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM file', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getFile()).rejects.toEqual('Command failed');
  });
});
