"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const getters_1 = require("../../src/getters");
const runOSQuery_1 = require("../../src/runOSQuery");
jest.mock('../../src/runOsquery', () => ({
    runOsquery: jest.fn(),
    OsType: {
        LINUX: 'linux',
        DARWIN: 'darwin',
        WINDOWS_NT: 'windows_nt',
    },
}));
describe('getCarbonBlackInfo', () => {
    it('resolves with carbon_black_info table on success', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRunOsquery = runOSQuery_1.runOsquery;
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
        yield expect((0, getters_1.getCarbonBlackInfo)()).resolves.toEqual(expectedCarbonBlackInfo);
        expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM carbon_black_info', [runOSQuery_1.OsType.LINUX, runOSQuery_1.OsType.DARWIN, runOSQuery_1.OsType.WINDOWS_NT]);
    }));
    it('rejects with error on command failure', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRunOsquery = runOSQuery_1.runOsquery;
        mockRunOsquery.mockRejectedValue('Command failed');
        yield expect((0, getters_1.getCarbonBlackInfo)()).rejects.toEqual('Command failed');
    }));
});
