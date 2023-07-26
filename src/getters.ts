import { OsType, runOsquery } from './runOSQuery';
import {
  AccountPolicyData,
  AcpiTables,
  AdConfig,
  Alf,
  AlfExceptions,
  AlfExplicitAuths,
  AppCompatShims,
  AppSchemes,
  ApparmorEvents,
  ApparmorProfiles,
  Apps,
  AptSources,
  ArpCache,
  Asl,
  AtomPackage,
  Augeas,
  Authenticode,
  AuthorizationMechanisms,
  Authorizations,
  AuthorizedKeys,
  Autoexec,
  AzureInstanceMetadata,
  AzureInstanceTag,
  BackgroundActivitiesModerator,
  Battery,
  BitlockerInfo,
  BlockDevices,
  BpfProcessEvents,
  BpfSocketEvents,
  BrowserPlugins,
  CPUID,
  CPUInfo,
  CarbonBlackInfo,
  Carve,
  Certificate,
  ChassisInfo,
  ChocolateyPackages,
  ChromeExtension,
  ChromeExtensionContentScript,
  Connectivity,
  CpuTime,
  Crashes,
  Crontab,
  CupsDestinations,
  CupsJobs,
  Curl,
  CurlCertificate,
  DebPackages,
  DefaultEnvironment,
  DeviceFile,
  DeviceFirmware,
  DeviceHash,
  DevicePartitions,
  DiskEncryption,
  DiskEvent,
  DiskInfo,
  DnsCache,
  DnsResolvers,
  DockerContainerEnvs,
  DockerContainerFsChanges,
  DockerContainerLabels,
  DockerContainerMounts,
  DockerContainerNetworks,
  DockerContainerPorts,
  DockerContainerProcesses,
  DockerContainerStats,
  DockerContainers,
  DockerImageHistory,
  DockerImageLabels,
  DockerImageLayers,
  DockerImages,
  DockerInfo,
  DockerNetworkLabels,
  DockerNetworks,
  DockerVersion,
  DockerVolumeLabels,
  DockerVolumes,
  Drivers,
  Ec2InstanceMetadata,
  Ec2InstanceTags,
  EsProcessEvent,
  EsProcessFileEvent,
  EtcHosts,
  EtcProtocols,
  EtcServices,
  EventTap,
  ExtendedAttributes,
  FanSpeedSensor,
  FileEvents,
  FirefoxAddon,
  Gatekeeper,
  GatekeeperApprovedApps,
  Group,
  HardwareEvents,
  Hash,
  HomebrewPackages,
  HvciStatus,
  IBridgeInfo,
  IOKitDeviceTree,
  IOKitRegistry,
  IeExtensions,
  IntelMeInfo,
  InterfaceAddresses,
  InterfaceDetails,
  InterfaceIpv6,
  Iptables,
  KernelExtensions,
  KernelInfo,
  KernelKeys,
  KernelModules,
  KernelPanics,
  KeychainAcls,
  KeychainItems,
  KnownHosts,
  KvaSpeculativeInfo,
  Last,
  Launchd,
  LaunchdOverrides,
  ListeningPorts,
  LoadAverage,
  LocationServices,
  LoggedInUsers,
  LogicalDrives,
  LogonSessions,
  LxdCertificates,
  LxdCluster,
  LxdClusterMembers,
  LxdImages,
  LxdInstanceConfig,
  LxdInstanceDevices,
  LxdInstances,
  LxdNetworks,
  LxdStoragePools,
  Magic,
  ManagedPolicies,
  MdDevices,
  MdDrives,
  MdPersonalities,
  Mdfind,
  Mdls,
  MemoryArrayMappedAddresses,
  MemoryArrays,
  MemoryDeviceMappedAddresses,
  MemoryDevices,
  MemoryErrorInfo,
  MemoryInfo,
  MemoryMap,
  Mounts,
  Msr,
  NTDomains,
  NTFSACLPermissions,
  NTFSJournalEvents,
  NfsShares,
  NpmPackages,
  Nvram,
  OemStrings,
  OfficeMRU,
  OsVersion,
  OsqueryEvents,
  OsqueryExtensions,
  OsqueryFlags,
  OsqueryInfo,
  OsqueryPacks,
  OsqueryRegistry,
  OsquerySchedule,
  PackageBom,
  PackageInstallHistory,
  PackageReceipt,
  PasswordPolicy,
  Patches,
  PciDevices,
  PhysicalDiskPerformance,
  Pipes,
  PlatformInfo,
  PlistEntry,
  PortageKeywords,
  PortagePackages,
  PortageUse,
  PowerSensor,
  PowershellEvents,
  Preferences,
  Prefetch,
  ProcessEnvs,
  ProcessEtwEvents,
  ProcessEvents,
  ProcessFileEvents,
  ProcessMemoryMap,
  ProcessNamespaces,
  ProcessOpenFiles,
  ProcessOpenPipes,
  ProcessOpenSockets,
  Processes,
  Programs,
  PrometheusMetrics,
  PythonPackages,
  QuickLookCache,
  Registry,
  Routes,
  RpmPackageFiles,
  RpmPackages,
  RunningApps,
  SafariExtensions,
  Sandboxes,
  ScheduledTask,
  ScreenLock,
  SeccompEvents,
  SecureBoot,
  SecurityProfileInfo,
  SelinuxEvents,
  SelinuxSettings,
  Services,
  Shadow,
  SharedFolder,
  SharedMemory,
  SharedResources,
  SharingPreferences,
  ShellHistory,
  Shellbags,
  Shimcache,
  Signature,
  SipConfig,
  SmbiosTables,
  SmcKeys,
  SocketEvents,
  SshConfigs,
  StartupItems,
  Sudoers,
  SuidBin,
  SyslogEvent,
  SystemControls,
  SystemExtensions,
  SystemInfo,
  SystemdUnit,
  TemperatureSensor,
  Time,
  TimeMachineBackup,
  TimeMachineDestinations,
  TpmInfo,
  UlimitInfo,
  UnifiedLog,
  Uptime,
  UsbDevices,
  UserAssist,
  UserEvents,
  UserGroups,
  UserInteractionEvents,
  UserSshKeys,
  Users,
  VideoInfo,
  VirtualMemoryInfo,
  WifiNetworks,
  WifiStatus,
  WifiSurvey,
  WinBaseObj,
  WindowsCrashes,
  WindowsEventlog,
  WindowsEvents,
  WindowsFirewallRules,
  WindowsOptionalFeatures,
  WindowsSecurityCenter,
  WindowsSecurityProducts,
  WindowsUpdateHistory,
  WmiBiosInfo,
  WmiCliEventConsumers,
  WmiEventFilters,
  WmiFilterConsumerBinding,
  WmiScriptEventConsumers,
  XProtectEntries,
  XProtectMeta,
  XProtectReports,
  YCloudInstanceMetadata,
  Yara,
  YaraEvents,
  YumSource,
} from './types/table_interfaces';

// 🍎🐧🪟

/**
 * Gets the arp_cache table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the arp_cache table, or rejects with an error message.
 */
