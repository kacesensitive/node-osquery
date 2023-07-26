import { getSystemInfo } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { SystemInfo } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType
    : {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getSystemInfo', () => {
  it('resolves with system_info table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedSystemInfo: SystemInfo = {
      hostname: "test",
      uuid: "UUID",
      cpu_type: "x86_64",
      cpu_subtype: "Intel(R) Core(TM) i7-9700K CPU @ 3.60GHz",
      cpu_brand: "Intel",
      cpu_physical_cores: 8,
      cpu_logical_cores: 8,
      cpu_microcode: "0x96",
      physical_memory: 123,
      hardware_vendor: "Lenovo",
      hardware_model: "ThinkPad",
      hardware_version: "1.0",
      hardware_serial: "SN123456",
      board_vendor: "Lenovo",
      board_model: "ThinkPad",
      board_version: "1.0",
      board_serial: "SN123456",
      computer_name: "test",
      local_hostname: "test.local",
    };
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedSystemInfo));

    await expect(getSystemInfo()).resolves.toEqual(expectedSystemInfo);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM system_info', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getSystemInfo()).rejects.toEqual('Command failed');
  });
});