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
describe('getChromeExtensions', () => {
    it('resolves with chrome_extensions table on success', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRunOsquery = runOSQuery_1.runOsquery;
        const expectedChromeExtensions = [{
                browser_type: "Chrome",
                uid: 1000,
                name: "Extension Name",
                profile: "Profile",
                profile_path: "/path/to/profile",
                referenced_identifier: "referenced_identifier",
                identifier: "identifier",
                version: "1.0",
                description: "Extension Description",
                default_locale: "en",
                current_locale: "en",
                update_url: "https://update.url",
                author: "Author",
                persistent: 1,
                path: "/path/to/extension",
                permissions: "permissions",
                permissions_json: "{}",
                optional_permissions: "optional_permissions",
                optional_permissions_json: "{}",
                manifest_hash: "manifest_hash",
                referenced: 1,
                from_webstore: "Yes",
                state: "Enabled",
                install_time: "install_time",
                install_timestamp: 1234567890,
                manifest_json: "{}",
                key: "key"
            }];
        mockRunOsquery.mockResolvedValue(JSON.stringify(expectedChromeExtensions));
        yield expect((0, getters_1.getChromeExtensions)()).resolves.toEqual(expectedChromeExtensions);
        expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM chrome_extensions', [runOSQuery_1.OsType.LINUX, runOSQuery_1.OsType.DARWIN, runOSQuery_1.OsType.WINDOWS_NT]);
    }));
    it('rejects with error on command failure', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockRunOsquery = runOSQuery_1.runOsquery;
        mockRunOsquery.mockRejectedValue('Command failed');
        yield expect((0, getters_1.getChromeExtensions)()).rejects.toEqual('Command failed');
    }));
});
