import { getCpuInfo } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOSQuery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getCpuInfo', () => {
  it('resolves with cpu_info table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedCpuInfo = [
      {
        device_id: 'device_id',
        model: 'model',
        manufacturer: 'manufacturer',
        processor_type: 'processor_type',
        cpu_status: 1,
        number_of_cores: '4',
        logical_processors: 8,
        address_width: '64',
        current_clock_speed: 3600,
        max_clock_speed: 5000,
        socket_designation: 'socket_designation',
        availability: 'availability',
        number_of_efficiency_cores: 2,
        number_of_performance_cores: 2,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedCpuInfo));

    await expect(getCpuInfo()).resolves.toEqual(expectedCpuInfo);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM cpu_info', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getCpuInfo()).rejects.toEqual('Command failed');
  });
});
