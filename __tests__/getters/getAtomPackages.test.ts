import { getAtomPackages } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';

jest.mock('../../src/runOSQuery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getAtomPackages', () => {
  it('resolves with atom_packages table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedAtomPackages = [
      {
        name: 'Atom',
        version: '1.0.0',
        description: 'A hackable text editor for the 21st Century',
        path: '/usr/local/bin/atom',
        license: 'MIT',
        homepage: 'https://atom.io',
        uid: 501,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedAtomPackages));

    await expect(getAtomPackages()).resolves.toEqual(expectedAtomPackages);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM atom_packages', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getAtomPackages()).rejects.toEqual('Command failed');
  });
});
