import { getInterfaceAddresses } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getInterfaceAddresses', () => {
  it('resolves with interface_addresses table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedInterfaceAddresses = [
      {
        interface: 'eth0',
        address: '192.168.0.1',
        mask: '255.255.255.0',
        broadcast: '192.168.0.255',
        point_to_point: '',
        type: 'ipv4',
        friendly_name: 'Ethernet',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedInterfaceAddresses));

    await expect(getInterfaceAddresses()).resolves.toEqual(expectedInterfaceAddresses);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM interface_addresses', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getInterfaceAddresses()).rejects.toEqual('Command failed');
  });
});
