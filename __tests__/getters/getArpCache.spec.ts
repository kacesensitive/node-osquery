import { getArpCache } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

// Mock runOsquery function
jest.mock('../../src/runOsquery', () => ({
    runOsquery: jest.fn(),
    OsType: {
        LINUX: 'linux',
        DARWIN: 'darwin',
        WINDOWS_NT: 'windows_nt',
    },
}));

describe('getArpCache', () => {
    it('resolves with arp_cache table on success', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
        const expectedArpCache = [
            {
                address: '192.168.1.1',
                mac: '00:0a:95:9d:68:16',
                interface: 'eth0',
                permanent: '0',
            },
        ];
        mockRunOsquery.mockResolvedValue(JSON.stringify(expectedArpCache));

        await expect(getArpCache()).resolves.toEqual(expectedArpCache);
        expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM arp_cache', [
            OsType.LINUX,
            OsType.DARWIN,
            OsType.WINDOWS_NT,
        ]);
    });

    it('rejects with error on command failure', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
        mockRunOsquery.mockRejectedValue('Command failed');

        await expect(getArpCache()).rejects.toEqual('Command failed');
    });
});
