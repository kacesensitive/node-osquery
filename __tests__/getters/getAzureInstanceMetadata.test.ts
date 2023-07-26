import { getAzureInstanceMetadata } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
    runOsquery: jest.fn(),
    OsType: {
        LINUX: 'linux',
        DARWIN: 'darwin',
        WINDOWS_NT: 'windows_nt',
    },
}));

describe('getAzureInstanceMetadata', () => {
    it('resolves with azure_instance_metadata table on success', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
        const expectedMetadata = [
            {
                location: 'location',
                name: 'name',
                offer: 'offer',
                publisher: 'publisher',
                sku: 'sku',
                version: 'version',
                os_type: 'os_type',
                platform_update_domain: 'platform_update_domain',
                platform_fault_domain: 'platform_fault_domain',
                vm_id: 'vm_id',
                vm_size: 'vm_size',
                subscription_id: 'subscription_id',
                resource_group_name: 'resource_group_name',
                placement_group_id: 'placement_group_id',
                vm_scale_set_name: 'vm_scale_set_name',
                zone: 'zone',
            },
        ];
        mockRunOsquery.mockResolvedValue(JSON.stringify(expectedMetadata));

        await expect(getAzureInstanceMetadata()).resolves.toEqual(expectedMetadata);
        expect(mockRunOsquery).toHaveBeenCalledWith(
            'SELECT * FROM azure_instance_metadata',
            [OsType.LINUX, OsType.DARWIN, OsType.WINDOWS_NT],
        );
    });

    it('rejects with error on command failure', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
        mockRunOsquery.mockRejectedValue('Command failed');

        await expect(getAzureInstanceMetadata()).rejects.toEqual('Command failed');
    });
});
