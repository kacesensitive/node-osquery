import { getSecureBoot } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { SecureBoot } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getSecureBoot', () => {
  it('resolves with secureboot table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedSecureBoot: SecureBoot[] = [
      {
        secure_boot: 1,
        secure_mode: 1,
        setup_mode: 0,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedSecureBoot));

    await expect(getSecureBoot()).resolves.toEqual(expectedSecureBoot);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM secureboot', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getSecureBoot()).rejects.toEqual('Command failed');
  });
});
