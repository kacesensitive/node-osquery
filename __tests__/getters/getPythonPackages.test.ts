import { getPythonPackages } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { PythonPackages } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getPythonPackages', () => {
  it('resolves with python_packages table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedPythonPackages: PythonPackages[] = [
      {
        name: "test",
        version: "1.0.0",
        summary: "Test package",
        author: "Test author",
        license: "MIT",
        path: "/usr/lib/python3.8/site-packages/test",
        directory: "/usr/lib/python3.8/site-packages",
        pid_with_namespace: 1,
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedPythonPackages));

    await expect(getPythonPackages()).resolves.toEqual(expectedPythonPackages);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM python_packages', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getPythonPackages()).rejects.toEqual('Command failed');
  });
});
