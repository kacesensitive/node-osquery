import { getCertificates } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOSQuery';

jest.mock('../../src/runOsquery', () => ({
    runOsquery: jest.fn(),
    OsType: {
        LINUX: 'linux',
        DARWIN: 'darwin',
        WINDOWS_NT: 'windows_nt',
    },
}));

describe('getCertificates', () => {
    it('resolves with certificates table on success', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
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

        await expect(getCertificates()).resolves.toEqual(expectedCertificates);
        expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM certificates', [OsType.LINUX, OsType.DARWIN, OsType.WINDOWS_NT]);
    });

    it('rejects with error on command failure', async () => {
        const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
        mockRunOsquery.mockRejectedValue('Command failed');

        await expect(getCertificates()).rejects.toEqual('Command failed');
    });
});
