import { getAzureInstanceTags } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOSQuery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getAzureInstanceTags', () => {
  it('resolves with azure_instance_tags table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedTags = [
      {
        vm_id: 'vm_id',
        key: 'key',
        value: 'value',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedTags));

    await expect(getAzureInstanceTags()).resolves.toEqual(expectedTags);
    expect(mockRunOsquery).toHaveBeenCalledWith(
      'SELECT * FROM azure_instance_tags',
      [OsType.LINUX, OsType.DARWIN, OsType.WINDOWS_NT],
    );
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getAzureInstanceTags()).rejects.toEqual('Command failed');
  });
});