export async function getArpCache(): Promise<ArpCache[]> {
  const output = await runOsquery('SELECT * FROM arp_cache', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const arpCache: ArpCache[] = JSON.parse(output);
  return arpCache;
}

/**
 * Gets the atom_packages table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the atom_packages table, or rejects with an error message.
 */
export async function getAtomPackages(): Promise<AtomPackage[]> {
  const output = await runOsquery('SELECT * FROM atom_packages', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const atomPackages: AtomPackage[] = JSON.parse(output);
  return atomPackages;
}

/**
 * Gets the azure_instance_metadata table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the azure_instance_metadata table, or rejects with an error message.
 */
export async function getAzureInstanceMetadata(): Promise<
  AzureInstanceMetadata[]
> {
  const output = await runOsquery('SELECT * FROM azure_instance_metadata', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const azureInstanceMetadata: AzureInstanceMetadata[] = JSON.parse(output);
  return azureInstanceMetadata;
}

/**
 * Gets the azure_instance_tags table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the azure_instance_tags table, or rejects with an error message.
 */
export async function getAzureInstanceTags(): Promise<AzureInstanceTag[]> {
  const output = await runOsquery('SELECT * FROM azure_instance_tags', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const azureInstanceTags: AzureInstanceTag[] = JSON.parse(output);
  return azureInstanceTags;
}

/**
 * Gets the carbon_black_info table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the carbon_black_info table, or rejects with an error message.
 */
export async function getCarbonBlackInfo(): Promise<CarbonBlackInfo[]> {
  const output = await runOsquery('SELECT * FROM carbon_black_info', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const carbonBlackInfo: CarbonBlackInfo[] = JSON.parse(output);
  return carbonBlackInfo;
}

/**
 * Gets the carves table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the carves table, or rejects with an error message.
 */
export async function getCarves(): Promise<Carve[]> {
  const output = await runOsquery('SELECT * FROM carves', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const carves: Carve[] = JSON.parse(output);
  return carves;
}

/**
 * Gets the certificates table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the certificates table, or rejects with an error message.
 */
export async function getCertificates(): Promise<Certificate[]> {
  const output = await runOsquery('SELECT * FROM certificates', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const certificates: Certificate[] = JSON.parse(output);
  return certificates;
}

/**
 * Gets the chrome_extension_content_scripts table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the chrome_extension_content_scripts table, or rejects with an error message.
 */
export async function getChromeExtensionContentScripts(): Promise<
  ChromeExtensionContentScript[]
> {
  const output = await runOsquery(
    'SELECT * FROM chrome_extension_content_scripts',
    [OsType.LINUX, OsType.DARWIN, OsType.WINDOWS_NT],
  );
  const chromeExtensionContentScripts: ChromeExtensionContentScript[] =
    JSON.parse(output);
  return chromeExtensionContentScripts;
}

/**
 * Gets the chrome_extensions table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the chrome_extensions table, or rejects with an error message.
 */
export async function getChromeExtensions(): Promise<ChromeExtension[]> {
  const output = await runOsquery('SELECT * FROM chrome_extensions', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const chromeExtensions: ChromeExtension[] = JSON.parse(output);
  return chromeExtensions;
}

/**
 * Gets the cpu_info table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the cpu_info table, or rejects with an error message.
 */
export async function getCpuInfo(): Promise<CPUInfo[]> {
  const output = await runOsquery('SELECT * FROM cpu_info', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const cpuInfo: CPUInfo[] = JSON.parse(output);
  return cpuInfo;
}

/**
 * Gets the cpuid table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the cpuid table, or rejects with an error message.
 */
export async function getCpuid(): Promise<CPUID[]> {
  const output = await runOsquery('SELECT * FROM cpuid', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const cpuid: CPUID[] = JSON.parse(output);
  return cpuid;
}

/**
 * Performs an http request and returns stats about it.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the curl table, or rejects with an error message.
 */
export async function getCurl(): Promise<Curl[]> {
  const output = await runOsquery('SELECT * FROM curl', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const curl: Curl[] = JSON.parse(output);
  return curl;
}

/**
 * Inspects TLS certificates by connecting to input hostnames.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the curl_certificate table, or rejects with an error message.
 */
export async function getCurlCertificate(): Promise<CurlCertificate[]> {
  const output = await runOsquery('SELECT * FROM curl_certificate', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const curlCertificate: CurlCertificate[] = JSON.parse(output);
  return curlCertificate;
}

/**
 * Retrieves EC2 instance metadata.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the ec2_instance_metadata table, or rejects with an error message.
 */
export async function getEc2InstanceMetadata(): Promise<Ec2InstanceMetadata[]> {
  const output = await runOsquery('SELECT * FROM ec2_instance_metadata', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const ec2InstanceMetadata: Ec2InstanceMetadata[] = JSON.parse(output);
  return ec2InstanceMetadata;
}

/**
 * Retrieves EC2 instance tags.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the ec2_instance_tags table, or rejects with an error message.
 */
export async function getEc2InstanceTags(): Promise<Ec2InstanceTags[]> {
  const output = await runOsquery('SELECT * FROM ec2_instance_tags', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const ec2InstanceTags: Ec2InstanceTags[] = JSON.parse(output);
  return ec2InstanceTags;
}

/**
 * Retrieves the parsed /etc/hosts information.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the etc_hosts table, or rejects with an error message.
 */
export async function getEtcHosts(): Promise<EtcHosts[]> {
  const output = await runOsquery('SELECT * FROM etc_hosts', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const etcHosts: EtcHosts[] = JSON.parse(output);
  return etcHosts;
}

/**
 * Retrieves the parsed /etc/protocols information.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the etc_protocols table, or rejects with an error message.
 */
export async function getEtcProtocols(): Promise<EtcProtocols[]> {
  const output = await runOsquery('SELECT * FROM etc_protocols', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const etcProtocols: EtcProtocols[] = JSON.parse(output);
  return etcProtocols;
}

/**
 * Retrieves the parsed /etc/services information.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the etc_services table, or rejects with an error message.
 */
export async function getEtcServices(): Promise<EtcServices[]> {
  const output = await runOsquery('SELECT * FROM etc_services', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const etcServices: EtcServices[] = JSON.parse(output);
  return etcServices;
}

/**
 * Retrieves the interactive filesystem attributes and metadata.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the file table, or rejects with an error message.
 */
export async function getFile(): Promise<File[]> {
  const output = await runOsquery('SELECT * FROM file', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const file: File[] = JSON.parse(output);
  return file;
}

/**
 * Retrieves the Firefox browser extensions, webapps, and addons.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the Firefox addons table, or rejects with an error message.
 */
export async function getFirefoxAddons(): Promise<FirefoxAddon[]> {
  const output = await runOsquery('SELECT * FROM firefox_addons', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const firefoxAddons: FirefoxAddon[] = JSON.parse(output);
  return firefoxAddons;
}

/**
 * Retrieves the local system groups.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the groups table, or rejects with an error message.
 */
export async function getGroups(): Promise<Group[]> {
  const output = await runOsquery('SELECT * FROM groups', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const groups: Group[] = JSON.parse(output);
  return groups;
}

/**
 * Retrieves the filesystem hash data.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the hash data, or rejects with an error message.
 */
export async function getHash(): Promise<Hash[]> {
  const output = await runOsquery('SELECT * FROM hash', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const hashes: Hash[] = JSON.parse(output);
  return hashes;
}

/**
 * Retrieves the network interfaces and relevant metadata.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the network interface data, or rejects with an error message.
 */
export async function getInterfaceAddresses(): Promise<InterfaceAddresses[]> {
  const output = await runOsquery('SELECT * FROM interface_addresses', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const interfaceAddresses: InterfaceAddresses[] = JSON.parse(output);
  return interfaceAddresses;
}

/**
 * Retrieves detailed information and stats of network interfaces.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the network interface details, or rejects with an error message.
 */
export async function getInterfaceDetails(): Promise<InterfaceDetails[]> {
  const output = await runOsquery('SELECT * FROM interface_details', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const interfaceDetails: InterfaceDetails[] = JSON.parse(output);
  return interfaceDetails;
}

/**
 * Retrieves basic active kernel information.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the kernel information, or rejects with an error message.
 */
export async function getKernelInfo(): Promise<KernelInfo> {
  const output = await runOsquery('SELECT * FROM kernel_info', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const kernelInfo: KernelInfo = JSON.parse(output);
  return kernelInfo;
}

/**
 * Retrieves processes with listening (bound) network sockets/ports.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the listening ports data, or rejects with an error message.
 */
export async function getListeningPorts(): Promise<ListeningPorts[]> {
  const output = await runOsquery('SELECT * FROM listening_ports', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const listeningPorts: ListeningPorts[] = JSON.parse(output);
  return listeningPorts;
}

/**
 * Retrieves users with an active shell on the system.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the logged in users data, or rejects with an error message.
 */
export async function getLoggedInUsers(): Promise<LoggedInUsers[]> {
  const output = await runOsquery('SELECT * FROM logged_in_users', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const loggedInUsers: LoggedInUsers[] = JSON.parse(output);
  return loggedInUsers;
}

/**
 * Retrieves physical memory device (type 17) information retrieved from SMBIOS.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the memory devices data, or rejects with an error message.
 */
export async function getMemoryDevices(): Promise<MemoryDevices[]> {
  const output = await runOsquery('SELECT * FROM memory_devices', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const memoryDevices: MemoryDevices[] = JSON.parse(output);
  return memoryDevices;
}

/**
 * Retrieves Node packages installed in a system.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the Npm packages data, or rejects with an error message.
 */
export async function getNpmPackages(): Promise<NpmPackages[]> {
  const output = await runOsquery('SELECT * FROM npm_packages', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const npmPackages: NpmPackages[] = JSON.parse(output);
  return npmPackages;
}

/**
 * Retrieves a single row containing the operating system name and version.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the OS version data, or rejects with an error message.
 */
export async function getOsVersion(): Promise<OsVersion> {
  const output = await runOsquery('SELECT * FROM os_version', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const osVersion: OsVersion = JSON.parse(output)[0]; // Should only be one row
  return osVersion;
}

/**
 * Retrieves information about the event publishers and subscribers.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the OS query events data, or rejects with an error message.
 */
export async function getOsqueryEvents(): Promise<OsqueryEvents[]> {
  const output = await runOsquery('SELECT * FROM osquery_events', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const osqueryEvents: OsqueryEvents[] = JSON.parse(output);
  return osqueryEvents;
}

/**
 * Retrieves list of active osquery extensions.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the OS query extensions data, or rejects with an error message.
 */
export async function getOsqueryExtensions(): Promise<OsqueryExtensions[]> {
  const output = await runOsquery('SELECT * FROM osquery_extensions', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const osqueryExtensions: OsqueryExtensions[] = JSON.parse(output);
  return osqueryExtensions;
}

/**
 * Retrieves configurable flags that modify osquery's behavior.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the OS query flags data, or rejects with an error message.
 */
export async function getOsqueryFlags(): Promise<OsqueryFlags[]> {
  const output = await runOsquery('SELECT * FROM osquery_flags', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const osqueryFlags: OsqueryFlags[] = JSON.parse(output);
  return osqueryFlags;
}

/**
 * Retrieves top level information about the running version of osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the OS query info data, or rejects with an error message.
 */
export async function getOsqueryInfo(): Promise<OsqueryInfo> {
  const output = await runOsquery('SELECT * FROM osquery_info', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const osqueryInfo: OsqueryInfo = JSON.parse(output);
  return osqueryInfo;
}

/**
 * Retrieves information about the current query packs that are loaded in osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the osquery packs data, or rejects with an error message.
 */
export async function getOsqueryPacks(): Promise<OsqueryPacks[]> {
  const output = await runOsquery('SELECT * FROM osquery_packs', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const osqueryPacks: OsqueryPacks[] = JSON.parse(output);
  return osqueryPacks;
}

/**
 * Retrieves information about the osquery registry plugins.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the osquery registry data, or rejects with an error message.
 */
export async function getOsqueryRegistry(): Promise<OsqueryRegistry[]> {
  const output = await runOsquery('SELECT * FROM osquery_registry', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const osqueryRegistry: OsqueryRegistry[] = JSON.parse(output);
  return osqueryRegistry;
}

/**
 * Retrieves information about the current queries that are scheduled in osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the osquery schedule data, or rejects with an error message.
 */
export async function getOsquerySchedule(): Promise<OsquerySchedule[]> {
  const output = await runOsquery('SELECT * FROM osquery_schedule', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const osquerySchedule: OsquerySchedule[] = JSON.parse(output);
  return osquerySchedule;
}

/**
 * Retrieves information about EFI/UEFI/ROM and platform/boot.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the platform info data, or rejects with an error message.
 */
export async function getPlatformInfo(): Promise<PlatformInfo[]> {
  const output = await runOsquery('SELECT * FROM platform_info', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const platformInfo: PlatformInfo[] = JSON.parse(output);
  return platformInfo;
}

/**
 * Retrieves information about process memory mapped files and pseudo device/regions.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the process memory map data, or rejects with an error message.
 */
export async function getProcessMemoryMap(): Promise<ProcessMemoryMap[]> {
  const output = await runOsquery('SELECT * FROM process_memory_map', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const processMemoryMap: ProcessMemoryMap[] = JSON.parse(output);
  return processMemoryMap;
}

/**
 * Retrieves information about processes which have open network sockets on the system.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the process open sockets data, or rejects with an error message.
 */
export async function getProcessOpenSockets(): Promise<ProcessOpenSockets[]> {
  const output = await runOsquery('SELECT * FROM process_open_sockets', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const processOpenSockets: ProcessOpenSockets[] = JSON.parse(output);
  return processOpenSockets;
}

/**
 * Retrieves information about all running processes on the host system.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the processes data, or rejects with an error message.
 */
export async function getProcesses(): Promise<Processes[]> {
  const output = await runOsquery('SELECT * FROM processes', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const processes: Processes[] = JSON.parse(output);
  return processes;
}

/**
 * Retrieves information about Python packages installed on the host system.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the Python packages data, or rejects with an error message.
 */
export async function getPythonPackages(): Promise<PythonPackages[]> {
  const output = await runOsquery('SELECT * FROM python_packages', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const pythonPackages: PythonPackages[] = JSON.parse(output);
  return pythonPackages;
}

/**
 * Retrieves information about the active route table on the host system.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the route table data, or rejects with an error message.
 */
export async function getRoutes(): Promise<Routes[]> {
  const output = await runOsquery('SELECT * FROM routes', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const routes: Routes[] = JSON.parse(output);
  return routes;
}

/**
 * Retrieves information about Secure Boot UEFI Settings.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the Secure Boot data, or rejects with an error message.
 */
export async function getSecureBoot(): Promise<SecureBoot[]> {
  const output = await runOsquery('SELECT * FROM secureboot', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const secureBoot: SecureBoot[] = JSON.parse(output);
  return secureBoot;
}

/**
 * Retrieves parsed ssh_configs information.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the SSH configurations data, or rejects with an error message.
 */
export async function getSshConfigs(): Promise<SshConfigs[]> {
  const output = await runOsquery('SELECT * FROM ssh_configs', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const sshConfigs: SshConfigs[] = JSON.parse(output);
  return sshConfigs;
}

/**
 * Retrieves applications and binaries set as user/login startup items.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the startup items data, or rejects with an error message.
 */
export async function getStartupItems(): Promise<StartupItems[]> {
  const output = await runOsquery('SELECT * FROM startup_items', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const startupItems: StartupItems[] = JSON.parse(output);
  return startupItems;
}

/**
 * Retrieves system information for identification.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the system info data, or rejects with an error message.
 */
export async function getSystemInfo(): Promise<SystemInfo> {
  const output = await runOsquery('SELECT * FROM system_info', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const systemInfo: SystemInfo = JSON.parse(output);
  return systemInfo;
}

/**
 * Retrieves current date and time in UTC.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the time data, or rejects with an error message.
 */
export async function getTime(): Promise<Time> {
  const output = await runOsquery('SELECT * FROM time', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const time: Time = JSON.parse(output);
  return time;
}

/**
 * Retrieves time passed since last boot.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the uptime data, or rejects with an error message.
 */
export async function getUptime(): Promise<Uptime> {
  const output = await runOsquery('SELECT * FROM uptime', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const uptime: Uptime = JSON.parse(output);
  return uptime;
}

/**
 * Retrieves local system user group relationships.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the user group data, or rejects with an error message.
 */
export async function getUserGroups(): Promise<UserGroups[]> {
  const output = await runOsquery('SELECT * FROM user_groups', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const userGroups: UserGroups[] = JSON.parse(output);
  return userGroups;
}

/**
 * Retrieves information about the private keys in the users ~/.ssh directory and whether or not they are encrypted.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the SSH key data, or rejects with an error message.
 */
export async function getUserSshKeys(): Promise<UserSshKeys[]> {
  const output = await runOsquery('SELECT * FROM user_ssh_keys', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const userSshKeys: UserSshKeys[] = JSON.parse(output);
  return userSshKeys;
}

/**
 * Retrieves information about local user accounts.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the users data, or rejects with an error message.
 */
export async function getUsers(): Promise<Users[]> {
  const output = await runOsquery('SELECT * FROM users', [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const users: Users[] = JSON.parse(output);
  return users;
}

/**
 * Triggers one-off YARA query for files at the specified path.
 * Runs on macOS, Linux, and Windows.
 * @param path The path of the file to be scanned.
 * @return A Promise that resolves with the YARA scanning result, or rejects with an error message.
 */
export async function getYaraResults(path: string): Promise<Yara[]> {
  const output = await runOsquery(`SELECT * FROM yara WHERE path='${path}'`, [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const yaraResults: Yara[] = JSON.parse(output);
  return yaraResults;
}

/**
 * Track YARA matches for files specified in configuration data.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the YARA scanning event results, or rejects with an error message.
 */
export async function getYaraEventResults(): Promise<YaraEvents[]> {
  const output = await runOsquery(`SELECT * FROM yara_events`, [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const yaraEvents: YaraEvents[] = JSON.parse(output);
  return yaraEvents;
}

/**
 * Get Yandex.Cloud instance metadata.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the Yandex.Cloud instance metadata, or rejects with an error message.
 */
export async function getYCloudInstanceMetadata(): Promise<
  YCloudInstanceMetadata[]
> {
  const output = await runOsquery(`SELECT * FROM ycloud_instance_metadata`, [
    OsType.LINUX,
    OsType.DARWIN,
    OsType.WINDOWS_NT,
  ]);
  const yCloudInstanceMetadata: YCloudInstanceMetadata[] = JSON.parse(output);
  return yCloudInstanceMetadata;
}

// 🪟

/**
 * Get information about Application Compatibility shims.
 * Runs on Windows.
 * @return A Promise that resolves with the Application Compatibility shims information, or rejects with an error message.
 */
export async function getAppCompatShims(): Promise<AppCompatShims[]> {
  const output = await runOsquery(`SELECT * FROM appcompat_shims`, [
    OsType.WINDOWS_NT,
  ]);
  const appCompatShims: AppCompatShims[] = JSON.parse(output);
  return appCompatShims;
}

/**
 * Get the code signing status of files.
 * Runs on Windows.
 * @param path - The path of the file.
 * @return A Promise that resolves with the code signing status of the file, or rejects with an error message.
 */
export async function getAuthenticode(path: string): Promise<Authenticode[]> {
  const output = await runOsquery(
    `SELECT * FROM authenticode WHERE path='${path}'`,
    [OsType.WINDOWS_NT],
  );
  const authenticode: Authenticode[] = JSON.parse(output);
  return authenticode;
}

/**
 * Get the executables that will automatically execute on the target machine.
 * Runs on Windows.
 * @return A Promise that resolves with the autoexec items, or rejects with an error message.
 */
export async function getAutoexec(): Promise<Autoexec[]> {
  const output = await runOsquery(`SELECT * FROM autoexec`, [
    OsType.WINDOWS_NT,
  ]);
  const autoexec: Autoexec[] = JSON.parse(output);
  return autoexec;
}

/**
 * Get the applications tracked by the Background Activities Moderator (BAM).
 * Runs on Windows.
 * @return A Promise that resolves with the BAM tracked applications, or rejects with an error message.
 */
export async function getBackgroundActivitiesModerator(): Promise<
  BackgroundActivitiesModerator[]
> {
  const output = await runOsquery(
    `SELECT * FROM background_activities_moderator`,
    [OsType.WINDOWS_NT],
  );
  const backgroundActivitiesModerator: BackgroundActivitiesModerator[] =
    JSON.parse(output);
  return backgroundActivitiesModerator;
}

/**
 * Get the BitLocker status of the machine.
 * Runs on Windows.
 * @return A Promise that resolves with the BitLocker status, or rejects with an error message.
 */
export async function getBitlockerInfo(): Promise<BitlockerInfo[]> {
  const output = await runOsquery(`SELECT * FROM bitlocker_info`, [
    OsType.WINDOWS_NT,
  ]);
  const bitlockerInfo: BitlockerInfo[] = JSON.parse(output);
  return bitlockerInfo;
}

/**
 * Get information pertaining to the chassis and its security status.
 * Runs on Windows.
 * @return A Promise that resolves with the chassis information, or rejects with an error message.
 */
export async function getChassisInfo(): Promise<ChassisInfo[]> {
  const output = await runOsquery(`SELECT * FROM chassis_info`, [
    OsType.WINDOWS_NT,
  ]);
  const chassisInfo: ChassisInfo[] = JSON.parse(output);
  return chassisInfo;
}

/**
 * Get information about the Chocolatey packages installed in a system.
 * Runs on Windows.
 * @return A Promise that resolves with the Chocolatey packages information, or rejects with an error message.
 */
export async function getChocolateyPackages(): Promise<ChocolateyPackages[]> {
  const output = await runOsquery(`SELECT * FROM chocolatey_packages`, [
    OsType.WINDOWS_NT,
  ]);
  const chocolateyPackages: ChocolateyPackages[] = JSON.parse(output);
  return chocolateyPackages;
}

/**
 * Get the overall system's network state.
 * Runs on Windows.
 * @return A Promise that resolves with the system's network state, or rejects with an error message.
 */
export async function getConnectivity(): Promise<Connectivity> {
  const output = await runOsquery(`SELECT * FROM connectivity`, [
    OsType.WINDOWS_NT,
  ]);
  const connectivity: Connectivity = JSON.parse(output);
  return connectivity;
}

/**
 * Get default environment variables and their values.
 * Runs on Windows.
 * @return A Promise that resolves with the environment variables and their values, or rejects with an error message.
 */
export async function getDefaultEnvironment(): Promise<DefaultEnvironment[]> {
  const output = await runOsquery(`SELECT * FROM default_environment`, [
    OsType.WINDOWS_NT,
  ]);
  const defaultEnvironment: DefaultEnvironment[] = JSON.parse(output);
  return defaultEnvironment;
}

/**
 * Get basic information about the physical disks of a system.
 * Runs on Windows.
 * @return A Promise that resolves with the information about the physical disks, or rejects with an error message.
 */
export async function getDiskInfo(): Promise<DiskInfo[]> {
  const output = await runOsquery(`SELECT * FROM disk_info`, [
    OsType.WINDOWS_NT,
  ]);
  const diskInfo: DiskInfo[] = JSON.parse(output);
  return diskInfo;
}

/**
 * Enumerate the DNS cache.
 * Runs on Windows.
 * @return A Promise that resolves with the DNS cache data, or rejects with an error message.
 */
export async function getDnsCache(): Promise<DnsCache[]> {
  const output = await runOsquery(`SELECT * FROM dns_cache`, [
    OsType.WINDOWS_NT,
  ]);
  const dnsCache: DnsCache[] = JSON.parse(output);
  return dnsCache;
}

/**
 * Get details for in-use Windows device drivers.
 * Runs on Windows.
 * @return A Promise that resolves with the device drivers data, or rejects with an error message.
 */
export async function getDrivers(): Promise<Drivers[]> {
  const output = await runOsquery(`SELECT * FROM drivers`, [OsType.WINDOWS_NT]);
  const drivers: Drivers[] = JSON.parse(output);
  return drivers;
}

/**
 * Get HVCI (Hypervisor-protected Code Integrity) info of the machine.
 * Runs on Windows.
 * @return A Promise that resolves with the HVCI status data, or rejects with an error message.
 */
export async function getHvciStatus(): Promise<HvciStatus[]> {
  const output = await runOsquery(`SELECT * FROM hvci_status`, [
    OsType.WINDOWS_NT,
  ]);
  const hvciStatus: HvciStatus[] = JSON.parse(output);
  return hvciStatus;
}

/**
 * Get Internet Explorer browser extensions.
 * Runs on Windows.
 * @return A Promise that resolves with the IE extensions data, or rejects with an error message.
 */
export async function getIeExtensions(): Promise<IeExtensions[]> {
  const output = await runOsquery(`SELECT * FROM ie_extensions`, [
    OsType.WINDOWS_NT,
  ]);
  const ieExtensions: IeExtensions[] = JSON.parse(output);
  return ieExtensions;
}

/**
 * Get kernel virtual address and speculative execution information.
 * Runs on Windows.
 * @return A Promise that resolves with the kernel virtual address and speculative execution information, or rejects with an error message.
 */
export async function getKvaSpeculativeInfo(): Promise<KvaSpeculativeInfo[]> {
  const output = await runOsquery(`SELECT * FROM kva_speculative_info`, [
    OsType.WINDOWS_NT,
  ]);
  const kvaSpeculativeInfo: KvaSpeculativeInfo[] = JSON.parse(output);
  return kvaSpeculativeInfo;
}

/**
 * Get details for logical drives on the system.
 * Runs on Windows.
 * @return A Promise that resolves with the logical drives details, or rejects with an error message.
 */
export async function getLogicalDrives(): Promise<LogicalDrives[]> {
  const output = await runOsquery(`SELECT * FROM logical_drives`, [
    OsType.WINDOWS_NT,
  ]);
  const logicalDrives: LogicalDrives[] = JSON.parse(output);
  return logicalDrives;
}

/**
 * Get details for Windows logon sessions.
 * Runs on Windows.
 * @return A Promise that resolves with the logon sessions details, or rejects with an error message.
 */
export async function getLogonSessions(): Promise<LogonSessions[]> {
  const output = await runOsquery(`SELECT * FROM logon_sessions`, [
    OsType.WINDOWS_NT,
  ]);
  const logonSessions: LogonSessions[] = JSON.parse(output);
  return logonSessions;
}

/**
 * Get basic NT domain information of a Windows machine.
 * Runs on Windows.
 * @return A Promise that resolves with the NT domain details, or rejects with an error message.
 */
export async function getNTDomains(): Promise<NTDomains[]> {
  const output = await runOsquery(`SELECT * FROM ntdomains`, [
    OsType.WINDOWS_NT,
  ]);
  const ntdomains: NTDomains[] = JSON.parse(output);
  return ntdomains;
}

/**
 * Get NTFS ACL permission information for files and directories.
 * Runs on Windows.
 * @return A Promise that resolves with the NTFS ACL permissions, or rejects with an error message.
 */
export async function getNTFSACLPermissions(): Promise<NTFSACLPermissions[]> {
  const output = await runOsquery(`SELECT * FROM ntfs_acl_permissions`, [
    OsType.WINDOWS_NT,
  ]);
  const ntfsAclPermissions: NTFSACLPermissions[] = JSON.parse(output);
  return ntfsAclPermissions;
}

/**
 * Get time/action changes to files specified in configuration data.
 * Runs on Windows.
 * @return A Promise that resolves with the NTFS journal events, or rejects with an error message.
 */
export async function getNTFSJournalEvents(): Promise<NTFSJournalEvents[]> {
  const output = await runOsquery(`SELECT * FROM ntfs_journal_events`, [
    OsType.WINDOWS_NT,
  ]);
  const ntfsJournalEvents: NTFSJournalEvents[] = JSON.parse(output);
  return ntfsJournalEvents;
}

/**
 * Get recently opened Office documents.
 * Runs on Windows.
 * @return A Promise that resolves with the Office MRU entries, or rejects with an error message.
 */
export async function getOfficeMRU(): Promise<OfficeMRU[]> {
  const output = await runOsquery(`SELECT * FROM office_mru`, [
    OsType.WINDOWS_NT,
  ]);
  const officeMRU: OfficeMRU[] = JSON.parse(output);
  return officeMRU;
}

/**
 * Get patches applied to the system.
 * Runs on Windows.
 * @return A Promise that resolves with the patches applied, or rejects with an error message.
 */
export async function getPatches(): Promise<Patches[]> {
  const output = await runOsquery(`SELECT * FROM patches`, [OsType.WINDOWS_NT]);
  const patches: Patches[] = JSON.parse(output);
  return patches;
}

/**
 * Get raw data from performance counters that monitor hard or fixed disk drives on the system.
 * Runs on Windows.
 * @return A Promise that resolves with the disk performance data, or rejects with an error message.
 */
export async function getPhysicalDiskPerformance(): Promise<
  PhysicalDiskPerformance[]
> {
  const output = await runOsquery(`SELECT * FROM physical_disk_performance`, [
    OsType.WINDOWS_NT,
  ]);
  const physicalDiskPerformance: PhysicalDiskPerformance[] = JSON.parse(output);
  return physicalDiskPerformance;
}

/**
 * Get information about named and anonymous pipes on the system.
 * Runs on Windows.
 * @return A Promise that resolves with the pipes data, or rejects with an error message.
 */
export async function getPipes(): Promise<Pipes[]> {
  const output = await runOsquery(`SELECT * FROM pipes`, [OsType.WINDOWS_NT]);
  const pipes: Pipes[] = JSON.parse(output);
  return pipes;
}

/**
 * Get Powershell script blocks reconstructed to their full script content.
 * Runs on Windows.
 * This function requires script block logging to be enabled.
 * @return A Promise that resolves with the Powershell events data, or rejects with an error message.
 */
export async function getPowershellEvents(): Promise<PowershellEvents[]> {
  const output = await runOsquery(`SELECT * FROM powershell_events`, [
    OsType.WINDOWS_NT,
  ]);
  const powershellEvents: PowershellEvents[] = JSON.parse(output);
  return powershellEvents;
}

/**
 * Get metadata related to file execution from prefetch files.
 * Runs on Windows.
 * @return A Promise that resolves with the prefetch files data, or rejects with an error message.
 */
export async function getPrefetchFiles(): Promise<Prefetch[]> {
  const output = await runOsquery(`SELECT * FROM prefetch`, [
    OsType.WINDOWS_NT,
  ]);
  const prefetchFiles: Prefetch[] = JSON.parse(output);
  return prefetchFiles;
}

/**
 * Get Windows process execution events.
 * Runs on Windows.
 * @return A Promise that resolves with the process execution events data, or rejects with an error message.
 */
export async function getProcessEtwEvents(): Promise<ProcessEtwEvents[]> {
  const output = await runOsquery(`SELECT * FROM process_etw_events`, [
    OsType.WINDOWS_NT,
  ]);
  const processEtwEvents: ProcessEtwEvents[] = JSON.parse(output);
  return processEtwEvents;
}

/**
 * Get products as they are installed by Windows Installer.
 * Runs on Windows.
 * @return A Promise that resolves with the installed product's data, or rejects with an error message.
 */
export async function getPrograms(): Promise<Programs[]> {
  const output = await runOsquery(`SELECT * FROM programs`, [
    OsType.WINDOWS_NT,
  ]);
  const programs: Programs[] = JSON.parse(output);
  return programs;
}

/**
 * Get all of the Windows registry hives.
 * Runs on Windows.
 * @return A Promise that resolves with the registry data, or rejects with an error message.
 */
export async function getRegistry(): Promise<Registry[]> {
  const output = await runOsquery(`SELECT * FROM registry`, [
    OsType.WINDOWS_NT,
  ]);
  const registry: Registry[] = JSON.parse(output);
  return registry;
}

/**
 * Get all of the tasks in the Windows task scheduler.
 * Runs on Windows.
 * @return A Promise that resolves with the scheduled task data, or rejects with an error message.
 */
export async function getScheduledTasks(): Promise<ScheduledTask[]> {
  const output = await runOsquery(`SELECT * FROM scheduled_tasks`, [
    OsType.WINDOWS_NT,
  ]);
  const scheduledTasks: ScheduledTask[] = JSON.parse(output);
  return scheduledTasks;
}

/**
 * Get information on the security profile of the system by listing the system Account and Audit Policies.
 * Runs on Windows.
 * @return A Promise that resolves with the security profile info data, or rejects with an error message.
 */
export async function getSecurityProfileInfo(): Promise<SecurityProfileInfo[]> {
  const output = await runOsquery(`SELECT * FROM security_profile_info`, [
    OsType.WINDOWS_NT,
  ]);
  const securityProfileInfos: SecurityProfileInfo[] = JSON.parse(output);
  return securityProfileInfos;
}

/**
 * Get information on all installed Windows services and their relevant data.
 * Runs on Windows.
 * @return A Promise that resolves with the services data, or rejects with an error message.
 */
export async function getServices(): Promise<Services[]> {
  const output = await runOsquery(`SELECT * FROM services`, [
    OsType.WINDOWS_NT,
  ]);
  const services: Services[] = JSON.parse(output);
  return services;
}

/**
 * Get information on shared resources on a Windows computer system.
 * Runs on Windows.
 * @return A Promise that resolves with the shared resources data, or rejects with an error message.
 */
export async function getSharedResources(): Promise<SharedResources[]> {
  const output = await runOsquery(`SELECT * FROM shared_resources`, [
    OsType.WINDOWS_NT,
  ]);
  const sharedResources: SharedResources[] = JSON.parse(output);
  return sharedResources;
}

/**
 * Get information on directories accessed via Windows Explorer.
 * Runs on Windows.
 * @return A Promise that resolves with the shellbags data, or rejects with an error message.
 */
export async function getShellbags(): Promise<Shellbags[]> {
  const output = await runOsquery(`SELECT * FROM shellbags`, [
    OsType.WINDOWS_NT,
  ]);
  const shellbags: Shellbags[] = JSON.parse(output);
  return shellbags;
}

/**
 * Get information on Application Compatibility Cache, which contains artifacts of execution.
 * Runs on Windows.
 * @return A Promise that resolves with the shimcache data, or rejects with an error message.
 */
export async function getShimcache(): Promise<Shimcache[]> {
  const output = await runOsquery(`SELECT * FROM shimcache`, [
    OsType.WINDOWS_NT,
  ]);
  const shimcache: Shimcache[] = JSON.parse(output);
  return shimcache;
}

/**
 * Get TPM (Trusted Platform Module) related information.
 * Runs on Windows.
 * @return A Promise that resolves with the TPM information, or rejects with an error message.
 */
export async function getTpmInfo(): Promise<TpmInfo[]> {
  const output = await runOsquery(`SELECT * FROM tpm_info`, [
    OsType.WINDOWS_NT,
  ]);
  const tpmInfo: TpmInfo[] = JSON.parse(output);
  return tpmInfo;
}

/**
 * Get UserAssist registry key data which tracks when a user executes an application from Windows Explorer.
 * Runs on Windows.
 * @return A Promise that resolves with the UserAssist data, or rejects with an error message.
 */
export async function getUserAssist(): Promise<UserAssist[]> {
  const output = await runOsquery(`SELECT * FROM userassist`, [
    OsType.WINDOWS_NT,
  ]);
  const userAssist: UserAssist[] = JSON.parse(output);
  return userAssist;
}

/**
 * Get video card information of the machine.
 * Runs on Windows.
 * @return A Promise that resolves with the video card information, or rejects with an error message.
 */
export async function getVideoInfo(): Promise<VideoInfo[]> {
  const output = await runOsquery(`SELECT * FROM video_info`, [
    OsType.WINDOWS_NT,
  ]);
  const videoInfo: VideoInfo[] = JSON.parse(output);
  return videoInfo;
}

/**
 * Get named Windows objects in the default object directories, across all terminal services sessions.
 * Runs on Windows.
 * @return A Promise that resolves with the named Windows objects, or rejects with an error message.
 */
export async function getWinBaseObj(): Promise<WinBaseObj[]> {
  const output = await runOsquery(`SELECT * FROM winbaseobj`, [
    OsType.WINDOWS_NT,
  ]);
  const winBaseObj: WinBaseObj[] = JSON.parse(output);
  return winBaseObj;
}

/**
 * Get information from Windows crash logs.
 * Runs on Windows.
 * @return A Promise that resolves with the crash logs information, or rejects with an error message.
 */
export async function getWindowsCrashes(): Promise<WindowsCrashes[]> {
  const output = await runOsquery(`SELECT * FROM windows_crashes`, [
    OsType.WINDOWS_NT,
  ]);
  const windowsCrashes: WindowsCrashes[] = JSON.parse(output);
  return windowsCrashes;
}

/**
 * Get information from all recorded Windows event logs.
 * Runs on Windows.
 * @return A Promise that resolves with the Windows event logs information, or rejects with an error message.
 */
export async function getWindowsEventlog(): Promise<WindowsEventlog[]> {
  const output = await runOsquery(`SELECT * FROM windows_eventlog`, [
    OsType.WINDOWS_NT,
  ]);
  const windowsEventlog: WindowsEventlog[] = JSON.parse(output);
  return windowsEventlog;
}

/**
 * Get Windows Event logs.
 * Runs on Windows.
 * @return A Promise that resolves with the Windows event logs information, or rejects with an error message.
 */
export async function getWindowsEvents(): Promise<WindowsEvents[]> {
  const output = await runOsquery(`SELECT * FROM windows_events`, [
    OsType.WINDOWS_NT,
  ]);
  const windowsEvents: WindowsEvents[] = JSON.parse(output);
  return windowsEvents;
}

/**
 * Get the list of Windows firewall rules.
 * Runs on Windows.
 * @return A Promise that resolves with the Windows firewall rules information, or rejects with an error message.
 */
export async function getWindowsFirewallRules(): Promise<
  WindowsFirewallRules[]
> {
  const output = await runOsquery(`SELECT * FROM windows_firewall_rules`, [
    OsType.WINDOWS_NT,
  ]);
  const windowsFirewallRules: WindowsFirewallRules[] = JSON.parse(output);
  return windowsFirewallRules;
}

/**
 * Get the names and installation states of windows features.
 * Runs on Windows.
 * @return A Promise that resolves with the windows features information, or rejects with an error message.
 */
export async function getWindowsOptionalFeatures(): Promise<
  WindowsOptionalFeatures[]
> {
  const output = await runOsquery(`SELECT * FROM windows_optional_features`, [
    OsType.WINDOWS_NT,
  ]);
  const windowsOptionalFeatures: WindowsOptionalFeatures[] = JSON.parse(output);
  return windowsOptionalFeatures;
}

/**
 * Get the health status of Window Security features.
 * Runs on Windows.
 * @return A Promise that resolves with the health status of Window Security features, or rejects with an error message.
 */
export async function getWindowsSecurityCenter(): Promise<
  WindowsSecurityCenter[]
> {
  const output = await runOsquery(`SELECT * FROM windows_security_center`, [
    OsType.WINDOWS_NT,
  ]);
  const windowsSecurityCenter: WindowsSecurityCenter[] = JSON.parse(output);
  return windowsSecurityCenter;
}

/**
 * Get registered Windows security products.
 * Runs on Windows.
 * @return A Promise that resolves with the registered Windows security products, or rejects with an error message.
 */
export async function getWindowsSecurityProducts(): Promise<
  WindowsSecurityProducts[]
> {
  const output = await runOsquery(`SELECT * FROM windows_security_products`, [
    OsType.WINDOWS_NT,
  ]);
  const windowsSecurityProducts: WindowsSecurityProducts[] = JSON.parse(output);
  return windowsSecurityProducts;
}

/**
 * Get the history of the windows update events.
 * Runs on Windows.
 * @return A Promise that resolves with the history of the windows update events, or rejects with an error message.
 */
export async function getWindowsUpdateHistory(): Promise<
  WindowsUpdateHistory[]
> {
  const output = await runOsquery(`SELECT * FROM windows_update_history`, [
    OsType.WINDOWS_NT,
  ]);
  const windowsUpdateHistory: WindowsUpdateHistory[] = JSON.parse(output);
  return windowsUpdateHistory;
}

/**
 * Get important information from the system bios.
 * Runs on Windows.
 * @return A Promise that resolves with the information from the system bios, or rejects with an error message.
 */
export async function getWmiBiosInfo(): Promise<WmiBiosInfo[]> {
  const output = await runOsquery(`SELECT * FROM wmi_bios_info`, [
    OsType.WINDOWS_NT,
  ]);
  const wmiBiosInfo: WmiBiosInfo[] = JSON.parse(output);
  return wmiBiosInfo;
}

/**
 * Get WMI CommandLineEventConsumer data.
 * Runs on Windows.
 * @return A Promise that resolves with the WMI CommandLineEventConsumer data, or rejects with an error message.
 */
export async function getWmiCliEventConsumers(): Promise<
  WmiCliEventConsumers[]
> {
  const output = await runOsquery(`SELECT * FROM wmi_cli_event_consumers`, [
    OsType.WINDOWS_NT,
  ]);
  const wmiCliEventConsumers: WmiCliEventConsumers[] = JSON.parse(output);
  return wmiCliEventConsumers;
}

/**
 * Get WMI event filters data.
 * Runs on Windows.
 * @return A Promise that resolves with the WMI event filters data, or rejects with an error message.
 */
export async function getWmiEventFilters(): Promise<WmiEventFilters[]> {
  const output = await runOsquery(`SELECT * FROM wmi_event_filters`, [
    OsType.WINDOWS_NT,
  ]);
  const wmiEventFilters: WmiEventFilters[] = JSON.parse(output);
  return wmiEventFilters;
}

/**
 * Get WMI filter consumer binding data.
 * Runs on Windows.
 * @return A Promise that resolves with the WMI filter consumer binding data, or rejects with an error message.
 */
export async function getWmiFilterConsumerBinding(): Promise<
  WmiFilterConsumerBinding[]
> {
  const output = await runOsquery(`SELECT * FROM wmi_filter_consumer_binding`, [
    OsType.WINDOWS_NT,
  ]);
  const wmiFilterConsumerBinding: WmiFilterConsumerBinding[] =
    JSON.parse(output);
  return wmiFilterConsumerBinding;
}

/**
 * Get WMI script event consumers data.
 * Runs on Windows.
 * @return A Promise that resolves with the WMI script event consumers data, or rejects with an error message.
 */
export async function getWmiScriptEventConsumers(): Promise<
  WmiScriptEventConsumers[]
> {
  const output = await runOsquery(`SELECT * FROM wmi_script_event_consumers`, [
    OsType.WINDOWS_NT,
  ]);
  const wmiScriptEventConsumers: WmiScriptEventConsumers[] = JSON.parse(output);
  return wmiScriptEventConsumers;
}

// 🪟🐧

/**
 * Get Intel ME/CSE Info.
 * Runs on Windows and Linux.
 * @return A Promise that resolves with the Intel ME/CSE info data, or rejects with an error message.
 */
export async function getIntelMeInfo(): Promise<IntelMeInfo[]> {
  const output = await runOsquery(`SELECT * FROM intel_me_info`, [
    OsType.LINUX,
    OsType.WINDOWS_NT,
  ]);
  const intelMeInfo: IntelMeInfo[] = JSON.parse(output);
  return intelMeInfo;
}

// 🍎🐧

/**
 * Get ACPI tables data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the ACPI tables data, or rejects with an error message.
 */
export async function getAcpiTables(): Promise<AcpiTables[]> {
  const output = await runOsquery(`SELECT * FROM acpi_tables`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const acpiTables: AcpiTables[] = JSON.parse(output);
  return acpiTables;
}

/**
 * Get configuration files parsed by Augeas.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the configuration files data, or rejects with an error message.
 */
export async function getAugeas(): Promise<Augeas[]> {
  const output = await runOsquery(`SELECT * FROM augeas`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const augeas: Augeas[] = JSON.parse(output);
  return augeas;
}

/**
 * Get the line-delimited authorized_keys data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the authorized_keys data, or rejects with an error message.
 */
export async function getAuthorizedKeys(): Promise<AuthorizedKeys[]> {
  const output = await runOsquery(`SELECT * FROM authorized_keys`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const authorizedKeys: AuthorizedKeys[] = JSON.parse(output);
  return authorizedKeys;
}

/**
 * Get the block device data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the block device data, or rejects with an error message.
 */
export async function getBlockDevices(): Promise<BlockDevices[]> {
  const output = await runOsquery(`SELECT * FROM block_devices`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const blockDevices: BlockDevices[] = JSON.parse(output);
  return blockDevices;
}

/**
 * Get the cpu time data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the cpu time data, or rejects with an error message.
 */
export async function getCpuTime(): Promise<CpuTime[]> {
  const output = await runOsquery(`SELECT * FROM cpu_time`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const cpuTimes: CpuTime[] = JSON.parse(output);
  return cpuTimes;
}

/**
 * Get the crontab data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the crontab data, or rejects with an error message.
 */
export async function getCrontab(): Promise<Crontab[]> {
  const output = await runOsquery(`SELECT * FROM crontab`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const crontabs: Crontab[] = JSON.parse(output);
  return crontabs;
}

/**
 * Get the device file data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the device file data, or rejects with an error message.
 */
export async function getDeviceFile(): Promise<DeviceFile[]> {
  const output = await runOsquery(`SELECT * FROM device_file`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const deviceFiles: DeviceFile[] = JSON.parse(output);
  return deviceFiles;
}

/**
 * Get the device hash data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the device hash data, or rejects with an error message.
 */
export async function getDeviceHash(): Promise<DeviceHash[]> {
  const output = await runOsquery(`SELECT * FROM device_hash`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const deviceHashes: DeviceHash[] = JSON.parse(output);
  return deviceHashes;
}

/**
 * Get the device partitions data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the device partitions data, or rejects with an error message.
 */
export async function getDevicePartitions(): Promise<DevicePartitions[]> {
  const output = await runOsquery(`SELECT * FROM device_partitions`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const devicePartitions: DevicePartitions[] = JSON.parse(output);
  return devicePartitions;
}

/**
 * Get the disk encryption data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the disk encryption data, or rejects with an error message.
 */
export async function getDiskEncryption(): Promise<DiskEncryption[]> {
  const output = await runOsquery(`SELECT * FROM disk_encryption`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const diskEncryption: DiskEncryption[] = JSON.parse(output);
  return diskEncryption;
}

/**
 * Get the DNS resolvers used by the host.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the DNS resolvers data, or rejects with an error message.
 */
export async function getDnsResolvers(): Promise<DnsResolvers[]> {
  const output = await runOsquery(`SELECT * FROM dns_resolvers`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dnsResolvers: DnsResolvers[] = JSON.parse(output);
  return dnsResolvers;
}

/**
 * Get the environment variables of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container environment variable data, or rejects with an error message.
 */
export async function getDockerContainerEnvs(): Promise<DockerContainerEnvs[]> {
  const output = await runOsquery(`SELECT * FROM docker_container_envs`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerContainerEnvs: DockerContainerEnvs[] = JSON.parse(output);
  return dockerContainerEnvs;
}

/**
 * Get the file system changes of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container file system change data, or rejects with an error message.
 */
export async function getDockerContainerFsChanges(): Promise<
  DockerContainerFsChanges[]
> {
  const output = await runOsquery(`SELECT * FROM docker_container_fs_changes`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerContainerFsChanges: DockerContainerFsChanges[] =
    JSON.parse(output);
  return dockerContainerFsChanges;
}

/**
 * Get the labels of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container label data, or rejects with an error message.
 */
export async function getDockerContainerLabels(): Promise<
  DockerContainerLabels[]
> {
  const output = await runOsquery(`SELECT * FROM docker_container_labels`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerContainerLabels: DockerContainerLabels[] = JSON.parse(output);
  return dockerContainerLabels;
}

/**
 * Get the mounts of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container mount data, or rejects with an error message.
 */
export async function getDockerContainerMounts(): Promise<
  DockerContainerMounts[]
> {
  const output = await runOsquery(`SELECT * FROM docker_container_mounts`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerContainerMounts: DockerContainerMounts[] = JSON.parse(output);
  return dockerContainerMounts;
}

/**
 * Get the networks of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container network data, or rejects with an error message.
 */
export async function getDockerContainerNetworks(): Promise<
  DockerContainerNetworks[]
> {
  const output = await runOsquery(`SELECT * FROM docker_container_networks`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerContainerNetworks: DockerContainerNetworks[] = JSON.parse(output);
  return dockerContainerNetworks;
}

/**
 * Get the ports of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container port data, or rejects with an error message.
 */
export async function getDockerContainerPorts(): Promise<
  DockerContainerPorts[]
> {
  const output = await runOsquery(`SELECT * FROM docker_container_ports`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerContainerPorts: DockerContainerPorts[] = JSON.parse(output);
  return dockerContainerPorts;
}

/**
 * Get the processes of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container process data, or rejects with an error message.
 */
export async function getDockerContainerProcesses(): Promise<
  DockerContainerProcesses[]
> {
  const output = await runOsquery(`SELECT * FROM docker_container_processes`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerContainerProcesses: DockerContainerProcesses[] =
    JSON.parse(output);
  return dockerContainerProcesses;
}

/**
 * Get the statistics of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container statistics data, or rejects with an error message.
 */
export async function getDockerContainerStats(): Promise<
  DockerContainerStats[]
> {
  const output = await runOsquery(`SELECT * FROM docker_container_stats`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerContainerStats: DockerContainerStats[] = JSON.parse(output);
  return dockerContainerStats;
}

/**
 * Get the information about Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker containers data, or rejects with an error message.
 */
export async function getDockerContainers(): Promise<DockerContainers[]> {
  const output = await runOsquery(`SELECT * FROM docker_containers`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerContainers: DockerContainers[] = JSON.parse(output);
  return dockerContainers;
}

/**
 * Get the history information about Docker images.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker images history data, or rejects with an error message.
 */
export async function getDockerImageHistory(): Promise<DockerImageHistory[]> {
  const output = await runOsquery(`SELECT * FROM docker_image_history`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerImageHistory: DockerImageHistory[] = JSON.parse(output);
  return dockerImageHistory;
}

/**
 * Get Docker image labels.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker image labels data, or rejects with an error message.
 */
export async function getDockerImageLabels(): Promise<DockerImageLabels[]> {
  const output = await runOsquery(`SELECT * FROM docker_image_labels`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerImageLabels: DockerImageLabels[] = JSON.parse(output);
  return dockerImageLabels;
}

/**
 * Get Docker image layers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker image layers data, or rejects with an error message.
 */
export async function getDockerImageLayers(): Promise<DockerImageLayers[]> {
  const output = await runOsquery(`SELECT * FROM docker_image_layers`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerImageLayers: DockerImageLayers[] = JSON.parse(output);
  return dockerImageLayers;
}

/**
 * Get Docker images.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker images data, or rejects with an error message.
 */
export async function getDockerImages(): Promise<DockerImages[]> {
  const output = await runOsquery(`SELECT * FROM docker_images`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerImages: DockerImages[] = JSON.parse(output);
  return dockerImages;
}

/**
 * Get Docker system information.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker system information, or rejects with an error message.
 */
export async function getDockerInfo(): Promise<DockerInfo> {
  const output = await runOsquery(`SELECT * FROM docker_info`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerInfo: DockerInfo = JSON.parse(output);
  return dockerInfo;
}

/**
 * Get Docker network labels.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker network labels, or rejects with an error message.
 */
export async function getDockerNetworkLabels(): Promise<DockerNetworkLabels[]> {
  const output = await runOsquery(`SELECT * FROM docker_network_labels`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerNetworkLabels: DockerNetworkLabels[] = JSON.parse(output);
  return dockerNetworkLabels;
}

/**
 * Get Docker networks information.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker networks information, or rejects with an error message.
 */
export async function getDockerNetworks(): Promise<DockerNetworks[]> {
  const output = await runOsquery(`SELECT * FROM docker_networks`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerNetworks: DockerNetworks[] = JSON.parse(output);
  return dockerNetworks;
}

/**
 * Get Docker version information.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker version information, or rejects with an error message.
 */
export async function getDockerVersion(): Promise<DockerVersion> {
  const output = await runOsquery(`SELECT * FROM docker_version LIMIT 1`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerVersion: DockerVersion = JSON.parse(output)[0];
  return dockerVersion;
}

/**
 * Get Docker volume labels.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker volume labels, or rejects with an error message.
 */
export async function getDockerVolumeLabels(): Promise<DockerVolumeLabels[]> {
  const output = await runOsquery(`SELECT * FROM docker_volume_labels`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerVolumeLabels: DockerVolumeLabels[] = JSON.parse(output);
  return dockerVolumeLabels;
}

/**
 * Get Docker volumes information.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker volumes information, or rejects with an error message.
 */
export async function getDockerVolumes(): Promise<DockerVolumes[]> {
  const output = await runOsquery(`SELECT * FROM docker_volumes`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const dockerVolumes: DockerVolumes[] = JSON.parse(output);
  return dockerVolumes;
}

/**
 * Get the extended attributes for files.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the extended attributes for files, or rejects with an error message.
 */
export async function getExtendedAttributes(): Promise<ExtendedAttributes[]> {
  const output = await runOsquery(`SELECT * FROM extended_attributes`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const extendedAttributes: ExtendedAttributes[] = JSON.parse(output);
  return extendedAttributes;
}

/**
 * Get the time/action changes to files specified in configuration data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the time/action changes to files, or rejects with an error message.
 */
export async function getFileEvents(): Promise<FileEvents[]> {
  const output = await runOsquery(`SELECT * FROM file_events`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const fileEvents: FileEvents[] = JSON.parse(output);
  return fileEvents;
}

/**
 * Get hardware (PCI/USB/HID) events from UDEV or IOKit.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the hardware events, or rejects with an error message.
 */
export async function getHardwareEvents(): Promise<HardwareEvents[]> {
  const output = await runOsquery(`SELECT * FROM hardware_events`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const hardwareEvents: HardwareEvents[] = JSON.parse(output);
  return hardwareEvents;
}

/**
 * Get IPv6 configuration and stats of network interfaces.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the network interfaces' IPv6 configuration, or rejects with an error message.
 */
export async function getInterfaceIpv6(): Promise<InterfaceIpv6[]> {
  const output = await runOsquery(`SELECT * FROM interface_ipv6`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const interfaceIpv6: InterfaceIpv6[] = JSON.parse(output);
  return interfaceIpv6;
}

/**
 * Get a line-delimited known_hosts table.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the known_hosts data, or rejects with an error message.
 */
export async function getKnownHosts(): Promise<KnownHosts[]> {
  const output = await runOsquery(`SELECT * FROM known_hosts`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const knownHosts: KnownHosts[] = JSON.parse(output);
  return knownHosts;
}

/**
 * Get system logins and logouts.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the login and logout data, or rejects with an error message.
 */
export async function getLast(): Promise<Last[]> {
  const output = await runOsquery(`SELECT * FROM last`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const last: Last[] = JSON.parse(output);
  return last;
}

/**
 * Get system wide load averages.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the load averages data, or rejects with an error message.
 */
export async function getLoadAverage(): Promise<LoadAverage[]> {
  const output = await runOsquery(`SELECT * FROM load_average`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const loadAverage: LoadAverage[] = JSON.parse(output);
  return loadAverage;
}

/**
 * Get magic number recognition data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the magic data, or rejects with an error message.
 */
export async function getMagic(): Promise<Magic[]> {
  const output = await runOsquery(`SELECT * FROM magic`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const magic: Magic[] = JSON.parse(output);
  return magic;
}

/**
 * Get data associated for address mapping of physical memory arrays.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the memory array mapped addresses data, or rejects with an error message.
 */
export async function getMemoryArrayMappedAddresses(): Promise<
  MemoryArrayMappedAddresses[]
> {
  const output = await runOsquery(
    `SELECT * FROM memory_array_mapped_addresses`,
    [OsType.LINUX, OsType.DARWIN],
  );
  const memoryArrayMappedAddresses: MemoryArrayMappedAddresses[] =
    JSON.parse(output);
  return memoryArrayMappedAddresses;
}

/**
 * Get data associated with collection of memory devices that operate to form a memory address.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the memory arrays data, or rejects with an error message.
 */
export async function getMemoryArrays(): Promise<MemoryArrays[]> {
  const output = await runOsquery(`SELECT * FROM memory_arrays`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const memoryArrays: MemoryArrays[] = JSON.parse(output);
  return memoryArrays;
}

/**
 * Get data associated for address mapping of physical memory devices.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the memory device mapped addresses data, or rejects with an error message.
 */
export async function getMemoryDeviceMappedAddresses(): Promise<
  MemoryDeviceMappedAddresses[]
> {
  const output = await runOsquery(
    `SELECT * FROM memory_device_mapped_addresses`,
    [OsType.LINUX, OsType.DARWIN],
  );
  const memoryDeviceMappedAddresses: MemoryDeviceMappedAddresses[] =
    JSON.parse(output);
  return memoryDeviceMappedAddresses;
}

/**
 * Get data associated with errors of a physical memory array.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the memory error info data, or rejects with an error message.
 */
export async function getMemoryErrorInfo(): Promise<MemoryErrorInfo[]> {
  const output = await runOsquery(`SELECT * FROM memory_error_info`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const memoryErrorInfo: MemoryErrorInfo[] = JSON.parse(output);
  return memoryErrorInfo;
}

/**
 * Get system mounted devices and filesystems (not process specific).
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the mounted devices and filesystems data, or rejects with an error message.
 */
export async function getMounts(): Promise<Mounts[]> {
  const output = await runOsquery(`SELECT * FROM mounts`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const mounts: Mounts[] = JSON.parse(output);
  return mounts;
}

/**
 * Get OEM defined strings retrieved from SMBIOS.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the OEM strings data, or rejects with an error message.
 */
export async function getOemStrings(): Promise<OemStrings[]> {
  const output = await runOsquery(`SELECT * FROM oem_strings`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const oemStrings: OemStrings[] = JSON.parse(output);
  return oemStrings;
}

/**
 * Get PCI devices active on the host system.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the PCI devices data, or rejects with an error message.
 */
export async function getPciDevices(): Promise<PciDevices[]> {
  const output = await runOsquery(`SELECT * FROM pci_devices`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const pciDevices: PciDevices[] = JSON.parse(output);
  return pciDevices;
}

/**
 * Get a key/value table of environment variables for each process.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the process environment variables data, or rejects with an error message.
 */
export async function getProcessEnvs(): Promise<ProcessEnvs[]> {
  const output = await runOsquery(`SELECT * FROM process_envs`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const processEnvs: ProcessEnvs[] = JSON.parse(output);
  return processEnvs;
}

/**
 * Track time/action process executions.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the process events data, or rejects with an error message.
 */
export async function getProcessEvents(): Promise<ProcessEvents[]> {
  const output = await runOsquery(`SELECT * FROM process_events`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const processEvents: ProcessEvents[] = JSON.parse(output);
  return processEvents;
}

/**
 * Get file descriptors for each process.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the process file descriptors data, or rejects with an error message.
 */
export async function getProcessOpenFiles(): Promise<ProcessOpenFiles[]> {
  const output = await runOsquery(`SELECT * FROM process_open_files`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const processOpenFiles: ProcessOpenFiles[] = JSON.parse(output);
  return processOpenFiles;
}

/**
 * Retrieve metrics from a Prometheus server.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Prometheus metrics data, or rejects with an error message.
 */
export async function getPrometheusMetrics(): Promise<PrometheusMetrics[]> {
  const output = await runOsquery(`SELECT * FROM prometheus_metrics`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const prometheusMetrics: PrometheusMetrics[] = JSON.parse(output);
  return prometheusMetrics;
}

/**
 * Get a line-delimited (command) table of per-user .*_history data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the shell history data, or rejects with an error message.
 */
export async function getShellHistory(): Promise<ShellHistory[]> {
  const output = await runOsquery(`SELECT * FROM shell_history`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const shellHistory: ShellHistory[] = JSON.parse(output);
  return shellHistory;
}

/**
 * Get BIOS (DMI) structure common details and content.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the BIOS structure details and content, or rejects with an error message.
 */
export async function getSmbiosTables(): Promise<SmbiosTables[]> {
  const output = await runOsquery(`SELECT * FROM smbios_tables`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const smbiosTables: SmbiosTables[] = JSON.parse(output);
  return smbiosTables;
}

/**
 * Track network socket opens and closes.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the socket events, or rejects with an error message.
 */
export async function getSocketEvents(): Promise<SocketEvents[]> {
  const output = await runOsquery(`SELECT * FROM socket_events`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const socketEvents: SocketEvents[] = JSON.parse(output);
  return socketEvents;
}

/**
 * Retrieve rules for running commands as other users via sudo.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the sudoers rules, or rejects with an error message.
 */
export async function getSudoers(): Promise<Sudoers[]> {
  const output = await runOsquery(`SELECT * FROM sudoers`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const sudoers: Sudoers[] = JSON.parse(output);
  return sudoers;
}

/**
 * Retrieve suid binaries in common locations.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the suid binaries information, or rejects with an error message.
 */
export async function getSuidBin(): Promise<SuidBin[]> {
  const output = await runOsquery(`SELECT * FROM suid_bin`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const suidBin: SuidBin[] = JSON.parse(output);
  return suidBin;
}

/**
 * Retrieve sysctl names, values, and settings information.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the sysctl names, values, and settings information, or rejects with an error message.
 */
export async function getSystemControls(): Promise<SystemControls[]> {
  const output = await runOsquery(`SELECT * FROM system_controls`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const systemControls: SystemControls[] = JSON.parse(output);
  return systemControls;
}

/**
 * Retrieve system resource usage limits.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the system resource usage limits, or rejects with an error message.
 */
export async function getUlimitInfo(): Promise<UlimitInfo[]> {
  const output = await runOsquery(`SELECT * FROM ulimit_info`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const ulimitInfo: UlimitInfo[] = JSON.parse(output);
  return ulimitInfo;
}

/**
 * Retrieve USB devices that are actively plugged into the host system.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the USB devices, or rejects with an error message.
 */
export async function getUsbDevices(): Promise<UsbDevices[]> {
  const output = await runOsquery(`SELECT * FROM usb_devices`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const usbDevices: UsbDevices[] = JSON.parse(output);
  return usbDevices;
}

/**
 * Track user events from the audit framework.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the user events, or rejects with an error message.
 */
export async function getUserEvents(): Promise<UserEvents[]> {
  const output = await runOsquery(`SELECT * FROM user_events`, [
    OsType.LINUX,
    OsType.DARWIN,
  ]);
  const userEvents: UserEvents[] = JSON.parse(output);
  return userEvents;
}

// 🐧

/**
 * Track AppArmor events.
 * Runs on Linux.
 * @return A Promise that resolves with the AppArmor events, or rejects with an error message.
 */
export async function getApparmorEvents(): Promise<ApparmorEvents[]> {
  const output = await runOsquery(`SELECT * FROM apparmor_events`, [
    OsType.LINUX,
  ]);
  const apparmorEvents: ApparmorEvents[] = JSON.parse(output);
  return apparmorEvents;
}

/**
 * Track active AppArmor profiles.
 * Runs on Linux.
 * @return A Promise that resolves with the active AppArmor profiles, or rejects with an error message.
 */
export async function getApparmorProfiles(): Promise<ApparmorProfiles[]> {
  const output = await runOsquery(`SELECT * FROM apparmor_profiles`, [
    OsType.LINUX,
  ]);
  const apparmorProfiles: ApparmorProfiles[] = JSON.parse(output);
  return apparmorProfiles;
}

/**
 * Get the current list of APT repositories or software channels.
 * Runs on Linux.
 * @return A Promise that resolves with the list of APT repositories, or rejects with an error message.
 */
export async function getAptSources(): Promise<AptSources[]> {
  const output = await runOsquery(`SELECT * FROM apt_sources`, [OsType.LINUX]);
  const aptSources: AptSources[] = JSON.parse(output);
  return aptSources;
}

/**
 * Get the current list of BPF process events.
 * Runs on Linux.
 * @return A Promise that resolves with the list of BPF process events, or rejects with an error message.
 */
export async function getBpfProcessEvents(): Promise<BpfProcessEvents[]> {
  const output = await runOsquery(`SELECT * FROM bpf_process_events`, [
    OsType.LINUX,
  ]);
  const bpfProcessEvents: BpfProcessEvents[] = JSON.parse(output);
  return bpfProcessEvents;
}

/**
 * Get the current list of BPF socket events.
 * Runs on Linux.
 * @return A Promise that resolves with the list of BPF socket events, or rejects with an error message.
 */
export async function getBpfSocketEvents(): Promise<BpfSocketEvents[]> {
  const output = await runOsquery(`SELECT * FROM bpf_socket_events`, [
    OsType.LINUX,
  ]);
  const bpfSocketEvents: BpfSocketEvents[] = JSON.parse(output);
  return bpfSocketEvents;
}

/**
 * Get the current list of DEB packages.
 * Runs on Linux.
 * @return A Promise that resolves with the list of DEB packages, or rejects with an error message.
 */
export async function getDebPackages(): Promise<DebPackages[]> {
  const output = await runOsquery(`SELECT * FROM deb_packages`, [OsType.LINUX]);
  const debPackages: DebPackages[] = JSON.parse(output);
  return debPackages;
}

/**
 * Get the current list of iptables rules.
 * Runs on Linux.
 * @return A Promise that resolves with the list of iptables rules, or rejects with an error message.
 */
export async function getIptables(): Promise<Iptables[]> {
  const output = await runOsquery(`SELECT * FROM iptables`, [OsType.LINUX]);
  const iptables: Iptables[] = JSON.parse(output);
  return iptables;
}

/**
 * Get the current list of kernel keys.
 * Runs on Linux.
 * @return A Promise that resolves with the list of kernel keys, or rejects with an error message.
 */
export async function getKernelKeys(): Promise<KernelKeys[]> {
  const output = await runOsquery(`SELECT * FROM kernel_keys`, [OsType.LINUX]);
  const kernelKeys: KernelKeys[] = JSON.parse(output);
  return kernelKeys;
}

/**
 * Get the current list of kernel modules.
 * Runs on Linux.
 * @return A Promise that resolves with the list of kernel modules, or rejects with an error message.
 */
export async function getKernelModules(): Promise<KernelModules[]> {
  const output = await runOsquery(`SELECT * FROM kernel_modules`, [
    OsType.LINUX,
  ]);
  const kernelModules: KernelModules[] = JSON.parse(output);
  return kernelModules;
}

/**
 * Get the current list of LXD certificates.
 * Runs on Linux.
 * @return A Promise that resolves with the list of LXD certificates, or rejects with an error message.
 */
export async function getLxdCertificates(): Promise<LxdCertificates[]> {
  const output = await runOsquery(`SELECT * FROM lxd_certificates`, [
    OsType.LINUX,
  ]);
  const lxdCertificates: LxdCertificates[] = JSON.parse(output);
  return lxdCertificates;
}

/**
 * Get the current LXD cluster information.
 * Runs on Linux.
 * @return A Promise that resolves with the LXD cluster information, or rejects with an error message.
 */
export async function getLxdCluster(): Promise<LxdCluster[]> {
  const output = await runOsquery(`SELECT * FROM lxd_cluster`, [OsType.LINUX]);
  const lxdCluster: LxdCluster[] = JSON.parse(output);
  return lxdCluster;
}

/**
 * Get the current LXD cluster members information.
 * Runs on Linux.
 * @return A Promise that resolves with the LXD cluster members information, or rejects with an error message.
 */
export async function getLxdClusterMembers(): Promise<LxdClusterMembers[]> {
  const output = await runOsquery(`SELECT * FROM lxd_cluster_members`, [
    OsType.LINUX,
  ]);
  const lxdClusterMembers: LxdClusterMembers[] = JSON.parse(output);
  return lxdClusterMembers;
}

/**
 * Get the current LXD images information.
 * Runs on Linux.
 * @return A Promise that resolves with the LXD images information, or rejects with an error message.
 */
export async function getLxdImages(): Promise<LxdImages[]> {
  const output = await runOsquery(`SELECT * FROM lxd_images`, [OsType.LINUX]);
  const lxdImages: LxdImages[] = JSON.parse(output);
  return lxdImages;
}

/**
 * Get the current LXD instance configuration information.
 * Runs on Linux.
 * @return A Promise that resolves with the LXD instance configuration information, or rejects with an error message.
 */
export async function getLxdInstanceConfig(): Promise<LxdInstanceConfig[]> {
  const output = await runOsquery(`SELECT * FROM lxd_instance_config`, [
    OsType.LINUX,
  ]);
  const lxdInstanceConfig: LxdInstanceConfig[] = JSON.parse(output);
  return lxdInstanceConfig;
}

/**
 * Get the current LXD instance devices information.
 * Runs on Linux.
 * @return A Promise that resolves with the LXD instance devices information, or rejects with an error message.
 */
export async function getLxdInstanceDevices(): Promise<LxdInstanceDevices[]> {
  const output = await runOsquery(`SELECT * FROM lxd_instance_devices`, [
    OsType.LINUX,
  ]);
  const lxdInstanceDevices: LxdInstanceDevices[] = JSON.parse(output);
  return lxdInstanceDevices;
}

/**
 * Get the current LXD instances information.
 * Runs on Linux.
 * @return A Promise that resolves with the LXD instances information, or rejects with an error message.
 */
export async function getLxdInstances(): Promise<LxdInstances[]> {
  const output = await runOsquery(`SELECT * FROM lxd_instances`, [
    OsType.LINUX,
  ]);
  const lxdInstances: LxdInstances[] = JSON.parse(output);
  return lxdInstances;
}

/**
 * Get the current LXD network information.
 * Runs on Linux.
 * @return A Promise that resolves with the LXD network information, or rejects with an error message.
 */
export async function getLxdNetworks(): Promise<LxdNetworks[]> {
  const output = await runOsquery(`SELECT * FROM lxd_networks`, [OsType.LINUX]);
  const lxdNetworks: LxdNetworks[] = JSON.parse(output);
  return lxdNetworks;
}

/**
 * Get the current LXD storage pool information.
 * Runs on Linux.
 * @return A Promise that resolves with the LXD storage pool information, or rejects with an error message.
 */
export async function getLxdStoragePools(): Promise<LxdStoragePools[]> {
  const output = await runOsquery(`SELECT * FROM lxd_storage_pools`, [
    OsType.LINUX,
  ]);
  const lxdStoragePools: LxdStoragePools[] = JSON.parse(output);
  return lxdStoragePools;
}

/**
 * Get the current Software RAID array settings.
 * Runs on Linux.
 * @return A Promise that resolves with the Software RAID array settings, or rejects with an error message.
 */
export async function getMdDevices(): Promise<MdDevices[]> {
  const output = await runOsquery(`SELECT * FROM md_devices`, [OsType.LINUX]);
  const mdDevices: MdDevices[] = JSON.parse(output);
  return mdDevices;
}

/**
 * Get the drive devices used for Software RAID.
 * Runs on Linux.
 * @return A Promise that resolves with the drive devices, or rejects with an error message.
 */
export async function getMdDrives(): Promise<MdDrives[]> {
  const output = await runOsquery(`SELECT * FROM md_drives`, [OsType.LINUX]);
  const mdDrives: MdDrives[] = JSON.parse(output);
  return mdDrives;
}

/**
 * Get the software RAID settings supported by the kernel.
 * Runs on Linux.
 * @return A Promise that resolves with the RAID settings, or rejects with an error message.
 */
export async function getMdPersonalities(): Promise<MdPersonalities[]> {
  const output = await runOsquery(`SELECT * FROM md_personalities`, [
    OsType.LINUX,
  ]);
  const mdPersonalities: MdPersonalities[] = JSON.parse(output);
  return mdPersonalities;
}

/**
 * Get main memory information in bytes.
 * Runs on Linux.
 * @return A Promise that resolves with the memory information, or rejects with an error message.
 */
export async function getMemoryInfo(): Promise<MemoryInfo[]> {
  const output = await runOsquery(`SELECT * FROM memory_info`, [OsType.LINUX]);
  const memoryInfo: MemoryInfo[] = JSON.parse(output);
  return memoryInfo;
}

/**
 * Get the OS memory region map.
 * Runs on Linux.
 * @return A Promise that resolves with the memory map information, or rejects with an error message.
 */
export async function getMemoryMap(): Promise<MemoryMap[]> {
  const output = await runOsquery(`SELECT * FROM memory_map`, [OsType.LINUX]);
  const memoryMap: MemoryMap[] = JSON.parse(output);
  return memoryMap;
}

/**
 * Get various pieces of data stored in the model specific register per processor.
 * Runs on Linux.
 * NOTE: the msr kernel module must be enabled, and osquery must be run as root.
 * @return A Promise that resolves with the MSR data, or rejects with an error message.
 */
export async function getMsr(): Promise<Msr[]> {
  const output = await runOsquery(`SELECT * FROM msr`, [OsType.LINUX]);
  const msr: Msr[] = JSON.parse(output);
  return msr;
}

/**
 * Get a summary about portage configurations like keywords, mask and unmask.
 * Runs on Linux.
 * @return A Promise that resolves with the portage keywords data, or rejects with an error message.
 */
export async function getPortageKeywords(): Promise<PortageKeywords[]> {
  const output = await runOsquery(`SELECT * FROM portage_keywords`, [
    OsType.LINUX,
  ]);
  const portageKeywords: PortageKeywords[] = JSON.parse(output);
  return portageKeywords;
}

/**
 * Get a list of currently installed packages.
 * Runs on Linux.
 * @return A Promise that resolves with the portage packages data, or rejects with an error message.
 */
export async function getPortagePackages(): Promise<PortagePackages[]> {
  const output = await runOsquery(`SELECT * FROM portage_packages`, [
    OsType.LINUX,
  ]);
  const portagePackages: PortagePackages[] = JSON.parse(output);
  return portagePackages;
}

/**
 * Get a list of enabled portage USE values for specific package.
 * Runs on Linux.
 * @return A Promise that resolves with the portage use data, or rejects with an error message.
 */
export async function getPortageUse(): Promise<PortageUse[]> {
  const output = await runOsquery(`SELECT * FROM portage_use`, [OsType.LINUX]);
  const portageUse: PortageUse[] = JSON.parse(output);
  return portageUse;
}

/**
 * Get the File Integrity Monitor implementation using the audit service.
 * Runs on Linux.
 * @return A Promise that resolves with the process file events data, or rejects with an error message.
 */
export async function getProcessFileEvents(): Promise<ProcessFileEvents[]> {
  const output = await runOsquery(`SELECT * FROM process_file_events`, [
    OsType.LINUX,
  ]);
  const processFileEvents: ProcessFileEvents[] = JSON.parse(output);
  return processFileEvents;
}

/**
 * Get Linux namespaces for processes running on the host system.
 * Runs on Linux.
 * @return A Promise that resolves with the process namespaces data, or rejects with an error message.
 */
export async function getProcessNamespaces(): Promise<ProcessNamespaces[]> {
  const output = await runOsquery(`SELECT * FROM process_namespaces`, [
    OsType.LINUX,
  ]);
  const processNamespaces: ProcessNamespaces[] = JSON.parse(output);
  return processNamespaces;
}

/**
 * Get pipes and partner processes for each process.
 * Runs on Linux.
 * @return A Promise that resolves with the process open pipes data, or rejects with an error message.
 */
export async function getProcessOpenPipes(): Promise<ProcessOpenPipes[]> {
  const output = await runOsquery(`SELECT * FROM process_open_pipes`, [
    OsType.LINUX,
  ]);
  const processOpenPipes: ProcessOpenPipes[] = JSON.parse(output);
  return processOpenPipes;
}

/**
 * Get information about RPM packages currently installed on the host system.
 * Runs on Linux.
 * @return A Promise that resolves with the RPM package files data, or rejects with an error message.
 */
export async function getRpmPackageFiles(): Promise<RpmPackageFiles[]> {
  const output = await runOsquery(`SELECT * FROM rpm_package_files`, [
    OsType.LINUX,
  ]);
  const rpmPackageFiles: RpmPackageFiles[] = JSON.parse(output);
  return rpmPackageFiles;
}

/**
 * Get information about RPM packages currently installed on the host system.
 * Runs on Linux.
 * @return A Promise that resolves with the RPM packages data, or rejects with an error message.
 */
export async function getRpmPackages(): Promise<RpmPackages[]> {
  const output = await runOsquery(`SELECT * FROM rpm_packages`, [OsType.LINUX]);
  const rpmPackages: RpmPackages[] = JSON.parse(output);
  return rpmPackages;
}

/**
 * Get information about seccomp events.
 * Runs on Linux.
 * @return A Promise that resolves with the seccomp events data, or rejects with an error message.
 */
export async function getSeccompEvents(): Promise<SeccompEvents[]> {
  const output = await runOsquery(`SELECT * FROM seccomp_events`, [
    OsType.LINUX,
  ]);
  const seccompEvents: SeccompEvents[] = JSON.parse(output);
  return seccompEvents;
}

/**
 * Get information about SELinux events.
 * Runs on Linux.
 * @return A Promise that resolves with the SELinux events data, or rejects with an error message.
 */
export async function getSelinuxEvents(): Promise<SelinuxEvents[]> {
  const output = await runOsquery(`SELECT * FROM selinux_events`, [
    OsType.LINUX,
  ]);
  const selinuxEvents: SelinuxEvents[] = JSON.parse(output);
  return selinuxEvents;
}

/**
 * Get information about active SELinux settings.
 * Runs on Linux.
 * @return A Promise that resolves with the SELinux settings data, or rejects with an error message.
 */
export async function getSelinuxSettings(): Promise<SelinuxSettings[]> {
  const output = await runOsquery(`SELECT * FROM selinux_settings`, [
    OsType.LINUX,
  ]);
  const selinuxSettings: SelinuxSettings[] = JSON.parse(output);
  return selinuxSettings;
}

/**
 * Get local system users encrypted passwords and related information.
 * Runs on Linux.
 * @return A Promise that resolves with the users data, or rejects with an error message.
 */
export async function getShadow(): Promise<Shadow[]> {
  const output = await runOsquery(`SELECT * FROM shadow`, [OsType.LINUX]);
  const shadow: Shadow[] = JSON.parse(output);
  return shadow;
}

/**
 * Get information about OS shared memory regions.
 * Runs on Linux.
 * @return A Promise that resolves with the shared memory regions data, or rejects with an error message.
 */
export async function getSharedMemory(): Promise<SharedMemory[]> {
  const output = await runOsquery(`SELECT * FROM shared_memory`, [
    OsType.LINUX,
  ]);
  const sharedMemory: SharedMemory[] = JSON.parse(output);
  return sharedMemory;
}

/**
 * Get syslog events.
 * Runs on Linux.
 * @return A Promise that resolves with the syslog events data, or rejects with an error message.
 */
export async function getSyslogEvents(): Promise<SyslogEvent[]> {
  const output = await runOsquery(`SELECT * FROM syslog_events`, [
    OsType.LINUX,
  ]);
  const syslogEvents: SyslogEvent[] = JSON.parse(output);
  return syslogEvents;
}

/**
 * Get systemd units.
 * Runs on Linux.
 * @return A Promise that resolves with the systemd units data, or rejects with an error message.
 */
export async function getSystemdUnits(): Promise<SystemdUnit[]> {
  const output = await runOsquery(`SELECT * FROM systemd_units`, [
    OsType.LINUX,
  ]);
  const systemdUnits: SystemdUnit[] = JSON.parse(output);
  return systemdUnits;
}

/**
 * Get Yum sources.
 * Runs on Linux.
 * @return A Promise that resolves with the Yum sources data, or rejects with an error message.
 */
export async function getYumSources(): Promise<YumSource[]> {
  const output = await runOsquery(`SELECT * FROM yum_sources`, [OsType.LINUX]);
  const yumSources: YumSource[] = JSON.parse(output);
  return yumSources;
}

// 🍎

/**
 * Get Account Policy Data.
 * Runs on MacOS.
 * @return A Promise that resolves with the Account Policy Data, or rejects with an error message.
 */
export async function getAccountPolicyData(): Promise<AccountPolicyData[]> {
  const output = await runOsquery(`SELECT * FROM account_policy_data`, [
    OsType.DARWIN,
  ]);
  const accountPolicyData: AccountPolicyData[] = JSON.parse(output);
  return accountPolicyData;
}

/**
 * Get Active Directory Configuration.
 * Runs on MacOS.
 * @return A Promise that resolves with the Active Directory Configuration, or rejects with an error message.
 */
export async function getAdConfig(): Promise<AdConfig[]> {
  const output = await runOsquery(`SELECT * FROM ad_config`, [OsType.DARWIN]);
  const adConfig: AdConfig[] = JSON.parse(output);
  return adConfig;
}

/**
 * Get ALF details.
 * Runs on MacOS.
 * @return A Promise that resolves with the ALF details, or rejects with an error message.
 */
export async function getAlfDetails(): Promise<Alf[]> {
  const output = await runOsquery(`SELECT * FROM alf`, [OsType.DARWIN]);
  const alfDetails: Alf[] = JSON.parse(output);
  return alfDetails;
}

/**
 * Get ALF exceptions.
 * Runs on MacOS.
 * @return A Promise that resolves with the ALF exceptions, or rejects with an error message.
 */
export async function getAlfExceptions(): Promise<AlfExceptions[]> {
  const output = await runOsquery(`SELECT * FROM alf_exceptions`, [
    OsType.DARWIN,
  ]);
  const alfExceptions: AlfExceptions[] = JSON.parse(output);
  return alfExceptions;
}

/**
 * Get ALF explicit authorizations.
 * Runs on MacOS.
 * @return A Promise that resolves with the ALF explicit authorizations, or rejects with an error message.
 */
export async function getAlfExplicitAuths(): Promise<AlfExplicitAuths[]> {
  const output = await runOsquery(`SELECT * FROM alf_explicit_auths`, [
    OsType.DARWIN,
  ]);
  const alfExplicitAuths: AlfExplicitAuths[] = JSON.parse(output);
  return alfExplicitAuths;
}

/**
 * Get application schemes and their handlers.
 * Runs on MacOS.
 * @return A Promise that resolves with the application schemes and handlers, or rejects with an error message.
 */
export async function getAppSchemes(): Promise<AppSchemes[]> {
  const output = await runOsquery(`SELECT * FROM app_schemes`, [OsType.DARWIN]);
  const appSchemes: AppSchemes[] = JSON.parse(output);
  return appSchemes;
}

/**
 * Get information about macOS applications installed in known search paths (e.g., /Applications).
 * Runs on MacOS.
 * @return A Promise that resolves with the application information, or rejects with an error message.
 */
export async function getApps(): Promise<Apps[]> {
  const output = await runOsquery(`SELECT * FROM apps`, [OsType.DARWIN]);
  const apps: Apps[] = JSON.parse(output);
  return apps;
}

/**
 * Get information about system events from the Apple System Log data structure.
 * Runs on MacOS.
 * @return A Promise that resolves with the system event information, or rejects with an error message.
 */
export async function getAsl(): Promise<Asl[]> {
  const output = await runOsquery(`SELECT * FROM asl`, [OsType.DARWIN]);
  const asl: Asl[] = JSON.parse(output);
  return asl;
}

/**
 * Get information about macOS Authorization mechanisms database.
 * Runs on MacOS.
 * @return A Promise that resolves with the authorization mechanisms information, or rejects with an error message.
 */
export async function getAuthorizationMechanisms(): Promise<
  AuthorizationMechanisms[]
> {
  const output = await runOsquery(`SELECT * FROM authorization_mechanisms`, [
    OsType.DARWIN,
  ]);
  const authorizationMechanisms: AuthorizationMechanisms[] = JSON.parse(output);
  return authorizationMechanisms;
}

/**
 * Get information about macOS Authorization rights database.
 * Runs on MacOS.
 * @return A Promise that resolves with the authorizations information, or rejects with an error message.
 */
export async function getAuthorizations(): Promise<Authorizations[]> {
  const output = await runOsquery(`SELECT * FROM authorizations`, [
    OsType.DARWIN,
  ]);
  const authorizations: Authorizations[] = JSON.parse(output);
  return authorizations;
}

/**
 * Get information about the internal battery of a Macbook.
 * Runs on MacOS.
 * @return A Promise that resolves with the battery information, or rejects with an error message.
 */
export async function getBatteryInfo(): Promise<Battery[]> {
  const output = await runOsquery(`SELECT * FROM battery`, [OsType.DARWIN]);
  const batteryInfo: Battery[] = JSON.parse(output);
  return batteryInfo;
}

/**
 * Get all C/NPAPI browser plugin details for all users.
 * Runs on MacOS.
 * @return A Promise that resolves with the browser plugin information, or rejects with an error message.
 */
export async function getBrowserPluginInfo(): Promise<BrowserPlugins[]> {
  const output = await runOsquery(`SELECT * FROM browser_plugins`, [
    OsType.DARWIN,
  ]);
  const browserPluginInfo: BrowserPlugins[] = JSON.parse(output);
  return browserPluginInfo;
}

/**
 * Get application, system, and mobile app crash logs.
 * Runs on MacOS.
 * @return A Promise that resolves with the crash logs information, or rejects with an error message.
 */
export async function getCrashLogsInfo(): Promise<Crashes[]> {
  const output = await runOsquery(`SELECT * FROM crashes`, [OsType.DARWIN]);
  const crashLogsInfo: Crashes[] = JSON.parse(output);
  return crashLogsInfo;
}

/**
 * Get all configured printers.
 * Runs on MacOS.
 * @return A Promise that resolves with the printers information, or rejects with an error message.
 */
export async function getConfiguredPrinters(): Promise<CupsDestinations[]> {
  const output = await runOsquery(`SELECT * FROM cups_destinations`, [
    OsType.DARWIN,
  ]);
  const printersInfo: CupsDestinations[] = JSON.parse(output);
  return printersInfo;
}

/**
 * Get all completed print jobs.
 * Runs on MacOS.
 * @return A Promise that resolves with the print jobs information, or rejects with an error message.
 */
export async function getCompletedPrintJobs(): Promise<CupsJobs[]> {
  const output = await runOsquery(`SELECT * FROM cups_jobs`, [OsType.DARWIN]);
  const printJobsInfo: CupsJobs[] = JSON.parse(output);
  return printJobsInfo;
}

/**
 * Get the list of discovered firmware versions.
 * Runs on MacOS.
 * @return A Promise that resolves with the firmware versions information, or rejects with an error message.
 */
export async function getFirmwareVersions(): Promise<DeviceFirmware[]> {
  const output = await runOsquery(`SELECT * FROM device_firmware`, [
    OsType.DARWIN,
  ]);
  const firmwareInfo: DeviceFirmware[] = JSON.parse(output);
  return firmwareInfo;
}

/**
 * Track DMG disk image events (appearance/disappearance) when opened.
 * Runs on MacOS.
 * @return A Promise that resolves with the disk events information, or rejects with an error message.
 */
export async function getDiskEvents(): Promise<DiskEvent[]> {
  const output = await runOsquery(`SELECT * FROM disk_events`, [OsType.DARWIN]);
  const diskEvents: DiskEvent[] = JSON.parse(output);
  return diskEvents;
}

/**
 * Process execution events from EndpointSecurity.
 * Runs on MacOS.
 * @return A Promise that resolves with the process execution events information, or rejects with an error message.
 */
export async function getEsProcessEvents(): Promise<EsProcessEvent[]> {
  const output = await runOsquery(`SELECT * FROM es_process_events`, [
    OsType.DARWIN,
  ]);
  const esProcessEvents: EsProcessEvent[] = JSON.parse(output);
  return esProcessEvents;
}

/**
 * Process execution file events from EndpointSecurity.
 * Runs on MacOS.
 * @return A Promise that resolves with the process execution file events information, or rejects with an error message.
 */
export async function getEsProcessFileEvents(): Promise<EsProcessFileEvent[]> {
  const output = await runOsquery(`SELECT * FROM es_process_file_events`, [
    OsType.DARWIN,
  ]);
  const esProcessFileEvents: EsProcessFileEvent[] = JSON.parse(output);
  return esProcessFileEvents;
}

/**
 * Get information about installed event taps.
 * Runs on MacOS.
 * @return A Promise that resolves with the event taps information, or rejects with an error message.
 */
export async function getEventTaps(): Promise<EventTap[]> {
  const output = await runOsquery(`SELECT * FROM event_taps`, [OsType.DARWIN]);
  const eventTaps: EventTap[] = JSON.parse(output);
  return eventTaps;
}

/**
 * Get information about fan speeds.
 * Runs on MacOS.
 * @return A Promise that resolves with the fan speeds information, or rejects with an error message.
 */
export async function getFanSpeedSensors(): Promise<FanSpeedSensor[]> {
  const output = await runOsquery(`SELECT * FROM fan_speed_sensors`, [
    OsType.DARWIN,
  ]);
  const fanSpeedSensors: FanSpeedSensor[] = JSON.parse(output);
  return fanSpeedSensors;
}

/**
 * Get information about macOS Gatekeeper.
 * Runs on MacOS.
 * @return A Promise that resolves with the Gatekeeper information, or rejects with an error message.
 */
export async function getGatekeeperInfo(): Promise<Gatekeeper> {
  const output = await runOsquery(`SELECT * FROM gatekeeper`, [OsType.DARWIN]);
  const gatekeeperInfo: Gatekeeper = JSON.parse(output)[0];
  return gatekeeperInfo;
}

/**
 * Get a list of apps a user has allowed to run.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of GatekeeperApprovedApps, or rejects with an error message.
 */
export async function getGatekeeperApprovedApps(): Promise<
  GatekeeperApprovedApps[]
> {
  const output = await runOsquery(`SELECT * FROM gatekeeper_approved_apps`, [
    OsType.DARWIN,
  ]);
  const gatekeeperApprovedApps: GatekeeperApprovedApps[] = JSON.parse(output);
  return gatekeeperApprovedApps;
}

/**
 * Get a list of the installed homebrew packages.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of HomebrewPackages, or rejects with an error message.
 */
export async function getHomebrewPackages(): Promise<HomebrewPackages[]> {
  const output = await runOsquery(`SELECT * FROM homebrew_packages`, [
    OsType.DARWIN,
  ]);
  const homebrewPackages: HomebrewPackages[] = JSON.parse(output);
  return homebrewPackages;
}

/**
 * Get information about the Apple iBridge hardware controller.
 * Runs on MacOS.
 * @return A Promise that resolves with an object of IBridgeInfo, or rejects with an error message.
 */
export async function getIBridgeInfo(): Promise<IBridgeInfo> {
  const output = await runOsquery(`SELECT * FROM ibridge_info`, [
    OsType.DARWIN,
  ]);
  const ibridgeInfo: IBridgeInfo = JSON.parse(output)[0];
  return ibridgeInfo;
}

/**
 * Get information about the IOKit registry matching the DeviceTree plane.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of IOKitDeviceTree objects, or rejects with an error message.
 */
export async function getIOKitDeviceTree(): Promise<IOKitDeviceTree[]> {
  const output = await runOsquery(`SELECT * FROM iokit_devicetree`, [
    OsType.DARWIN,
  ]);
  const iokitDeviceTree: IOKitDeviceTree[] = JSON.parse(output);
  return iokitDeviceTree;
}

/**
 * Get information about the full IOKit registry without selecting a plane.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of IOKitRegistry objects, or rejects with an error message.
 */
export async function getIOKitRegistry(): Promise<IOKitRegistry[]> {
  const output = await runOsquery(`SELECT * FROM iokit_registry`, [
    OsType.DARWIN,
  ]);
  const iokitRegistry: IOKitRegistry[] = JSON.parse(output);
  return iokitRegistry;
}

/**
 * Get information about macOS's kernel extensions.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of KernelExtensions objects, or rejects with an error message.
 */
export async function getKernelExtensions(): Promise<KernelExtensions[]> {
  const output = await runOsquery(`SELECT * FROM kernel_extensions`, [
    OsType.DARWIN,
  ]);
  const kernelExtensions: KernelExtensions[] = JSON.parse(output);
  return kernelExtensions;
}

/**
 * Get system kernel panic logs.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of KernelPanics objects, or rejects with an error message.
 */
export async function getKernelPanics(): Promise<KernelPanics[]> {
  const output = await runOsquery(`SELECT * FROM kernel_panics`, [
    OsType.DARWIN,
  ]);
  const kernelPanics: KernelPanics[] = JSON.parse(output);
  return kernelPanics;
}

/**
 * Get applications that have ACL entries in the keychain.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of KeychainAcls objects, or rejects with an error message.
 */
export async function getKeychainAcls(): Promise<KeychainAcls[]> {
  const output = await runOsquery(`SELECT * FROM keychain_acls`, [
    OsType.DARWIN,
  ]);
  const keychainAcls: KeychainAcls[] = JSON.parse(output);
  return keychainAcls;
}

/**
 * Get generic details about keychain items.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of KeychainItems objects, or rejects with an error message.
 */
export async function getKeychainItems(): Promise<KeychainItems[]> {
  const output = await runOsquery(`SELECT * FROM keychain_items`, [
    OsType.DARWIN,
  ]);
  const keychainItems: KeychainItems[] = JSON.parse(output);
  return keychainItems;
}

/**
 * Get information about LaunchAgents and LaunchDaemons from default search paths.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of Launchd objects, or rejects with an error message.
 */
export async function getLaunchd(): Promise<Launchd[]> {
  const output = await runOsquery(`SELECT * FROM launchd`, [OsType.DARWIN]);
  const launchd: Launchd[] = JSON.parse(output);
  return launchd;
}

/**
 * Get override keys, per user, for LaunchDaemons and Agents.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of LaunchdOverrides objects, or rejects with an error message.
 */
export async function getLaunchdOverrides(): Promise<LaunchdOverrides[]> {
  const output = await runOsquery(`SELECT * FROM launchd_overrides`, [
    OsType.DARWIN,
  ]);
  const launchdOverrides: LaunchdOverrides[] = JSON.parse(output);
  return launchdOverrides;
}

/**
 * Get the status of the Location Services feature of the OS.
 * Runs on MacOS.
 * @return A Promise that resolves with a LocationServices object, or rejects with an error message.
 */
export async function getLocationServices(): Promise<LocationServices> {
  const output = await runOsquery(`SELECT * FROM location_services`, [
    OsType.DARWIN,
  ]);
  const locationServices: LocationServices = JSON.parse(output);
  return locationServices;
}

/**
 * Get the managed configuration policies from AD, MDM, MCX, etc.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of ManagedPolicies objects, or rejects with an error message.
 */
export async function getManagedPolicies(): Promise<ManagedPolicies[]> {
  const output = await runOsquery(`SELECT * FROM managed_policies`, [
    OsType.DARWIN,
  ]);
  const managedPolicies: ManagedPolicies[] = JSON.parse(output);
  return managedPolicies;
}

/**
 * Run searches against the spotlight database.
 * Runs on MacOS.
 * @param query The query to run against the spotlight database.
 * @return A Promise that resolves with an array of Mdfind objects, or rejects with an error message.
 */
export async function getMdfindResults(query: string): Promise<Mdfind[]> {
  const output = await runOsquery(
    `SELECT * FROM mdfind WHERE query='${query}'`,
    [OsType.DARWIN],
  );
  const mdfindResults: Mdfind[] = JSON.parse(output);
  return mdfindResults;
}

/**
 * Query file metadata in the Spotlight database.
 * Runs on MacOS.
 * @param path The path of the file to query.
 * @return A Promise that resolves with an array of Mdls objects, or rejects with an error message.
 */
export async function getMdlsResults(path: string): Promise<Mdls[]> {
  const output = await runOsquery(`SELECT * FROM mdls WHERE path='${path}'`, [
    OsType.DARWIN,
  ]);
  const mdlsResults: Mdls[] = JSON.parse(output);
  return mdlsResults;
}

/**
 * Retrieve NFS shares exported by the host.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of NfsShares objects, or rejects with an error message.
 */
export async function getNfsSharesResults(): Promise<NfsShares[]> {
  const output = await runOsquery(`SELECT * FROM nfs_shares`, [OsType.DARWIN]);
  const nfsSharesResults: NfsShares[] = JSON.parse(output);
  return nfsSharesResults;
}

/**
 * Retrieve Apple NVRAM variable listing.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of Nvram objects, or rejects with an error message.
 */
export async function getNvramResults(): Promise<Nvram[]> {
  const output = await runOsquery(`SELECT * FROM nvram`, [OsType.DARWIN]);
  const nvramResults: Nvram[] = JSON.parse(output);
  return nvramResults;
}

/**
 * Retirieve package bill of materials (BOM) file list.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of PackageBom objects, or rejects with an error message.
 * */
export async function getPackageBomResults(): Promise<PackageBom[]> {
  const output = await runOsquery(`SELECT * FROM package_bom`, [OsType.DARWIN]);
  const packageBomResults: PackageBom[] = JSON.parse(output);
  return packageBomResults;
}

/**
 * Retirieve package install history.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of PackageInstallHistory objects, or rejects with an error message.
 * */
export async function getPackageInstallHistory(): Promise<
  PackageInstallHistory[]
> {
  const output = await runOsquery(`SELECT * FROM package_install_history`, [
    OsType.DARWIN,
  ]);
  const packageInstallHistory: PackageInstallHistory[] = JSON.parse(output);
  return packageInstallHistory;
}

/**
 * Retirievea package receipts.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of PackageReceipt objects, or rejects with an error message.
 * */
export async function getPackageReceipts(): Promise<PackageReceipt[]> {
  const output = await runOsquery(`SELECT * FROM package_receipts`, [
    OsType.DARWIN,
  ]);
  const packageReceipts: PackageReceipt[] = JSON.parse(output);
  return packageReceipts;
}

/**
 * Retrieves password policies for macOS.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of PasswordPolicy objects, or rejects with an error message.
 */
export async function getPasswordPolicies(): Promise<PasswordPolicy[]> {
  const output = await runOsquery(`SELECT * FROM password_policy`, [
    OsType.DARWIN,
  ]);
  const passwordPolicies: PasswordPolicy[] = JSON.parse(output);
  return passwordPolicies;
}

/**
 * Reads and parses a plist file.
 * Runs on MacOS.
 * @param path The path to the plist file.
 * @return A Promise that resolves with an array of PlistEntry objects, or rejects with an error message.
 */
export async function getPlist(path: string): Promise<PlistEntry[]> {
  const output = await runOsquery(
    `SELECT * FROM plist WHERE path = '${path}'`,
    [OsType.DARWIN],
  );
  const plistEntries: PlistEntry[] = JSON.parse(output);
  return plistEntries;
}

/**
 * Retrieves Power Sensor information.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of PowerSensor objects, or rejects with an error message.
 */
export async function getPowerSensors(): Promise<PowerSensor[]> {
  const output = await runOsquery(`SELECT * FROM power_sensors`, [
    OsType.DARWIN,
  ]);
  const powerSensors: PowerSensor[] = JSON.parse(output);
  return powerSensors;
}

/**
 * Retrieves Preferences information.
 * Runs on MacOS.
 * @returns A Promise that resolves with Preferences, or rejects with an error message.
 */
export async function getPreferences(): Promise<Preferences> {
  const output = await runOsquery(`SELECT * FROM preferences`, [OsType.DARWIN]);
  const preferences: Preferences = JSON.parse(output);
  return preferences;
}

/**
 * Retrieves QuickLook cache information.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of QuickLookCache objects, or rejects with an error message.
 */
export async function getQuickLookCache(): Promise<QuickLookCache[]> {
  const output = await runOsquery(`SELECT * FROM quicklook_cache`, [
    OsType.DARWIN,
  ]);
  const quickLookCache: QuickLookCache[] = JSON.parse(output);
  return quickLookCache;
}

/**
 * Retrieves running apps information.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of RunningApps objects, or rejects with an error message.
 */
export async function getRunningApps(): Promise<RunningApps[]> {
  const output = await runOsquery(`SELECT * FROM running_apps`, [
    OsType.DARWIN,
  ]);
  const runningApps: RunningApps[] = JSON.parse(output);
  return runningApps;
}

/**
 * Retrieves Safari extensions information.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of SafariExtensions objects, or rejects with an error message.
 */
export async function getSafariExtensions(): Promise<SafariExtensions[]> {
  const output = await runOsquery(`SELECT * FROM safari_extensions`, [
    OsType.DARWIN,
  ]);
  const safariExtensions: SafariExtensions[] = JSON.parse(output);
  return safariExtensions;
}

/**
 * Retrieves macOS application sandboxes container details.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of Sandboxes objects, or rejects with an error message.
 */
export async function getSandboxes(): Promise<Sandboxes[]> {
  const output = await runOsquery(`SELECT * FROM sandboxes`, [OsType.DARWIN]);
  const sandboxes: Sandboxes[] = JSON.parse(output);
  return sandboxes;
}

/**
 * Retrieves macOS screen lock status.
 * Runs on MacOS.
 * @returns A Promise that resolves with the ScreenLock object, or rejects with an error message.
 */
export async function getScreenlock(): Promise<ScreenLock> {
  const output = await runOsquery(`SELECT * FROM screen_lock`, [OsType.DARWIN]);
  const screenLock: ScreenLock = JSON.parse(output);
  return screenLock;
}

/**
 * Retrieves folders available to others via SMB or AFP.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of SharedFolder objects, or rejects with an error message.
 */
export async function getSharedFolders(): Promise<SharedFolder[]> {
  const output = await runOsquery(`SELECT * FROM shared_folders`, [
    OsType.DARWIN,
  ]);
  const sharedFolders: SharedFolder[] = JSON.parse(output);
  return sharedFolders;
}

/**
 * Retrieves macOS sharing preferences.
 * Runs on MacOS.
 * @returns A Promise that resolves with a SharingPreferences object, or rejects with an error message.
 */
export async function getSharingPreferences(): Promise<SharingPreferences> {
  const output = await runOsquery(`SELECT * FROM sharing_preferences`, [
    OsType.DARWIN,
  ]);
  const sharingPreferences: SharingPreferences = JSON.parse(output);
  return sharingPreferences;
}

/**
 * Retrieves file (executable, bundle, installer, disk) code signing status.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of Signature objects, or rejects with an error message.
 */
export async function getSignature(): Promise<Signature[]> {
  const output = await runOsquery(`SELECT * FROM signature`, [OsType.DARWIN]);
  const signature: Signature[] = JSON.parse(output);
  return signature;
}

/**
 * Retrieves Apple's System Integrity Protection (rootless) status.
 * Runs on MacOS.
 * @returns A Promise that resolves with the SipConfig object, or rejects with an error message.
 */
export async function getSipConfig(): Promise<SipConfig> {
  const output = await runOsquery(`SELECT * FROM sip_config`, [OsType.DARWIN]);
  const sipConfig: SipConfig = JSON.parse(output);
  return sipConfig;
}

/**
 * Retrieves macOS System Management Controller (SMC) keys.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of SmcKeys objects, or rejects with an error message.
 */
export async function getSMCKeys(): Promise<SmcKeys[]> {
  const output = await runOsquery(`SELECT * FROM smc_keys`, [OsType.DARWIN]);
  const smcKeys: SmcKeys[] = JSON.parse(output);
  return smcKeys;
}

/**
 * Retrieves macOS (>= 10.15) system extension table.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of SystemExtensions objects, or rejects with an error message.
 */
export async function getSystemExtensions(): Promise<SystemExtensions[]> {
  const output = await runOsquery(`SELECT * FROM system_extensions`, [
    OsType.DARWIN,
  ]);
  const systemExtensions: SystemExtensions[] = JSON.parse(output);
  return systemExtensions;
}

/**
 * Retrieves temperature sensor information.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of TemperatureSensor objects, or rejects with an error message.
 */
export async function getTemperatureSensors(): Promise<TemperatureSensor[]> {
  const output = await runOsquery(`SELECT * FROM temperature_sensors`, [
    OsType.DARWIN,
  ]);
  const temperatureSensors: TemperatureSensor[] = JSON.parse(output);
  return temperatureSensors;
}

/**
 * Retrieves backups to drives using TimeMachine.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of TimeMachineBackup objects, or rejects with an error message.
 */
export async function getTimeMachineBackups(): Promise<TimeMachineBackup[]> {
  const output = await runOsquery(`SELECT * FROM time_machine_backups`, [
    OsType.DARWIN,
  ]);
  const timeMachineBackups: TimeMachineBackup[] = JSON.parse(output);
  return timeMachineBackups;
}

/**
 * Retrieves backup destinations to drives using TimeMachine.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of TimeMachineDestinations objects, or rejects with an error message.
 */
export async function getTimeMachineDestinations(): Promise<
  TimeMachineDestinations[]
> {
  const output = await runOsquery(`SELECT * FROM time_machine_destinations`, [
    OsType.DARWIN,
  ]);
  const timeMachineDestinations: TimeMachineDestinations[] = JSON.parse(output);
  return timeMachineDestinations;
}

/**
 * Retrieves unified logging information.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of UnifiedLog objects, or rejects with an error message.
 */
export async function getUnifiedLog(): Promise<UnifiedLog[]> {
  const output = await runOsquery(`SELECT * FROM unified_log`, [OsType.DARWIN]);
  const unifiedLog: UnifiedLog[] = JSON.parse(output);
  return unifiedLog;
}

/**
 * Retrieves user interaction events from macOS' event tapping framework.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of UserInteractionEvents objects, or rejects with an error message.
 */
export async function getUserInteractionEvents(): Promise<
  UserInteractionEvents[]
> {
  const output = await runOsquery(`SELECT * FROM user_interaction_events`, [
    OsType.DARWIN,
  ]);
  const userInteractionEvents: UserInteractionEvents[] = JSON.parse(output);
  return userInteractionEvents;
}

/**
 * Retrieves Darwin Virtual Memory statistics.
 * Runs on MacOS.
 * @returns A Promise that resolves with VirtualMemoryInfo object, or rejects with an error message.
 */
export async function getVirtualMemoryInfo(): Promise<VirtualMemoryInfo> {
  const output = await runOsquery(`SELECT * FROM virtual_memory_info`, [
    OsType.DARWIN,
  ]);
  const virtualMemoryInfo: VirtualMemoryInfo = JSON.parse(output);
  return virtualMemoryInfo;
}

/**
 * Retrieves macOS known/remembered Wi-Fi networks list.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of WifiNetworks objects, or rejects with an error message.
 */
export async function getWifiNetworks(): Promise<WifiNetworks[]> {
  const output = await runOsquery(`SELECT * FROM wifi_networks`, [
    OsType.DARWIN,
  ]);
  const wifiNetworks: WifiNetworks[] = JSON.parse(output);
  return wifiNetworks;
}

/**
 * Retrieves macOS current WiFi status.
 * Runs on MacOS.
 * @returns A Promise that resolves with WifiStatus, or rejects with an error message.
 */
export async function getWifiStatus(): Promise<WifiStatus> {
  const output = await runOsquery(`SELECT * FROM wifi_status`, [OsType.DARWIN]);
  const wifiStatus: WifiStatus = JSON.parse(output);
  return wifiStatus;
}

/**
 * Retrieves macOS nearby WiFi networks.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of WifiSurvey objects, or rejects with an error message.
 */
export async function getWifiSurvey(): Promise<WifiSurvey[]> {
  const output = await runOsquery(`SELECT * FROM wifi_survey`, [OsType.DARWIN]);
  const wifiSurvey: WifiSurvey[] = JSON.parse(output);
  return wifiSurvey;
}

/**
 * Retrieves machine's XProtect entries.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of XProtectEntries objects, or rejects with an error message.
 */
export async function getXProtectEntries(): Promise<XProtectEntries[]> {
  const output = await runOsquery(`SELECT * FROM xprotect_entries`, [
    OsType.DARWIN,
  ]);
  const xProtectEntries: XProtectEntries[] = JSON.parse(output);
  return xProtectEntries;
}

/**
 * Retrieves machine's XProtectMeta.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of XProtectMeta objects, or rejects with an error message.
 */
export async function getXProtectMeta(): Promise<XProtectMeta[]> {
  const output = await runOsquery(`SELECT * FROM xprotect_meta`, [
    OsType.DARWIN,
  ]);
  const xProtectMeta: XProtectMeta[] = JSON.parse(output);
  return xProtectMeta;
}

/**
 * Retrieves machine's XProtectReports.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of XProtectReports objects, or rejects with an error message.
 */
export async function getXProtectReports(): Promise<XProtectReports[]> {
  const output = await runOsquery(`SELECT * FROM xprotect_reports`, [
    OsType.DARWIN,
  ]);
  const xProtectReports: XProtectReports[] = JSON.parse(output);
  return xProtectReports;
}
