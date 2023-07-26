import { getYCloudInstanceMetadata } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { YCloudInstanceMetadata } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getYCloudInstanceMetadata', () => {
  it('resolves with ycloud_instance_metadata table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedYCloudInstanceMetadata: YCloudInstanceMetadata[] = [
      {
        instance_id: "test",
        folder_id: "test",
        name: "test",
        description: "test",
        hostname: "test",
        zone: "test",
        ssh_public_key: "test",
        serial_port_enabled: "test",
        metadata_endpoint: "test",
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedYCloudInstanceMetadata));

    await expect(getYCloudInstanceMetadata()).resolves.toEqual(expectedYCloudInstanceMetadata);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM ycloud_instance_metadata', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getYCloudInstanceMetadata()).rejects.toEqual('Command failed');
  });
});
