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
describe('getChromeExtensionContentScripts', () => {
    it('resolves with chrome_extension_content_scripts table on success', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRunOsquery = runOSQuery_1.runOsquery;
        const expectedChromeExtensionContentScripts = [{
                browser_type: "Chrome",
                uid: 1000,
                identifier: "identifier",
                version: "1.0",
                script: "/path/to/script.js",
                match: "*.example.com/*",
                profile_path: "/path/to/profile",
                path: "/path/to/extension",
                referenced: 1
            }];
        mockRunOsquery.mockResolvedValue(JSON.stringify(expectedChromeExtensionContentScripts));
        yield expect((0, getters_1.getChromeExtensionContentScripts)()).resolves.toEqual(expectedChromeExtensionContentScripts);
        expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM chrome_extension_content_scripts', [runOSQuery_1.OsType.LINUX, runOSQuery_1.OsType.DARWIN, runOSQuery_1.OsType.WINDOWS_NT]);
    }));
    it('rejects with error on command failure', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRunOsquery = runOSQuery_1.runOsquery;
        mockRunOsquery.mockRejectedValue('Command failed');
        yield expect((0, getters_1.getChromeExtensionContentScripts)()).rejects.toEqual('Command failed');
    }));
});
