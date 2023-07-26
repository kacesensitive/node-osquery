import { getCurl } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

const replacer = (key: any, value: { toString: () => any }) =>
    typeof value === 'bigint' ? value.toString() : value;

jest.mock('../../src/runOsquery', () => ({
    runOsquery: jest.fn(),
    OsType: {
        LINUX: 'linux',
        DARWIN: 'darwin',
        WINDOWS_NT: 'windows_nt',
    },
}));

describe('getCurl', () => {
    it('resolves with curl table on success', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
        const expectedCurl = [
            {
                url: 'url',
                method: 'method',
                user_agent: 'user_agent',
                response_code: 200,
                round_trip_time: 1000,
                bytes: 5000,
                result: 'result',
            },
        ];
        mockRunOsquery.mockResolvedValue(JSON.stringify(expectedCurl, replacer));

        await expect(getCurl()).resolves.toEqual(expectedCurl);
        expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM curl', [
            OsType.LINUX,
            OsType.DARWIN,
            OsType.WINDOWS_NT,
        ]);
    });

    it('rejects with error on command failure', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
        mockRunOsquery.mockRejectedValue('Command failed');

        await expect(getCurl()).rejects.toEqual('Command failed');
    });
});
