import { getEc2InstanceTags } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getEc2InstanceTags', () => {
  it('resolves with ec2_instance_tags table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedEc2InstanceTags = [
      {
        instance_id: 'i-0abcd1234efgh5678',
        key: 'Name',
        value: 'My Instance',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedEc2InstanceTags));

    await expect(getEc2InstanceTags()).resolves.toEqual(expectedEc2InstanceTags);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM ec2_instance_tags', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getEc2InstanceTags()).rejects.toEqual('Command failed');
  });
});
