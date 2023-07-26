import { getProcessMemoryMap } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getProcessMemoryMap', () => {
  it('resolves with process_memory_map table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedProcessMemoryMap = [
      {
        pid: 1,
        start: '00007fff5fc00000',
        end: '00007fff5fc01000',
        permissions: 'r-xp',
        offset: 123,
        device: 'fe:01',
        inode: 123,
        path: '',
        pseudo: 1,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedProcessMemoryMap));

    await expect(getProcessMemoryMap()).resolves.toEqual(expectedProcessMemoryMap);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM process_memory_map', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getProcessMemoryMap()).rejects.toEqual('Command failed');
  });
});
