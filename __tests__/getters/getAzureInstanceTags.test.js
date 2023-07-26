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
describe('getAzureInstanceTags', () => {
    it('resolves with azure_instance_tags table on success', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRunOsquery = runOSQuery_1.runOsquery;
        const expectedTags = [{
                vm_id: "vm_id",
                key: "key",
                value: "value"
            }];
        mockRunOsquery.mockResolvedValue(JSON.stringify(expectedTags));
        yield expect((0, getters_1.getAzureInstanceTags)()).resolves.toEqual(expectedTags);
        expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM azure_instance_tags', [runOSQuery_1.OsType.LINUX, runOSQuery_1.OsType.DARWIN, runOSQuery_1.OsType.WINDOWS_NT]);
    }));
    it('rejects with error on command failure', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRunOsquery = runOSQuery_1.runOsquery;
        mockRunOsquery.mockRejectedValue('Command failed');
        yield expect((0, getters_1.getAzureInstanceTags)()).rejects.toEqual('Command failed');
    }));
});
