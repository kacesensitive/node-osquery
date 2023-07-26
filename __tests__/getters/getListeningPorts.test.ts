import { getListeningPorts } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getListeningPorts', () => {
  it('resolves with listening_ports table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedListeningPorts = [
      {
        pid: 123,
        port: 8080,
        protocol: 6,
        family: 2,
        address: '0.0.0.0',
        fd: 5,
        socket: '0x55963a6f2f70',
        net_namespace: '',
        path: '',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedListeningPorts));

    await expect(getListeningPorts()).resolves.toEqual(expectedListeningPorts);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM listening_ports', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getListeningPorts()).rejects.toEqual('Command failed');
  });
});
