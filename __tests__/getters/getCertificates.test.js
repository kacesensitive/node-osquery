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
describe('getCertificates', () => {
    it('resolves with certificates table on success', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRunOsquery = runOSQuery_1.runOsquery;
        const expectedCertificates = [{
                common_name: "common_name",
                subject: "subject",
                issuer: "issuer",
                ca: 1,
                self_signed: 0,
                not_valid_before: "not_valid_before",
                not_valid_after: "not_valid_after",
                signing_algorithm: "signing_algorithm",
                key_algorithm: "key_algorithm",
                key_strength: "key_strength",
                key_usage: "key_usage",
                subject_key_id: "subject_key_id",
                authority_key_id: "authority_key_id",
                sha1: "sha1",
                path: "/path/to/certificate",
                serial: "serial",
                sid: "sid",
                store_location: "store_location",
                store: "store",
                username: "username",
                store_id: "store_id",
                issuer2: "issuer2",
                subject2: "subject2"
            }];
        mockRunOsquery.mockResolvedValue(JSON.stringify(expectedCertificates));
        yield expect((0, getters_1.getCertificates)()).resolves.toEqual(expectedCertificates);
        expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM certificates', [runOSQuery_1.OsType.LINUX, runOSQuery_1.OsType.DARWIN, runOSQuery_1.OsType.WINDOWS_NT]);
    }));
    it('rejects with error on command failure', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRunOsquery = runOSQuery_1.runOsquery;
        mockRunOsquery.mockRejectedValue('Command failed');
        yield expect((0, getters_1.getCertificates)()).rejects.toEqual('Command failed');
    }));
});
