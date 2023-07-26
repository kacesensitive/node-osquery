import { getEtcServices } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getEtcServices', () => {
  it('resolves with etc_services table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedEtcServices = [
      {
        name: 'http',
        port: 80,
        protocol: 'tcp',
        aliases: '',
        comment: 'World Wide Web HTTP',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedEtcServices));

    await expect(getEtcServices()).resolves.toEqual(expectedEtcServices);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM etc_services', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getEtcServices()).rejects.toEqual('Command failed');
  });
});
