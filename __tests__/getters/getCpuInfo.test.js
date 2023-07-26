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
describe('getCpuInfo', () => {
    it('resolves with cpu_info table on success', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRunOsquery = runOSQuery_1.runOsquery;
        const expectedCpuInfo = [{
                device_id: "device_id",
                model: "model",
                manufacturer: "manufacturer",
                processor_type: "processor_type",
                cpu_status: 1,
                number_of_cores: "4",
                logical_processors: 8,
                address_width: "64",
                current_clock_speed: 3600,
                max_clock_speed: 5000,
                socket_designation: "socket_designation",
                availability: "availability",
                number_of_efficiency_cores: 2,
                number_of_performance_cores: 2
            }];
        mockRunOsquery.mockResolvedValue(JSON.stringify(expectedCpuInfo));
        yield expect((0, getters_1.getCpuInfo)()).resolves.toEqual(expectedCpuInfo);
        expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM cpu_info', [runOSQuery_1.OsType.LINUX, runOSQuery_1.OsType.DARWIN, runOSQuery_1.OsType.WINDOWS_NT]);
    }));
    it('rejects with error on command failure', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRunOsquery = runOSQuery_1.runOsquery;
        mockRunOsquery.mockRejectedValue('Command failed');
        yield expect((0, getters_1.getCpuInfo)()).rejects.toEqual('Command failed');
    }));
});
