import { getEc2InstanceMetadata } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getEc2InstanceMetadata', () => {
  it('resolves with ec2_instance_metadata table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedEc2InstanceMetadata = [
      {
        instance_id: 'i-0abcd1234efgh5678',
        instance_type: 't2.micro',
        architecture: 'x86_64',
        region: 'us-west-2',
        availability_zone: 'us-west-2a',
        local_hostname: 'ip-192-0-2-0',
        local_ipv4: '192.0.2.0',
        mac: '0A:1B:2C:3D:4E:5F',
        security_groups: 'sg-0abcd1234efgh5678',
        iam_arn: 'arn:aws:iam::123456789012:user/David',
        ami_id: 'ami-0abcd1234efgh5678',
        reservation_id: 'r-0abcd1234efgh5678',
        account_id: '123456789012',
        ssh_public_key: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQD3F...',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedEc2InstanceMetadata));

    await expect(getEc2InstanceMetadata()).resolves.toEqual(expectedEc2InstanceMetadata);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM ec2_instance_metadata', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getEc2InstanceMetadata()).rejects.toEqual('Command failed');
  });
});
