import { getPlatformInfo } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getPlatformInfo', () => {
  it('resolves with platform_info table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedPlatformInfo = [
      {
        vendor: 'Apple Inc.',
        version: 'MBP111.88Z.0167.B00.2001010101',
        date: '01/01/01',
        revision: '1.0',
        extra: '',
        firmware_type: 'EFI',
        address: '0x7c000',
        size: '0x10000',
        volume_size: 8388608,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedPlatformInfo));

    await expect(getPlatformInfo()).resolves.toEqual(expectedPlatformInfo);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM platform_info', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getPlatformInfo()).rejects.toEqual('Command failed');
  });
});
