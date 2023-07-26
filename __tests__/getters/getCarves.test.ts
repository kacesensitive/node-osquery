import { getCarves } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOSQuery';

jest.mock('../../src/runOsquery', () => ({
    runOsquery: jest.fn(),
    OsType: {
        LINUX: 'linux',
        DARWIN: 'darwin',
        WINDOWS_NT: 'windows_nt',
    },
}));

describe('getCarves', () => {
    it('resolves with carves table on success', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
        const expectedCarves = [{
            time: 1234567890,
            sha256: "sha256",
            size: 12345,
            path: "/path/to/carve",
            status: "status",
            carve_guid: "guid",
            request_id: "request_id",
            carve: 1
        }];
        mockRunOsquery.mockResolvedValue(JSON.stringify(expectedCarves));

        await expect(getCarves()).resolves.toEqual(expectedCarves);
        expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM carves', [OsType.LINUX, OsType.DARWIN, OsType.WINDOWS_NT]);
    });

    it('rejects with error on command failure', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
        mockRunOsquery.mockRejectedValue('Command failed');

        await expect(getCarves()).rejects.toEqual('Command failed');
    });
});
