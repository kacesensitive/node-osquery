import { getFirefoxAddons } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getFirefoxAddons', () => {
  it('resolves with firefox_addons table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedFirefoxAddons = [
      {
        uid: 1,
        name: 'Test Addon',
        identifier: 'test@addon.com',
        creator: 'Test Creator',
        type: 'extension',
        version: '1.0',
        description: 'This is a test addon',
        source_url: 'http://test.com',
        visible: 1,
        active: 1,
        disabled: 0,
        autoupdate: 1,
        location: 'profile',
        path: '/path/to/addon',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedFirefoxAddons));

    await expect(getFirefoxAddons()).resolves.toEqual(expectedFirefoxAddons);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM firefox_addons', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getFirefoxAddons()).rejects.toEqual('Command failed');
  });
});
