import { getEtcProtocols } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getEtcProtocols', () => {
  it('resolves with etc_protocols table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedEtcProtocols = [
      {
        name: 'tcp',
        number: 6,
        alias: 'TCP',
        comment: 'Transmission Control Protocol',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedEtcProtocols));

    await expect(getEtcProtocols()).resolves.toEqual(expectedEtcProtocols);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM etc_protocols', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getEtcProtocols()).rejects.toEqual('Command failed');
  });
});
