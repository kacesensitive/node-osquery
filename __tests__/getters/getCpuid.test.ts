import { getCpuid } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOSQuery';

jest.mock('../../src/runOsquery', () => ({
    runOsquery: jest.fn(),
    OsType: {
        LINUX: 'linux',
        DARWIN: 'darwin',
        WINDOWS_NT: 'windows_nt',
    },
}));

describe('getCpuid', () => {
    it('resolves with cpuid table on success', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
        const expectedCpuid = [{
            feature: "feature",
            value: "value",
            output_register: "output_register",
            output_bit: 1,
            input_eax: "input_eax"
        }];
        mockRunOsquery.mockResolvedValue(JSON.stringify(expectedCpuid));

        await expect(getCpuid()).resolves.toEqual(expectedCpuid);
        expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM cpuid', [OsType.LINUX, OsType.DARWIN, OsType.WINDOWS_NT]);
    });

    it('rejects with error on command failure', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
        mockRunOsquery.mockRejectedValue('Command failed');

        await expect(getCpuid()).rejects.toEqual('Command failed');
    });
});
