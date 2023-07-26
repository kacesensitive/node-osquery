import { getProcesses } from '../../src/getters';
import { runOsquery, OsType } from '../../src/runOsquery';
import { Processes } from '../../src/types/table_interfaces';

jest.mock('../../src/runOsquery', () => ({
  runOsquery: jest.fn(),
  OsType: {
    LINUX: 'linux',
    DARWIN: 'darwin',
    WINDOWS_NT: 'windows_nt',
  },
}));

describe('getProcesses', () => {
  it('resolves with processes table on success', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    const expectedProcesses: Processes[] = [
      {
        pid: 123,
        name: "test",
        path: "/usr/bin/test",
        cmdline: "test -option",
        state: "R",
        cwd: "/home",
        root: "/",
        uid: 123,
        gid: 123,
        euid: 123,
        egid: 123,
        suid: 123,
        sgid: 123,
        on_disk: 1,
        wired_size: 123,
        resident_size: 123,
        total_size: 123,
        user_time: 123,
        system_time: 123,
        disk_bytes_read: 123,
        disk_bytes_written: 123,
        start_time: 123,
        parent: 123,
        pgroup: 123,
        threads: 1,
        nice: 0,
        elevated_token: 0,
        secure_process: 0,
        protection_type: "Protected",
        virtual_process: 0,
        elapsed_time: 123,
        handle_count: 123,
        percent_processor_time: 123,
        upid: 123,
        uppid: 123,
        cpu_type: 0,
        cpu_subtype: 0,
        translated: 0,
        cgroup_path: "/system.slice/test.service"
      },
    ];
    mockRunOsquery.mockResolvedValue(JSON.stringify(expectedProcesses));

    await expect(getProcesses()).resolves.toEqual(expectedProcesses);
    expect(mockRunOsquery).toHaveBeenCalledWith('SELECT * FROM processes', [
      OsType.LINUX,
      OsType.DARWIN,
      OsType.WINDOWS_NT,
    ]);
  });

  it('rejects with error on command failure', async () => {
    const mockRunOsquery = runOsquery as jest.MockedFunction<typeof runOsquery>;
    mockRunOsquery.mockRejectedValue('Command failed');

    await expect(getProcesses()).rejects.toEqual('Command failed');
  });
});
