import { getNpmPackages } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getNpmPackages', () => {
  it('resolves with npm_packages table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedNpmPackages = [
      {
        name: 'express',
        version: '4.17.1',
        description: 'Fast, unopinionated, minimalist web framework',
        author: 'TJ Holowaychuk <tj@vision-media.ca> (http://tjholowaychuk.com)',
        license: 'MIT',
        homepage: 'http://expressjs.com/',
        path: '/usr/local/lib/node_modules/express',
        directory: '/usr/local/lib/node_modules/express',
        pid_with_namespace: 12345,
        mount_namespace_id: '45678',
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedNpmPackages));

    await expect(getNpmPackages()).resolves.toEqual(expectedNpmPackages);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM npm_packages', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getNpmPackages()).rejects.toEqual('Command failed');
  });
});
