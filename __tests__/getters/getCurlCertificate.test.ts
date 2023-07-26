import { getCurlCertificate } from '../../src/getters';
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

describe('getCurlCertificate', () => {
  it('resolves with curl_certificate table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedCurlCertificate = [
      {
        hostname: 'example.com',
        common_name: 'Example Common Name',
        organization: 'Example Organization',
        // ... add all other properties as per the structure ...
        pem: 'Example PEM',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedCurlCertificate));

    await expect(getCurlCertificate()).resolves.toEqual(expectedCurlCertificate);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM curl_certificate', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getCurlCertificate()).rejects.toEqual('Command failed');
  });
});
