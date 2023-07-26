import { getChromeExtensionContentScripts } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOSQuery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getChromeExtensionContentScripts', () => {
  it('resolves with chrome_extension_content_scripts table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedChromeExtensionContentScripts = [
      {
        browser_type: 'Chrome',
        uid: 1000,
        identifier: 'identifier',
        version: '1.0',
        script: '/path/to/script.js',
        match: '*.example.com/*',
        profile_path: '/path/to/profile',
        path: '/path/to/extension',
        referenced: 1,
      },
    ];
    mockRunOsquery.mockResolvedValue(
      JSON.stringify(expectedChromeExtensionContentScripts),
    );

    await expect(getChromeExtensionContentScripts()).resolves.toEqual(
      expectedChromeExtensionContentScripts,
    );
    expect(mockRunOsquery).toHaveBeenCalledWith(
      'SELECT * FROM chrome_extension_content_scripts',
      [OsType.LINUX, OsType.DARWIN, OsType.WINDOWS_NT],
    );
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getChromeExtensionContentScripts()).rejects.toEqual(
      'Command failed',
    );
  });
});
