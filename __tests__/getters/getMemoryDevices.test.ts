import { getMemoryDevices } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getMemoryDevices', () => {
  it('resolves with memory_devices table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedMemoryDevices = [
      {
        handle: '0x0029',
        location: 'DIMM_A0',
        manufacturer: 'Micron',
        part: '18KSF1G72PDZ-1G6E1',
        serial: '0B250914',
        size: '16384',
        speed: '1600',
        type: 'DDR3',
        asset_tag: '0315_2708_00_A00',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedMemoryDevices));

    await expect(getMemoryDevices()).resolves.toEqual(expectedMemoryDevices);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM memory_devices', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getMemoryDevices()).rejects.toEqual('Command failed');
  });
});
