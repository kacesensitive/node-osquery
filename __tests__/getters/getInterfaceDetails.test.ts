import { getInterfaceDetails } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getInterfaceDetails', () => {
  it('resolves with interface_details table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedInterfaceDetails = [
      {
        interface: 'eth0',
        mac: 'AA:BB:CC:DD:EE:FF',
        type: 6,
        mtu: 1500,
        metric: 100,
        flags: 4163,
        ipackets: 123,
        opackets: 123,
        ibytes: 123,
        obytes: 123,
        ierrors: 123,
        oerrors: 123,
        idrops: 123,
        odrops: 123,
        collisions: 123,
        last_change: 123,
        link_speed: 123,
        pci_slot: '0000:00:03.0',
        friendly_name: 'Ethernet',
        description: 'Intel Ethernet Connection',
        manufacturer: 'Intel',
        connection_id: 'Ethernet',
        connection_status: 'Connected',
        enabled: 1,
        physical_adapter: 1,
        speed: 1000,
        service: 'e1express',
        dhcp_enabled: 1,
        dhcp_lease_expires: '',
        dhcp_lease_obtained: '',
        dhcp_server: '',
        dns_domain: '',
        dns_domain_suffix_search_order: '',
        dns_host_name: '',
        dns_server_search_order: '',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedInterfaceDetails));

    await expect(getInterfaceDetails()).resolves.toEqual(expectedInterfaceDetails);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM interface_details', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getInterfaceDetails()).rejects.toEqual('Command failed');
  });
});
