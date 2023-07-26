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
jest.mock('../../src/runOSQuery', () => ({
    runOsquery: jest.fn(),
    OsType: {
        LINUX: 'linux',
        DARWIN: 'darwin',
        WINDOWS_NT: 'windows_nt',
    }
}));
describe('getAtomPackages', () => {
    it('resolves with atom_packages table on success', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRunOsquery = runOSQuery_1.runOsquery;
        const expectedAtomPackages = [
            {
                name: 'Atom',
                version: '1.0.0',
                description: 'A hackable text editor for the 21st Century',
                path: '/usr/local/bin/atom',
                license: 'MIT',
                homepage: 'https://atom.io',
                uid: 501
            },
        ];
        mockRunOsquery.mockResolvedValue(JSON.stringify(expectedAtomPackages));
        yield expect((0, getters_1.getAtomPackages)()).resolves.toEqual(expectedAtomPackages);
        expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM atom_packages', [runOSQuery_1.OsType.LINUX, runOSQuery_1.OsType.DARWIN, runOSQuery_1.OsType.WINDOWS_NT]);
    }));
    it('rejects with error on command failure', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRunOsquery = runOSQuery_1.runOsquery;
        mockRunOsquery.mockRejectedValue('Command failed');
        yield expect((0, getters_1.getAtomPackages)()).rejects.toEqual('Command failed');
    }));
});
