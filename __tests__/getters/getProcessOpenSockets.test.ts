import { getProcessOpenSockets } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getProcessOpenSockets', () => {
  it('resolves with process_open_sockets table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedProcessOpenSockets = [
      {
        pid: 1,
        fd: 123,
        socket: 123,
        family: 2,
        protocol: 6,
        local_address: '0.0.0.0',
        remote_address: '0.0.0.0',
        local_port: 631,
        remote_port: 0,
        path: '',
        state: 'LISTEN',
        net_namespace: '',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedProcessOpenSockets));

    await expect(getProcessOpenSockets()).resolves.toEqual(expectedProcessOpenSockets);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM process_open_sockets', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getProcessOpenSockets()).rejects.toEqual('Command failed');
  });
});
