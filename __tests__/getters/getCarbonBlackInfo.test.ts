import { getCarbonBlackInfo } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOSQuery';

jest.mock('../../src/runOsquery', () => ({
    runOsquery: jest.fn(),
    OsType: {
        LINUX: 'linux',
        DARWIN: 'darwin',
        WINDOWS_NT: 'windows_nt',
    },
}));

describe('getCarbonBlackInfo', () => {
    it('resolves with carbon_black_info table on success', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
        const expectedCarbonBlackInfo = [{
            sensor_id: 1,
            config_name: "config_name",
            collect_store_files: 1,
            collect_module_loads: 1,
            collect_module_info: 1,
            collect_file_mods: 1,
            collect_reg_mods: 1,
            collect_net_conns: 1,
            collect_processes: 1,
            collect_cross_processes: 1,
            collect_emet_events: 1,
            collect_data_file_writes: 1,
            collect_process_user_context: 1,
            collect_sensor_operations: 1,
            log_file_disk_quota_mb: 1,
            log_file_disk_quota_percentage: 1,
            protection_disabled: 1,
            sensor_ip_addr: "sensor_ip_addr",
            sensor_backend_server: "sensor_backend_server",
            event_queue: 1,
            binary_queue: 1,
        }];
        mockRunOsquery.mockResolvedValue(JSON.stringify(expectedCarbonBlackInfo));

        await expect(getCarbonBlackInfo()).resolves.toEqual(expectedCarbonBlackInfo);
        expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM carbon_black_info', [OsType.LINUX, OsType.DARWIN, OsType.WINDOWS_NT]);
    });

    it('rejects with error on command failure', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
        mockRunOsquery.mockRejectedValue('Command failed');

        await expect(getCarbonBlackInfo()).rejects.toEqual('Command failed');
    });
});
