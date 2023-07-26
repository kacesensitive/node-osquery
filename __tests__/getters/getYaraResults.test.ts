import { getYaraResults } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { Yara } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getYaraResults', () => {
  it('resolves with yara table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedYara: Yara[] = [
      {
        path: "/test/file",
        matches: "test",
        count: 1,
        sig_group: "test",
        sigfile: "test",
        sigrule: "test",
        strings: "test",
        tags: "test",
        sigurl: "test",
        pid_with_namespace: 0,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedYara));

    await expect(getYaraResults('/test/file')).resolves.toEqual(expectedYara);
    expect(mockRunOsquery).toHaveBeenCalledWith(`SELECT * FROM yara WHERE path='/test/file'`, [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getYaraResults('/test/file')).rejects.toEqual('Command failed');
  });
});
