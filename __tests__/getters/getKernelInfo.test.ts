import { getKernelInfo } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getKernelInfo', () => {
  it('resolves with kernel_info table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedKernelInfo = {
      version: '5.4.0-26-generic',
      arguments: '',
      path: '/boot/vmlinuz-5.4.0-26-generic',
      device: '/dev/sda1',
    };
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedKernelInfo));

    await expect(getKernelInfo()).resolves.toEqual(expectedKernelInfo);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM kernel_info', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });
});