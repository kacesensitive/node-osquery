import { getChromeExtensions } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOSQuery';

jest.mock('../../src/runOsquery', () => ({
    runOsquery: jest.fn(),
    OsType: {
        LINUX: 'linux',
        DARWIN: 'darwin',
        WINDOWS_NT: 'windows_nt',
    },
}));

describe('getChromeExtensions', () => {
    it('resolves with chrome_extensions table on success', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
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

        await expect(getChromeExtensions()).resolves.toEqual(expectedChromeExtensions);
        expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM chrome_extensions', [OsType.LINUX, OsType.DARWIN, OsType.WINDOWS_NT]);
    });

    it('rejects with error on command failure', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
        mockRunOsquery.mockRejectedValue('Command failed');

        await expect(getChromeExtensions()).rejects.toEqual('Command failed');
    });
});
