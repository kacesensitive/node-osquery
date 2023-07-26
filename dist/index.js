"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUptime = exports.getTime = exports.getSystemInfo = exports.getStartupItems = exports.getSshConfigs = exports.getSecureBoot = exports.getRoutes = exports.getPythonPackages = exports.getProcesses = exports.getProcessOpenSockets = exports.getProcessMemoryMap = exports.getPlatformInfo = exports.getOsquerySchedule = exports.getOsqueryRegistry = exports.getOsqueryPacks = exports.getOsqueryInfo = exports.getOsqueryFlags = exports.getOsqueryExtensions = exports.getOsqueryEvents = exports.getOsVersion = exports.getNpmPackages = exports.getMemoryDevices = exports.getLoggedInUsers = exports.getListeningPorts = exports.getKernelInfo = exports.getInterfaceDetails = exports.getInterfaceAddresses = exports.getHash = exports.getGroups = exports.getFirefoxAddons = exports.getFile = exports.getEtcServices = exports.getEtcProtocols = exports.getEtcHosts = exports.getEc2InstanceTags = exports.getEc2InstanceMetadata = exports.getCurlCertificate = exports.getCurl = exports.getCpuid = exports.getCpuInfo = exports.getChromeExtensions = exports.getChromeExtensionContentScripts = exports.getCertificates = exports.getCarves = exports.getCarbonBlackInfo = exports.getAzureInstanceTags = exports.getAzureInstanceMetadata = exports.getAtomPackages = exports.getArpCache = exports.runOsquery = void 0;
exports.getWindowsOptionalFeatures = exports.getWindowsFirewallRules = exports.getWindowsEvents = exports.getWindowsEventlog = exports.getWindowsCrashes = exports.getWinBaseObj = exports.getVideoInfo = exports.getUserAssist = exports.getTpmInfo = exports.getShimcache = exports.getShellbags = exports.getSharedResources = exports.getServices = exports.getSecurityProfileInfo = exports.getScheduledTasks = exports.getRegistry = exports.getPrograms = exports.getProcessEtwEvents = exports.getPrefetchFiles = exports.getPowershellEvents = exports.getPipes = exports.getPhysicalDiskPerformance = exports.getPatches = exports.getOfficeMRU = exports.getNTFSJournalEvents = exports.getNTFSACLPermissions = exports.getNTDomains = exports.getLogonSessions = exports.getLogicalDrives = exports.getKvaSpeculativeInfo = exports.getIeExtensions = exports.getHvciStatus = exports.getDrivers = exports.getDnsCache = exports.getDiskInfo = exports.getDefaultEnvironment = exports.getConnectivity = exports.getChocolateyPackages = exports.getChassisInfo = exports.getBitlockerInfo = exports.getBackgroundActivitiesModerator = exports.getAutoexec = exports.getAuthenticode = exports.getAppCompatShims = exports.getYCloudInstanceMetadata = exports.getYaraEventResults = exports.getYaraResults = exports.getUsers = exports.getUserSshKeys = exports.getUserGroups = void 0;
exports.getMemoryDeviceMappedAddresses = exports.getMemoryArrays = exports.getMemoryArrayMappedAddresses = exports.getMagic = exports.getLoadAverage = exports.getLast = exports.getKnownHosts = exports.getInterfaceIpv6 = exports.getHardwareEvents = exports.getFileEvents = exports.getExtendedAttributes = exports.getDockerVolumes = exports.getDockerVolumeLabels = exports.getDockerVersion = exports.getDockerNetworks = exports.getDockerNetworkLabels = exports.getDockerInfo = exports.getDockerImages = exports.getDockerImageLayers = exports.getDockerImageLabels = exports.getDockerImageHistory = exports.getDockerContainers = exports.getDockerContainerStats = exports.getDockerContainerProcesses = exports.getDockerContainerPorts = exports.getDockerContainerNetworks = exports.getDockerContainerMounts = exports.getDockerContainerLabels = exports.getDockerContainerFsChanges = exports.getDockerContainerEnvs = exports.getDnsResolvers = exports.getDiskEncryption = exports.getDevicePartitions = exports.getDeviceHash = exports.getDeviceFile = exports.getCrontab = exports.getCpuTime = exports.getBlockDevices = exports.getAuthorizedKeys = exports.getAugeas = exports.getAcpiTables = exports.getIntelMeInfo = exports.getWmiScriptEventConsumers = exports.getWmiFilterConsumerBinding = exports.getWmiEventFilters = exports.getWmiCliEventConsumers = exports.getWmiBiosInfo = exports.getWindowsUpdateHistory = exports.getWindowsSecurityProducts = exports.getWindowsSecurityCenter = void 0;
exports.getSeccompEvents = exports.getRpmPackages = exports.getRpmPackageFiles = exports.getProcessOpenPipes = exports.getProcessNamespaces = exports.getProcessFileEvents = exports.getPortageUse = exports.getPortagePackages = exports.getPortageKeywords = exports.getMsr = exports.getMemoryMap = exports.getMemoryInfo = exports.getMdPersonalities = exports.getMdDrives = exports.getMdDevices = exports.getLxdStoragePools = exports.getLxdNetworks = exports.getLxdInstances = exports.getLxdInstanceDevices = exports.getLxdInstanceConfig = exports.getLxdImages = exports.getLxdClusterMembers = exports.getLxdCluster = exports.getLxdCertificates = exports.getKernelModules = exports.getKernelKeys = exports.getIptables = exports.getDebPackages = exports.getBpfSocketEvents = exports.getBpfProcessEvents = exports.getAptSources = exports.getApparmorProfiles = exports.getApparmorEvents = exports.getUserEvents = exports.getUsbDevices = exports.getUlimitInfo = exports.getSystemControls = exports.getSuidBin = exports.getSudoers = exports.getSocketEvents = exports.getSmbiosTables = exports.getShellHistory = exports.getPrometheusMetrics = exports.getProcessOpenFiles = exports.getProcessEvents = exports.getProcessEnvs = exports.getPciDevices = exports.getOemStrings = exports.getMounts = exports.getMemoryErrorInfo = void 0;
exports.getPasswordPolicies = exports.getPackageReceipts = exports.getPackageInstallHistory = exports.getPackageBomResults = exports.getNvramResults = exports.getNfsSharesResults = exports.getMdlsResults = exports.getMdfindResults = exports.getManagedPolicies = exports.getLocationServices = exports.getLaunchdOverrides = exports.getLaunchd = exports.getKeychainItems = exports.getKeychainAcls = exports.getKernelPanics = exports.getKernelExtensions = exports.getIOKitRegistry = exports.getIOKitDeviceTree = exports.getIBridgeInfo = exports.getHomebrewPackages = exports.getGatekeeperApprovedApps = exports.getGatekeeperInfo = exports.getFanSpeedSensors = exports.getEventTaps = exports.getEsProcessFileEvents = exports.getEsProcessEvents = exports.getDiskEvents = exports.getFirmwareVersions = exports.getCompletedPrintJobs = exports.getConfiguredPrinters = exports.getCrashLogsInfo = exports.getBrowserPluginInfo = exports.getBatteryInfo = exports.getAuthorizations = exports.getAuthorizationMechanisms = exports.getAsl = exports.getApps = exports.getAppSchemes = exports.getAlfExplicitAuths = exports.getAlfExceptions = exports.getAlfDetails = exports.getAdConfig = exports.getAccountPolicyData = exports.getYumSources = exports.getSystemdUnits = exports.getSyslogEvents = exports.getSharedMemory = exports.getShadow = exports.getSelinuxSettings = exports.getSelinuxEvents = void 0;
exports.getXProtectReports = exports.getXProtectMeta = exports.getXProtectEntries = exports.getWifiSurvey = exports.getWifiStatus = exports.getWifiNetworks = exports.getVirtualMemoryInfo = exports.getUserInteractionEvents = exports.getUnifiedLog = exports.getTimeMachineDestinations = exports.getTimeMachineBackups = exports.getTemperatureSensors = exports.getSystemExtensions = exports.getSMCKeys = exports.getSipConfig = exports.getSignature = exports.getSharingPreferences = exports.getSharedFolders = exports.getScreenlock = exports.getSandboxes = exports.getSafariExtensions = exports.getRunningApps = exports.getQuickLookCache = exports.getPreferences = exports.getPowerSensors = exports.getPlist = void 0;
const child_process_1 = require("child_process");
/**
 * Executes an osquery command and returns the output.
 * @param query The osquery command to be executed.
 * @return A Promise that resolves with the command output, or rejects with an error message.
 */
function runOsquery(query) {
    return new Promise((resolve, reject) => {
        (0, child_process_1.exec)(`osqueryi --json "${query}"`, (error, stdout, stderr) => {
            if (error) {
                reject(`Execution error: ${error.message}`);
            }
            else if (stderr) {
                reject(`Command error: ${stderr}`);
            }
            else {
                resolve(stdout);
            }
        });
    });
}
exports.runOsquery = runOsquery;
// 🍎🐧🪟
/**
 * Gets the arp_cache table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the arp_cache table, or rejects with an error message.
 */
function getArpCache() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM arp_cache');
        const arpCache = JSON.parse(output);
        return arpCache;
    });
}
exports.getArpCache = getArpCache;
/**
 * Gets the atom_packages table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the atom_packages table, or rejects with an error message.
 */
function getAtomPackages() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM atom_packages');
        const atomPackages = JSON.parse(output);
        return atomPackages;
    });
}
exports.getAtomPackages = getAtomPackages;
/**
 * Gets the azure_instance_metadata table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the azure_instance_metadata table, or rejects with an error message.
 */
function getAzureInstanceMetadata() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM azure_instance_metadata');
        const azureInstanceMetadata = JSON.parse(output);
        return azureInstanceMetadata;
    });
}
exports.getAzureInstanceMetadata = getAzureInstanceMetadata;
/**
 * Gets the azure_instance_tags table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the azure_instance_tags table, or rejects with an error message.
 */
function getAzureInstanceTags() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM azure_instance_tags');
        const azureInstanceTags = JSON.parse(output);
        return azureInstanceTags;
    });
}
exports.getAzureInstanceTags = getAzureInstanceTags;
/**
 * Gets the carbon_black_info table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the carbon_black_info table, or rejects with an error message.
 */
function getCarbonBlackInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM carbon_black_info');
        const carbonBlackInfo = JSON.parse(output);
        return carbonBlackInfo;
    });
}
exports.getCarbonBlackInfo = getCarbonBlackInfo;
/**
 * Gets the carves table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the carves table, or rejects with an error message.
 */
function getCarves() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM carves');
        const carves = JSON.parse(output);
        return carves;
    });
}
exports.getCarves = getCarves;
/**
 * Gets the certificates table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the certificates table, or rejects with an error message.
 */
function getCertificates() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM certificates');
        const certificates = JSON.parse(output);
        return certificates;
    });
}
exports.getCertificates = getCertificates;
/**
 * Gets the chrome_extension_content_scripts table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the chrome_extension_content_scripts table, or rejects with an error message.
 */
function getChromeExtensionContentScripts() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM chrome_extension_content_scripts');
        const chromeExtensionContentScripts = JSON.parse(output);
        return chromeExtensionContentScripts;
    });
}
exports.getChromeExtensionContentScripts = getChromeExtensionContentScripts;
/**
 * Gets the chrome_extensions table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the chrome_extensions table, or rejects with an error message.
 */
function getChromeExtensions() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM chrome_extensions');
        const chromeExtensions = JSON.parse(output);
        return chromeExtensions;
    });
}
exports.getChromeExtensions = getChromeExtensions;
/**
 * Gets the cpu_info table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the cpu_info table, or rejects with an error message.
 */
function getCpuInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM cpu_info');
        const cpuInfo = JSON.parse(output);
        return cpuInfo;
    });
}
exports.getCpuInfo = getCpuInfo;
/**
 * Gets the cpuid table from osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the cpuid table, or rejects with an error message.
 */
function getCpuid() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM cpuid');
        const cpuid = JSON.parse(output);
        return cpuid;
    });
}
exports.getCpuid = getCpuid;
/**
 * Performs an http request and returns stats about it.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the curl table, or rejects with an error message.
 */
function getCurl() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM curl');
        const curl = JSON.parse(output);
        return curl;
    });
}
exports.getCurl = getCurl;
/**
 * Inspects TLS certificates by connecting to input hostnames.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the curl_certificate table, or rejects with an error message.
 */
function getCurlCertificate() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM curl_certificate');
        const curlCertificate = JSON.parse(output);
        return curlCertificate;
    });
}
exports.getCurlCertificate = getCurlCertificate;
/**
 * Retrieves EC2 instance metadata.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the ec2_instance_metadata table, or rejects with an error message.
 */
function getEc2InstanceMetadata() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM ec2_instance_metadata');
        const ec2InstanceMetadata = JSON.parse(output);
        return ec2InstanceMetadata;
    });
}
exports.getEc2InstanceMetadata = getEc2InstanceMetadata;
/**
 * Retrieves EC2 instance tags.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the ec2_instance_tags table, or rejects with an error message.
 */
function getEc2InstanceTags() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM ec2_instance_tags');
        const ec2InstanceTags = JSON.parse(output);
        return ec2InstanceTags;
    });
}
exports.getEc2InstanceTags = getEc2InstanceTags;
/**
 * Retrieves the parsed /etc/hosts information.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the etc_hosts table, or rejects with an error message.
 */
function getEtcHosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM etc_hosts');
        const etcHosts = JSON.parse(output);
        return etcHosts;
    });
}
exports.getEtcHosts = getEtcHosts;
/**
 * Retrieves the parsed /etc/protocols information.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the etc_protocols table, or rejects with an error message.
 */
function getEtcProtocols() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM etc_protocols');
        const etcProtocols = JSON.parse(output);
        return etcProtocols;
    });
}
exports.getEtcProtocols = getEtcProtocols;
/**
 * Retrieves the parsed /etc/services information.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the etc_services table, or rejects with an error message.
 */
function getEtcServices() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM etc_services');
        const etcServices = JSON.parse(output);
        return etcServices;
    });
}
exports.getEtcServices = getEtcServices;
/**
 * Retrieves the interactive filesystem attributes and metadata.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the file table, or rejects with an error message.
 */
function getFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM file');
        const file = JSON.parse(output);
        return file;
    });
}
exports.getFile = getFile;
/**
 * Retrieves the Firefox browser extensions, webapps, and addons.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the Firefox addons table, or rejects with an error message.
 */
function getFirefoxAddons() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM firefox_addons');
        const firefoxAddons = JSON.parse(output);
        return firefoxAddons;
    });
}
exports.getFirefoxAddons = getFirefoxAddons;
/**
 * Retrieves the local system groups.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the groups table, or rejects with an error message.
 */
function getGroups() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM groups');
        const groups = JSON.parse(output);
        return groups;
    });
}
exports.getGroups = getGroups;
/**
 * Retrieves the filesystem hash data.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the hash data, or rejects with an error message.
 */
function getHash() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM hash');
        const hashes = JSON.parse(output);
        return hashes;
    });
}
exports.getHash = getHash;
/**
 * Retrieves the network interfaces and relevant metadata.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the network interface data, or rejects with an error message.
 */
function getInterfaceAddresses() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM interface_addresses');
        const interfaceAddresses = JSON.parse(output);
        return interfaceAddresses;
    });
}
exports.getInterfaceAddresses = getInterfaceAddresses;
/**
 * Retrieves detailed information and stats of network interfaces.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the network interface details, or rejects with an error message.
 */
function getInterfaceDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM interface_details');
        const interfaceDetails = JSON.parse(output);
        return interfaceDetails;
    });
}
exports.getInterfaceDetails = getInterfaceDetails;
/**
 * Retrieves basic active kernel information.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the kernel information, or rejects with an error message.
 */
function getKernelInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM kernel_info');
        const kernelInfo = JSON.parse(output);
        return kernelInfo;
    });
}
exports.getKernelInfo = getKernelInfo;
/**
 * Retrieves processes with listening (bound) network sockets/ports.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the listening ports data, or rejects with an error message.
 */
function getListeningPorts() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM listening_ports');
        const listeningPorts = JSON.parse(output);
        return listeningPorts;
    });
}
exports.getListeningPorts = getListeningPorts;
/**
 * Retrieves users with an active shell on the system.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the logged in users data, or rejects with an error message.
 */
function getLoggedInUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM logged_in_users');
        const loggedInUsers = JSON.parse(output);
        return loggedInUsers;
    });
}
exports.getLoggedInUsers = getLoggedInUsers;
/**
 * Retrieves physical memory device (type 17) information retrieved from SMBIOS.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the memory devices data, or rejects with an error message.
 */
function getMemoryDevices() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM memory_devices');
        const memoryDevices = JSON.parse(output);
        return memoryDevices;
    });
}
exports.getMemoryDevices = getMemoryDevices;
/**
 * Retrieves Node packages installed in a system.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the Npm packages data, or rejects with an error message.
 */
function getNpmPackages() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM npm_packages');
        const npmPackages = JSON.parse(output);
        return npmPackages;
    });
}
exports.getNpmPackages = getNpmPackages;
/**
 * Retrieves a single row containing the operating system name and version.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the OS version data, or rejects with an error message.
 */
function getOsVersion() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM os_version');
        const osVersion = JSON.parse(output)[0]; // Should only be one row
        return osVersion;
    });
}
exports.getOsVersion = getOsVersion;
/**
 * Retrieves information about the event publishers and subscribers.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the OS query events data, or rejects with an error message.
 */
function getOsqueryEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM osquery_events');
        const osqueryEvents = JSON.parse(output);
        return osqueryEvents;
    });
}
exports.getOsqueryEvents = getOsqueryEvents;
/**
 * Retrieves list of active osquery extensions.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the OS query extensions data, or rejects with an error message.
 */
function getOsqueryExtensions() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM osquery_extensions');
        const osqueryExtensions = JSON.parse(output);
        return osqueryExtensions;
    });
}
exports.getOsqueryExtensions = getOsqueryExtensions;
/**
 * Retrieves configurable flags that modify osquery's behavior.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the OS query flags data, or rejects with an error message.
 */
function getOsqueryFlags() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM osquery_flags');
        const osqueryFlags = JSON.parse(output);
        return osqueryFlags;
    });
}
exports.getOsqueryFlags = getOsqueryFlags;
/**
 * Retrieves top level information about the running version of osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the OS query info data, or rejects with an error message.
 */
function getOsqueryInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM osquery_info');
        const osqueryInfo = JSON.parse(output);
        return osqueryInfo;
    });
}
exports.getOsqueryInfo = getOsqueryInfo;
/**
 * Retrieves information about the current query packs that are loaded in osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the osquery packs data, or rejects with an error message.
 */
function getOsqueryPacks() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM osquery_packs');
        const osqueryPacks = JSON.parse(output);
        return osqueryPacks;
    });
}
exports.getOsqueryPacks = getOsqueryPacks;
/**
 * Retrieves information about the osquery registry plugins.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the osquery registry data, or rejects with an error message.
 */
function getOsqueryRegistry() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM osquery_registry');
        const osqueryRegistry = JSON.parse(output);
        return osqueryRegistry;
    });
}
exports.getOsqueryRegistry = getOsqueryRegistry;
/**
 * Retrieves information about the current queries that are scheduled in osquery.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the osquery schedule data, or rejects with an error message.
 */
function getOsquerySchedule() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM osquery_schedule');
        const osquerySchedule = JSON.parse(output);
        return osquerySchedule;
    });
}
exports.getOsquerySchedule = getOsquerySchedule;
/**
 * Retrieves information about EFI/UEFI/ROM and platform/boot.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the platform info data, or rejects with an error message.
 */
function getPlatformInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM platform_info');
        const platformInfo = JSON.parse(output);
        return platformInfo;
    });
}
exports.getPlatformInfo = getPlatformInfo;
/**
 * Retrieves information about process memory mapped files and pseudo device/regions.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the process memory map data, or rejects with an error message.
 */
function getProcessMemoryMap() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM process_memory_map');
        const processMemoryMap = JSON.parse(output);
        return processMemoryMap;
    });
}
exports.getProcessMemoryMap = getProcessMemoryMap;
/**
 * Retrieves information about processes which have open network sockets on the system.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the process open sockets data, or rejects with an error message.
 */
function getProcessOpenSockets() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM process_open_sockets');
        const processOpenSockets = JSON.parse(output);
        return processOpenSockets;
    });
}
exports.getProcessOpenSockets = getProcessOpenSockets;
/**
 * Retrieves information about all running processes on the host system.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the processes data, or rejects with an error message.
 */
function getProcesses() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM processes');
        const processes = JSON.parse(output);
        return processes;
    });
}
exports.getProcesses = getProcesses;
/**
 * Retrieves information about Python packages installed on the host system.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the Python packages data, or rejects with an error message.
 */
function getPythonPackages() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM python_packages');
        const pythonPackages = JSON.parse(output);
        return pythonPackages;
    });
}
exports.getPythonPackages = getPythonPackages;
/**
 * Retrieves information about the active route table on the host system.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the route table data, or rejects with an error message.
 */
function getRoutes() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM routes');
        const routes = JSON.parse(output);
        return routes;
    });
}
exports.getRoutes = getRoutes;
/**
 * Retrieves information about Secure Boot UEFI Settings.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the Secure Boot data, or rejects with an error message.
 */
function getSecureBoot() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM secureboot');
        const secureBoot = JSON.parse(output);
        return secureBoot;
    });
}
exports.getSecureBoot = getSecureBoot;
/**
 * Retrieves parsed ssh_configs information.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the SSH configurations data, or rejects with an error message.
 */
function getSshConfigs() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM ssh_configs');
        const sshConfigs = JSON.parse(output);
        return sshConfigs;
    });
}
exports.getSshConfigs = getSshConfigs;
/**
 * Retrieves applications and binaries set as user/login startup items.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the startup items data, or rejects with an error message.
 */
function getStartupItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM startup_items');
        const startupItems = JSON.parse(output);
        return startupItems;
    });
}
exports.getStartupItems = getStartupItems;
/**
 * Retrieves system information for identification.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the system info data, or rejects with an error message.
 */
function getSystemInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM system_info');
        const systemInfo = JSON.parse(output);
        return systemInfo;
    });
}
exports.getSystemInfo = getSystemInfo;
/**
 * Retrieves current date and time in UTC.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the time data, or rejects with an error message.
 */
function getTime() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM time');
        const time = JSON.parse(output);
        return time;
    });
}
exports.getTime = getTime;
/**
 * Retrieves time passed since last boot.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the uptime data, or rejects with an error message.
 */
function getUptime() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM uptime');
        const uptime = JSON.parse(output);
        return uptime;
    });
}
exports.getUptime = getUptime;
/**
 * Retrieves local system user group relationships.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the user group data, or rejects with an error message.
 */
function getUserGroups() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM user_groups');
        const userGroups = JSON.parse(output);
        return userGroups;
    });
}
exports.getUserGroups = getUserGroups;
/**
 * Retrieves information about the private keys in the users ~/.ssh directory and whether or not they are encrypted.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the SSH key data, or rejects with an error message.
 */
function getUserSshKeys() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM user_ssh_keys');
        const userSshKeys = JSON.parse(output);
        return userSshKeys;
    });
}
exports.getUserSshKeys = getUserSshKeys;
/**
 * Retrieves information about local user accounts.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the users data, or rejects with an error message.
 */
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery('SELECT * FROM users');
        const users = JSON.parse(output);
        return users;
    });
}
exports.getUsers = getUsers;
/**
 * Triggers one-off YARA query for files at the specified path.
 * Runs on macOS, Linux, and Windows.
 * @param path The path of the file to be scanned.
 * @return A Promise that resolves with the YARA scanning result, or rejects with an error message.
 */
function getYaraResults(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM yara WHERE path='${path}'`);
        const yaraResults = JSON.parse(output);
        return yaraResults;
    });
}
exports.getYaraResults = getYaraResults;
/**
 * Track YARA matches for files specified in configuration data.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the YARA scanning event results, or rejects with an error message.
 */
function getYaraEventResults() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM yara_events`);
        const yaraEvents = JSON.parse(output);
        return yaraEvents;
    });
}
exports.getYaraEventResults = getYaraEventResults;
/**
 * Get Yandex.Cloud instance metadata.
 * Runs on macOS, Linux, and Windows.
 * @return A Promise that resolves with the Yandex.Cloud instance metadata, or rejects with an error message.
 */
function getYCloudInstanceMetadata() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM ycloud_instance_metadata`);
        const yCloudInstanceMetadata = JSON.parse(output);
        return yCloudInstanceMetadata;
    });
}
exports.getYCloudInstanceMetadata = getYCloudInstanceMetadata;
// 🪟
/**
 * Get information about Application Compatibility shims.
 * Runs on Windows.
 * @return A Promise that resolves with the Application Compatibility shims information, or rejects with an error message.
 */
function getAppCompatShims() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM appcompat_shims`);
        const appCompatShims = JSON.parse(output);
        return appCompatShims;
    });
}
exports.getAppCompatShims = getAppCompatShims;
/**
 * Get the code signing status of files.
 * Runs on Windows.
 * @param path - The path of the file.
 * @return A Promise that resolves with the code signing status of the file, or rejects with an error message.
 */
function getAuthenticode(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM authenticode WHERE path='${path}'`);
        const authenticode = JSON.parse(output);
        return authenticode;
    });
}
exports.getAuthenticode = getAuthenticode;
/**
 * Get the executables that will automatically execute on the target machine.
 * Runs on Windows.
 * @return A Promise that resolves with the autoexec items, or rejects with an error message.
 */
function getAutoexec() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM autoexec`);
        const autoexec = JSON.parse(output);
        return autoexec;
    });
}
exports.getAutoexec = getAutoexec;
/**
 * Get the applications tracked by the Background Activities Moderator (BAM).
 * Runs on Windows.
 * @return A Promise that resolves with the BAM tracked applications, or rejects with an error message.
 */
function getBackgroundActivitiesModerator() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM background_activities_moderator`);
        const backgroundActivitiesModerator = JSON.parse(output);
        return backgroundActivitiesModerator;
    });
}
exports.getBackgroundActivitiesModerator = getBackgroundActivitiesModerator;
/**
 * Get the BitLocker status of the machine.
 * Runs on Windows.
 * @return A Promise that resolves with the BitLocker status, or rejects with an error message.
 */
function getBitlockerInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM bitlocker_info`);
        const bitlockerInfo = JSON.parse(output);
        return bitlockerInfo;
    });
}
exports.getBitlockerInfo = getBitlockerInfo;
/**
 * Get information pertaining to the chassis and its security status.
 * Runs on Windows.
 * @return A Promise that resolves with the chassis information, or rejects with an error message.
 */
function getChassisInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM chassis_info`);
        const chassisInfo = JSON.parse(output);
        return chassisInfo;
    });
}
exports.getChassisInfo = getChassisInfo;
/**
 * Get information about the Chocolatey packages installed in a system.
 * Runs on Windows.
 * @return A Promise that resolves with the Chocolatey packages information, or rejects with an error message.
 */
function getChocolateyPackages() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM chocolatey_packages`);
        const chocolateyPackages = JSON.parse(output);
        return chocolateyPackages;
    });
}
exports.getChocolateyPackages = getChocolateyPackages;
/**
 * Get the overall system's network state.
 * Runs on Windows.
 * @return A Promise that resolves with the system's network state, or rejects with an error message.
 */
function getConnectivity() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM connectivity`);
        const connectivity = JSON.parse(output);
        return connectivity;
    });
}
exports.getConnectivity = getConnectivity;
/**
 * Get default environment variables and their values.
 * Runs on Windows.
 * @return A Promise that resolves with the environment variables and their values, or rejects with an error message.
 */
function getDefaultEnvironment() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM default_environment`);
        const defaultEnvironment = JSON.parse(output);
        return defaultEnvironment;
    });
}
exports.getDefaultEnvironment = getDefaultEnvironment;
/**
 * Get basic information about the physical disks of a system.
 * Runs on Windows.
 * @return A Promise that resolves with the information about the physical disks, or rejects with an error message.
 */
function getDiskInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM disk_info`);
        const diskInfo = JSON.parse(output);
        return diskInfo;
    });
}
exports.getDiskInfo = getDiskInfo;
/**
 * Enumerate the DNS cache.
 * Runs on Windows.
 * @return A Promise that resolves with the DNS cache data, or rejects with an error message.
 */
function getDnsCache() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM dns_cache`);
        const dnsCache = JSON.parse(output);
        return dnsCache;
    });
}
exports.getDnsCache = getDnsCache;
/**
 * Get details for in-use Windows device drivers.
 * Runs on Windows.
 * @return A Promise that resolves with the device drivers data, or rejects with an error message.
 */
function getDrivers() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM drivers`);
        const drivers = JSON.parse(output);
        return drivers;
    });
}
exports.getDrivers = getDrivers;
/**
 * Get HVCI (Hypervisor-protected Code Integrity) info of the machine.
 * Runs on Windows.
 * @return A Promise that resolves with the HVCI status data, or rejects with an error message.
 */
function getHvciStatus() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM hvci_status`);
        const hvciStatus = JSON.parse(output);
        return hvciStatus;
    });
}
exports.getHvciStatus = getHvciStatus;
/**
 * Get Internet Explorer browser extensions.
 * Runs on Windows.
 * @return A Promise that resolves with the IE extensions data, or rejects with an error message.
 */
function getIeExtensions() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM ie_extensions`);
        const ieExtensions = JSON.parse(output);
        return ieExtensions;
    });
}
exports.getIeExtensions = getIeExtensions;
/**
 * Get kernel virtual address and speculative execution information.
 * Runs on Windows.
 * @return A Promise that resolves with the kernel virtual address and speculative execution information, or rejects with an error message.
 */
function getKvaSpeculativeInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM kva_speculative_info`);
        const kvaSpeculativeInfo = JSON.parse(output);
        return kvaSpeculativeInfo;
    });
}
exports.getKvaSpeculativeInfo = getKvaSpeculativeInfo;
/**
 * Get details for logical drives on the system.
 * Runs on Windows.
 * @return A Promise that resolves with the logical drives details, or rejects with an error message.
 */
function getLogicalDrives() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM logical_drives`);
        const logicalDrives = JSON.parse(output);
        return logicalDrives;
    });
}
exports.getLogicalDrives = getLogicalDrives;
/**
 * Get details for Windows logon sessions.
 * Runs on Windows.
 * @return A Promise that resolves with the logon sessions details, or rejects with an error message.
 */
function getLogonSessions() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM logon_sessions`);
        const logonSessions = JSON.parse(output);
        return logonSessions;
    });
}
exports.getLogonSessions = getLogonSessions;
/**
 * Get basic NT domain information of a Windows machine.
 * Runs on Windows.
 * @return A Promise that resolves with the NT domain details, or rejects with an error message.
 */
function getNTDomains() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM ntdomains`);
        const ntdomains = JSON.parse(output);
        return ntdomains;
    });
}
exports.getNTDomains = getNTDomains;
/**
 * Get NTFS ACL permission information for files and directories.
 * Runs on Windows.
 * @return A Promise that resolves with the NTFS ACL permissions, or rejects with an error message.
 */
function getNTFSACLPermissions() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM ntfs_acl_permissions`);
        const ntfsAclPermissions = JSON.parse(output);
        return ntfsAclPermissions;
    });
}
exports.getNTFSACLPermissions = getNTFSACLPermissions;
/**
 * Get time/action changes to files specified in configuration data.
 * Runs on Windows.
 * @return A Promise that resolves with the NTFS journal events, or rejects with an error message.
 */
function getNTFSJournalEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM ntfs_journal_events`);
        const ntfsJournalEvents = JSON.parse(output);
        return ntfsJournalEvents;
    });
}
exports.getNTFSJournalEvents = getNTFSJournalEvents;
/**
 * Get recently opened Office documents.
 * Runs on Windows.
 * @return A Promise that resolves with the Office MRU entries, or rejects with an error message.
 */
function getOfficeMRU() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM office_mru`);
        const officeMRU = JSON.parse(output);
        return officeMRU;
    });
}
exports.getOfficeMRU = getOfficeMRU;
/**
 * Get patches applied to the system.
 * Runs on Windows.
 * @return A Promise that resolves with the patches applied, or rejects with an error message.
 */
function getPatches() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM patches`);
        const patches = JSON.parse(output);
        return patches;
    });
}
exports.getPatches = getPatches;
/**
 * Get raw data from performance counters that monitor hard or fixed disk drives on the system.
 * Runs on Windows.
 * @return A Promise that resolves with the disk performance data, or rejects with an error message.
 */
function getPhysicalDiskPerformance() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM physical_disk_performance`);
        const physicalDiskPerformance = JSON.parse(output);
        return physicalDiskPerformance;
    });
}
exports.getPhysicalDiskPerformance = getPhysicalDiskPerformance;
/**
 * Get information about named and anonymous pipes on the system.
 * Runs on Windows.
 * @return A Promise that resolves with the pipes data, or rejects with an error message.
 */
function getPipes() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM pipes`);
        const pipes = JSON.parse(output);
        return pipes;
    });
}
exports.getPipes = getPipes;
/**
 * Get Powershell script blocks reconstructed to their full script content.
 * Runs on Windows.
 * This function requires script block logging to be enabled.
 * @return A Promise that resolves with the Powershell events data, or rejects with an error message.
 */
function getPowershellEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM powershell_events`);
        const powershellEvents = JSON.parse(output);
        return powershellEvents;
    });
}
exports.getPowershellEvents = getPowershellEvents;
/**
 * Get metadata related to file execution from prefetch files.
 * Runs on Windows.
 * @return A Promise that resolves with the prefetch files data, or rejects with an error message.
 */
function getPrefetchFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM prefetch`);
        const prefetchFiles = JSON.parse(output);
        return prefetchFiles;
    });
}
exports.getPrefetchFiles = getPrefetchFiles;
/**
 * Get Windows process execution events.
 * Runs on Windows.
 * @return A Promise that resolves with the process execution events data, or rejects with an error message.
 */
function getProcessEtwEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM process_etw_events`);
        const processEtwEvents = JSON.parse(output);
        return processEtwEvents;
    });
}
exports.getProcessEtwEvents = getProcessEtwEvents;
/**
 * Get products as they are installed by Windows Installer.
 * Runs on Windows.
 * @return A Promise that resolves with the installed product's data, or rejects with an error message.
 */
function getPrograms() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM programs`);
        const programs = JSON.parse(output);
        return programs;
    });
}
exports.getPrograms = getPrograms;
/**
 * Get all of the Windows registry hives.
 * Runs on Windows.
 * @return A Promise that resolves with the registry data, or rejects with an error message.
 */
function getRegistry() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM registry`);
        const registry = JSON.parse(output);
        return registry;
    });
}
exports.getRegistry = getRegistry;
/**
 * Get all of the tasks in the Windows task scheduler.
 * Runs on Windows.
 * @return A Promise that resolves with the scheduled task data, or rejects with an error message.
 */
function getScheduledTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM scheduled_tasks`);
        const scheduledTasks = JSON.parse(output);
        return scheduledTasks;
    });
}
exports.getScheduledTasks = getScheduledTasks;
/**
 * Get information on the security profile of the system by listing the system Account and Audit Policies.
 * Runs on Windows.
 * @return A Promise that resolves with the security profile info data, or rejects with an error message.
 */
function getSecurityProfileInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM security_profile_info`);
        const securityProfileInfos = JSON.parse(output);
        return securityProfileInfos;
    });
}
exports.getSecurityProfileInfo = getSecurityProfileInfo;
/**
 * Get information on all installed Windows services and their relevant data.
 * Runs on Windows.
 * @return A Promise that resolves with the services data, or rejects with an error message.
 */
function getServices() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM services`);
        const services = JSON.parse(output);
        return services;
    });
}
exports.getServices = getServices;
/**
 * Get information on shared resources on a Windows computer system.
 * Runs on Windows.
 * @return A Promise that resolves with the shared resources data, or rejects with an error message.
 */
function getSharedResources() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM shared_resources`);
        const sharedResources = JSON.parse(output);
        return sharedResources;
    });
}
exports.getSharedResources = getSharedResources;
/**
 * Get information on directories accessed via Windows Explorer.
 * Runs on Windows.
 * @return A Promise that resolves with the shellbags data, or rejects with an error message.
 */
function getShellbags() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM shellbags`);
        const shellbags = JSON.parse(output);
        return shellbags;
    });
}
exports.getShellbags = getShellbags;
/**
 * Get information on Application Compatibility Cache, which contains artifacts of execution.
 * Runs on Windows.
 * @return A Promise that resolves with the shimcache data, or rejects with an error message.
 */
function getShimcache() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM shimcache`);
        const shimcache = JSON.parse(output);
        return shimcache;
    });
}
exports.getShimcache = getShimcache;
/**
 * Get TPM (Trusted Platform Module) related information.
 * Runs on Windows.
 * @return A Promise that resolves with the TPM information, or rejects with an error message.
 */
function getTpmInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM tpm_info`);
        const tpmInfo = JSON.parse(output);
        return tpmInfo;
    });
}
exports.getTpmInfo = getTpmInfo;
/**
 * Get UserAssist registry key data which tracks when a user executes an application from Windows Explorer.
 * Runs on Windows.
 * @return A Promise that resolves with the UserAssist data, or rejects with an error message.
 */
function getUserAssist() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM userassist`);
        const userAssist = JSON.parse(output);
        return userAssist;
    });
}
exports.getUserAssist = getUserAssist;
/**
 * Get video card information of the machine.
 * Runs on Windows.
 * @return A Promise that resolves with the video card information, or rejects with an error message.
 */
function getVideoInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM video_info`);
        const videoInfo = JSON.parse(output);
        return videoInfo;
    });
}
exports.getVideoInfo = getVideoInfo;
/**
 * Get named Windows objects in the default object directories, across all terminal services sessions.
 * Runs on Windows.
 * @return A Promise that resolves with the named Windows objects, or rejects with an error message.
 */
function getWinBaseObj() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM winbaseobj`);
        const winBaseObj = JSON.parse(output);
        return winBaseObj;
    });
}
exports.getWinBaseObj = getWinBaseObj;
/**
 * Get information from Windows crash logs.
 * Runs on Windows.
 * @return A Promise that resolves with the crash logs information, or rejects with an error message.
 */
function getWindowsCrashes() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM windows_crashes`);
        const windowsCrashes = JSON.parse(output);
        return windowsCrashes;
    });
}
exports.getWindowsCrashes = getWindowsCrashes;
/**
 * Get information from all recorded Windows event logs.
 * Runs on Windows.
 * @return A Promise that resolves with the Windows event logs information, or rejects with an error message.
 */
function getWindowsEventlog() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM windows_eventlog`);
        const windowsEventlog = JSON.parse(output);
        return windowsEventlog;
    });
}
exports.getWindowsEventlog = getWindowsEventlog;
/**
 * Get Windows Event logs.
 * Runs on Windows.
 * @return A Promise that resolves with the Windows event logs information, or rejects with an error message.
 */
function getWindowsEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM windows_events`);
        const windowsEvents = JSON.parse(output);
        return windowsEvents;
    });
}
exports.getWindowsEvents = getWindowsEvents;
/**
 * Get the list of Windows firewall rules.
 * Runs on Windows.
 * @return A Promise that resolves with the Windows firewall rules information, or rejects with an error message.
 */
function getWindowsFirewallRules() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM windows_firewall_rules`);
        const windowsFirewallRules = JSON.parse(output);
        return windowsFirewallRules;
    });
}
exports.getWindowsFirewallRules = getWindowsFirewallRules;
/**
 * Get the names and installation states of windows features.
 * Runs on Windows.
 * @return A Promise that resolves with the windows features information, or rejects with an error message.
 */
function getWindowsOptionalFeatures() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM windows_optional_features`);
        const windowsOptionalFeatures = JSON.parse(output);
        return windowsOptionalFeatures;
    });
}
exports.getWindowsOptionalFeatures = getWindowsOptionalFeatures;
/**
 * Get the health status of Window Security features.
 * Runs on Windows.
 * @return A Promise that resolves with the health status of Window Security features, or rejects with an error message.
 */
function getWindowsSecurityCenter() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM windows_security_center`);
        const windowsSecurityCenter = JSON.parse(output);
        return windowsSecurityCenter;
    });
}
exports.getWindowsSecurityCenter = getWindowsSecurityCenter;
/**
 * Get registered Windows security products.
 * Runs on Windows.
 * @return A Promise that resolves with the registered Windows security products, or rejects with an error message.
 */
function getWindowsSecurityProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM windows_security_products`);
        const windowsSecurityProducts = JSON.parse(output);
        return windowsSecurityProducts;
    });
}
exports.getWindowsSecurityProducts = getWindowsSecurityProducts;
/**
 * Get the history of the windows update events.
 * Runs on Windows.
 * @return A Promise that resolves with the history of the windows update events, or rejects with an error message.
 */
function getWindowsUpdateHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM windows_update_history`);
        const windowsUpdateHistory = JSON.parse(output);
        return windowsUpdateHistory;
    });
}
exports.getWindowsUpdateHistory = getWindowsUpdateHistory;
/**
 * Get important information from the system bios.
 * Runs on Windows.
 * @return A Promise that resolves with the information from the system bios, or rejects with an error message.
 */
function getWmiBiosInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM wmi_bios_info`);
        const wmiBiosInfo = JSON.parse(output);
        return wmiBiosInfo;
    });
}
exports.getWmiBiosInfo = getWmiBiosInfo;
/**
 * Get WMI CommandLineEventConsumer data.
 * Runs on Windows.
 * @return A Promise that resolves with the WMI CommandLineEventConsumer data, or rejects with an error message.
 */
function getWmiCliEventConsumers() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM wmi_cli_event_consumers`);
        const wmiCliEventConsumers = JSON.parse(output);
        return wmiCliEventConsumers;
    });
}
exports.getWmiCliEventConsumers = getWmiCliEventConsumers;
/**
 * Get WMI event filters data.
 * Runs on Windows.
 * @return A Promise that resolves with the WMI event filters data, or rejects with an error message.
 */
function getWmiEventFilters() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM wmi_event_filters`);
        const wmiEventFilters = JSON.parse(output);
        return wmiEventFilters;
    });
}
exports.getWmiEventFilters = getWmiEventFilters;
/**
 * Get WMI filter consumer binding data.
 * Runs on Windows.
 * @return A Promise that resolves with the WMI filter consumer binding data, or rejects with an error message.
 */
function getWmiFilterConsumerBinding() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM wmi_filter_consumer_binding`);
        const wmiFilterConsumerBinding = JSON.parse(output);
        return wmiFilterConsumerBinding;
    });
}
exports.getWmiFilterConsumerBinding = getWmiFilterConsumerBinding;
/**
 * Get WMI script event consumers data.
 * Runs on Windows.
 * @return A Promise that resolves with the WMI script event consumers data, or rejects with an error message.
 */
function getWmiScriptEventConsumers() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM wmi_script_event_consumers`);
        const wmiScriptEventConsumers = JSON.parse(output);
        return wmiScriptEventConsumers;
    });
}
exports.getWmiScriptEventConsumers = getWmiScriptEventConsumers;
// 🪟🐧
/**
 * Get Intel ME/CSE Info.
 * Runs on Windows and Linux.
 * @return A Promise that resolves with the Intel ME/CSE info data, or rejects with an error message.
 */
function getIntelMeInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM intel_me_info`);
        const intelMeInfo = JSON.parse(output);
        return intelMeInfo;
    });
}
exports.getIntelMeInfo = getIntelMeInfo;
// 🍎🐧
/**
 * Get ACPI tables data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the ACPI tables data, or rejects with an error message.
 */
function getAcpiTables() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM acpi_tables`);
        const acpiTables = JSON.parse(output);
        return acpiTables;
    });
}
exports.getAcpiTables = getAcpiTables;
/**
 * Get configuration files parsed by Augeas.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the configuration files data, or rejects with an error message.
 */
function getAugeas() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM augeas`);
        const augeas = JSON.parse(output);
        return augeas;
    });
}
exports.getAugeas = getAugeas;
/**
 * Get the line-delimited authorized_keys data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the authorized_keys data, or rejects with an error message.
 */
function getAuthorizedKeys() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM authorized_keys`);
        const authorizedKeys = JSON.parse(output);
        return authorizedKeys;
    });
}
exports.getAuthorizedKeys = getAuthorizedKeys;
/**
 * Get the block device data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the block device data, or rejects with an error message.
 */
function getBlockDevices() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM block_devices`);
        const blockDevices = JSON.parse(output);
        return blockDevices;
    });
}
exports.getBlockDevices = getBlockDevices;
/**
 * Get the cpu time data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the cpu time data, or rejects with an error message.
 */
function getCpuTime() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM cpu_time`);
        const cpuTimes = JSON.parse(output);
        return cpuTimes;
    });
}
exports.getCpuTime = getCpuTime;
/**
 * Get the crontab data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the crontab data, or rejects with an error message.
 */
function getCrontab() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM crontab`);
        const crontabs = JSON.parse(output);
        return crontabs;
    });
}
exports.getCrontab = getCrontab;
/**
 * Get the device file data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the device file data, or rejects with an error message.
 */
function getDeviceFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM device_file`);
        const deviceFiles = JSON.parse(output);
        return deviceFiles;
    });
}
exports.getDeviceFile = getDeviceFile;
/**
 * Get the device hash data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the device hash data, or rejects with an error message.
 */
function getDeviceHash() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM device_hash`);
        const deviceHashes = JSON.parse(output);
        return deviceHashes;
    });
}
exports.getDeviceHash = getDeviceHash;
/**
 * Get the device partitions data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the device partitions data, or rejects with an error message.
 */
function getDevicePartitions() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM device_partitions`);
        const devicePartitions = JSON.parse(output);
        return devicePartitions;
    });
}
exports.getDevicePartitions = getDevicePartitions;
/**
 * Get the disk encryption data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the disk encryption data, or rejects with an error message.
 */
function getDiskEncryption() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM disk_encryption`);
        const diskEncryption = JSON.parse(output);
        return diskEncryption;
    });
}
exports.getDiskEncryption = getDiskEncryption;
/**
 * Get the DNS resolvers used by the host.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the DNS resolvers data, or rejects with an error message.
 */
function getDnsResolvers() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM dns_resolvers`);
        const dnsResolvers = JSON.parse(output);
        return dnsResolvers;
    });
}
exports.getDnsResolvers = getDnsResolvers;
/**
 * Get the environment variables of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container environment variable data, or rejects with an error message.
 */
function getDockerContainerEnvs() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_container_envs`);
        const dockerContainerEnvs = JSON.parse(output);
        return dockerContainerEnvs;
    });
}
exports.getDockerContainerEnvs = getDockerContainerEnvs;
/**
 * Get the file system changes of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container file system change data, or rejects with an error message.
 */
function getDockerContainerFsChanges() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_container_fs_changes`);
        const dockerContainerFsChanges = JSON.parse(output);
        return dockerContainerFsChanges;
    });
}
exports.getDockerContainerFsChanges = getDockerContainerFsChanges;
/**
 * Get the labels of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container label data, or rejects with an error message.
 */
function getDockerContainerLabels() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_container_labels`);
        const dockerContainerLabels = JSON.parse(output);
        return dockerContainerLabels;
    });
}
exports.getDockerContainerLabels = getDockerContainerLabels;
/**
 * Get the mounts of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container mount data, or rejects with an error message.
 */
function getDockerContainerMounts() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_container_mounts`);
        const dockerContainerMounts = JSON.parse(output);
        return dockerContainerMounts;
    });
}
exports.getDockerContainerMounts = getDockerContainerMounts;
/**
 * Get the networks of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container network data, or rejects with an error message.
 */
function getDockerContainerNetworks() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_container_networks`);
        const dockerContainerNetworks = JSON.parse(output);
        return dockerContainerNetworks;
    });
}
exports.getDockerContainerNetworks = getDockerContainerNetworks;
/**
 * Get the ports of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container port data, or rejects with an error message.
 */
function getDockerContainerPorts() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_container_ports`);
        const dockerContainerPorts = JSON.parse(output);
        return dockerContainerPorts;
    });
}
exports.getDockerContainerPorts = getDockerContainerPorts;
/**
 * Get the processes of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container process data, or rejects with an error message.
 */
function getDockerContainerProcesses() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_container_processes`);
        const dockerContainerProcesses = JSON.parse(output);
        return dockerContainerProcesses;
    });
}
exports.getDockerContainerProcesses = getDockerContainerProcesses;
/**
 * Get the statistics of Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker container statistics data, or rejects with an error message.
 */
function getDockerContainerStats() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_container_stats`);
        const dockerContainerStats = JSON.parse(output);
        return dockerContainerStats;
    });
}
exports.getDockerContainerStats = getDockerContainerStats;
/**
 * Get the information about Docker containers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker containers data, or rejects with an error message.
 */
function getDockerContainers() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_containers`);
        const dockerContainers = JSON.parse(output);
        return dockerContainers;
    });
}
exports.getDockerContainers = getDockerContainers;
/**
 * Get the history information about Docker images.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker images history data, or rejects with an error message.
 */
function getDockerImageHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_image_history`);
        const dockerImageHistory = JSON.parse(output);
        return dockerImageHistory;
    });
}
exports.getDockerImageHistory = getDockerImageHistory;
/**
 * Get Docker image labels.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker image labels data, or rejects with an error message.
 */
function getDockerImageLabels() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_image_labels`);
        const dockerImageLabels = JSON.parse(output);
        return dockerImageLabels;
    });
}
exports.getDockerImageLabels = getDockerImageLabels;
/**
 * Get Docker image layers.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker image layers data, or rejects with an error message.
 */
function getDockerImageLayers() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_image_layers`);
        const dockerImageLayers = JSON.parse(output);
        return dockerImageLayers;
    });
}
exports.getDockerImageLayers = getDockerImageLayers;
/**
 * Get Docker images.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker images data, or rejects with an error message.
 */
function getDockerImages() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_images`);
        const dockerImages = JSON.parse(output);
        return dockerImages;
    });
}
exports.getDockerImages = getDockerImages;
/**
 * Get Docker system information.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker system information, or rejects with an error message.
 */
function getDockerInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_info`);
        const dockerInfo = JSON.parse(output);
        return dockerInfo;
    });
}
exports.getDockerInfo = getDockerInfo;
/**
 * Get Docker network labels.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker network labels, or rejects with an error message.
 */
function getDockerNetworkLabels() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_network_labels`);
        const dockerNetworkLabels = JSON.parse(output);
        return dockerNetworkLabels;
    });
}
exports.getDockerNetworkLabels = getDockerNetworkLabels;
/**
 * Get Docker networks information.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker networks information, or rejects with an error message.
 */
function getDockerNetworks() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_networks`);
        const dockerNetworks = JSON.parse(output);
        return dockerNetworks;
    });
}
exports.getDockerNetworks = getDockerNetworks;
/**
 * Get Docker version information.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker version information, or rejects with an error message.
 */
function getDockerVersion() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_version LIMIT 1`);
        const dockerVersion = JSON.parse(output)[0];
        return dockerVersion;
    });
}
exports.getDockerVersion = getDockerVersion;
/**
 * Get Docker volume labels.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker volume labels, or rejects with an error message.
 */
function getDockerVolumeLabels() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_volume_labels`);
        const dockerVolumeLabels = JSON.parse(output);
        return dockerVolumeLabels;
    });
}
exports.getDockerVolumeLabels = getDockerVolumeLabels;
/**
 * Get Docker volumes information.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the Docker volumes information, or rejects with an error message.
 */
function getDockerVolumes() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM docker_volumes`);
        const dockerVolumes = JSON.parse(output);
        return dockerVolumes;
    });
}
exports.getDockerVolumes = getDockerVolumes;
/**
 * Get the extended attributes for files.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the extended attributes for files, or rejects with an error message.
 */
function getExtendedAttributes() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM extended_attributes`);
        const extendedAttributes = JSON.parse(output);
        return extendedAttributes;
    });
}
exports.getExtendedAttributes = getExtendedAttributes;
/**
 * Get the time/action changes to files specified in configuration data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the time/action changes to files, or rejects with an error message.
 */
function getFileEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM file_events`);
        const fileEvents = JSON.parse(output);
        return fileEvents;
    });
}
exports.getFileEvents = getFileEvents;
/**
 * Get hardware (PCI/USB/HID) events from UDEV or IOKit.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the hardware events, or rejects with an error message.
 */
function getHardwareEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM hardware_events`);
        const hardwareEvents = JSON.parse(output);
        return hardwareEvents;
    });
}
exports.getHardwareEvents = getHardwareEvents;
/**
 * Get IPv6 configuration and stats of network interfaces.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the network interfaces' IPv6 configuration, or rejects with an error message.
 */
function getInterfaceIpv6() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM interface_ipv6`);
        const interfaceIpv6 = JSON.parse(output);
        return interfaceIpv6;
    });
}
exports.getInterfaceIpv6 = getInterfaceIpv6;
/**
 * Get a line-delimited known_hosts table.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the known_hosts data, or rejects with an error message.
 */
function getKnownHosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM known_hosts`);
        const knownHosts = JSON.parse(output);
        return knownHosts;
    });
}
exports.getKnownHosts = getKnownHosts;
/**
 * Get system logins and logouts.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the login and logout data, or rejects with an error message.
 */
function getLast() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM last`);
        const last = JSON.parse(output);
        return last;
    });
}
exports.getLast = getLast;
/**
 * Get system wide load averages.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the load averages data, or rejects with an error message.
 */
function getLoadAverage() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM load_average`);
        const loadAverage = JSON.parse(output);
        return loadAverage;
    });
}
exports.getLoadAverage = getLoadAverage;
/**
 * Get magic number recognition data.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the magic data, or rejects with an error message.
 */
function getMagic() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM magic`);
        const magic = JSON.parse(output);
        return magic;
    });
}
exports.getMagic = getMagic;
/**
 * Get data associated for address mapping of physical memory arrays.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the memory array mapped addresses data, or rejects with an error message.
 */
function getMemoryArrayMappedAddresses() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM memory_array_mapped_addresses`);
        const memoryArrayMappedAddresses = JSON.parse(output);
        return memoryArrayMappedAddresses;
    });
}
exports.getMemoryArrayMappedAddresses = getMemoryArrayMappedAddresses;
/**
 * Get data associated with collection of memory devices that operate to form a memory address.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the memory arrays data, or rejects with an error message.
 */
function getMemoryArrays() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM memory_arrays`);
        const memoryArrays = JSON.parse(output);
        return memoryArrays;
    });
}
exports.getMemoryArrays = getMemoryArrays;
/**
* Get data associated for address mapping of physical memory devices.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the memory device mapped addresses data, or rejects with an error message.
*/
function getMemoryDeviceMappedAddresses() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM memory_device_mapped_addresses`);
        const memoryDeviceMappedAddresses = JSON.parse(output);
        return memoryDeviceMappedAddresses;
    });
}
exports.getMemoryDeviceMappedAddresses = getMemoryDeviceMappedAddresses;
/**
* Get data associated with errors of a physical memory array.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the memory error info data, or rejects with an error message.
*/
function getMemoryErrorInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM memory_error_info`);
        const memoryErrorInfo = JSON.parse(output);
        return memoryErrorInfo;
    });
}
exports.getMemoryErrorInfo = getMemoryErrorInfo;
/**
* Get system mounted devices and filesystems (not process specific).
* Runs on MacOS and Linux.
* @return A Promise that resolves with the mounted devices and filesystems data, or rejects with an error message.
*/
function getMounts() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM mounts`);
        const mounts = JSON.parse(output);
        return mounts;
    });
}
exports.getMounts = getMounts;
/**
* Get OEM defined strings retrieved from SMBIOS.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the OEM strings data, or rejects with an error message.
*/
function getOemStrings() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM oem_strings`);
        const oemStrings = JSON.parse(output);
        return oemStrings;
    });
}
exports.getOemStrings = getOemStrings;
/**
* Get PCI devices active on the host system.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the PCI devices data, or rejects with an error message.
*/
function getPciDevices() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM pci_devices`);
        const pciDevices = JSON.parse(output);
        return pciDevices;
    });
}
exports.getPciDevices = getPciDevices;
/**
* Get a key/value table of environment variables for each process.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the process environment variables data, or rejects with an error message.
*/
function getProcessEnvs() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM process_envs`);
        const processEnvs = JSON.parse(output);
        return processEnvs;
    });
}
exports.getProcessEnvs = getProcessEnvs;
/**
* Track time/action process executions.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the process events data, or rejects with an error message.
*/
function getProcessEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM process_events`);
        const processEvents = JSON.parse(output);
        return processEvents;
    });
}
exports.getProcessEvents = getProcessEvents;
/**
* Get file descriptors for each process.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the process file descriptors data, or rejects with an error message.
*/
function getProcessOpenFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM process_open_files`);
        const processOpenFiles = JSON.parse(output);
        return processOpenFiles;
    });
}
exports.getProcessOpenFiles = getProcessOpenFiles;
/**
* Retrieve metrics from a Prometheus server.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the Prometheus metrics data, or rejects with an error message.
*/
function getPrometheusMetrics() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM prometheus_metrics`);
        const prometheusMetrics = JSON.parse(output);
        return prometheusMetrics;
    });
}
exports.getPrometheusMetrics = getPrometheusMetrics;
/**
* Get a line-delimited (command) table of per-user .*_history data.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the shell history data, or rejects with an error message.
*/
function getShellHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM shell_history`);
        const shellHistory = JSON.parse(output);
        return shellHistory;
    });
}
exports.getShellHistory = getShellHistory;
/**
* Get BIOS (DMI) structure common details and content.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the BIOS structure details and content, or rejects with an error message.
*/
function getSmbiosTables() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM smbios_tables`);
        const smbiosTables = JSON.parse(output);
        return smbiosTables;
    });
}
exports.getSmbiosTables = getSmbiosTables;
/**
* Track network socket opens and closes.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the socket events, or rejects with an error message.
*/
function getSocketEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM socket_events`);
        const socketEvents = JSON.parse(output);
        return socketEvents;
    });
}
exports.getSocketEvents = getSocketEvents;
/**
* Retrieve rules for running commands as other users via sudo.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the sudoers rules, or rejects with an error message.
*/
function getSudoers() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM sudoers`);
        const sudoers = JSON.parse(output);
        return sudoers;
    });
}
exports.getSudoers = getSudoers;
/**
* Retrieve suid binaries in common locations.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the suid binaries information, or rejects with an error message.
*/
function getSuidBin() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM suid_bin`);
        const suidBin = JSON.parse(output);
        return suidBin;
    });
}
exports.getSuidBin = getSuidBin;
/**
* Retrieve sysctl names, values, and settings information.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the sysctl names, values, and settings information, or rejects with an error message.
*/
function getSystemControls() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM system_controls`);
        const systemControls = JSON.parse(output);
        return systemControls;
    });
}
exports.getSystemControls = getSystemControls;
/**
* Retrieve system resource usage limits.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the system resource usage limits, or rejects with an error message.
*/
function getUlimitInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM ulimit_info`);
        const ulimitInfo = JSON.parse(output);
        return ulimitInfo;
    });
}
exports.getUlimitInfo = getUlimitInfo;
/**
* Retrieve USB devices that are actively plugged into the host system.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the USB devices, or rejects with an error message.
*/
function getUsbDevices() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM usb_devices`);
        const usbDevices = JSON.parse(output);
        return usbDevices;
    });
}
exports.getUsbDevices = getUsbDevices;
/**
 * Track user events from the audit framework.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the user events, or rejects with an error message.
 */
function getUserEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM user_events`);
        const userEvents = JSON.parse(output);
        return userEvents;
    });
}
exports.getUserEvents = getUserEvents;
// 🐧
/**
 * Track AppArmor events.
 * Runs on MacOS and Linux.
 * @return A Promise that resolves with the AppArmor events, or rejects with an error message.
 */
function getApparmorEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM apparmor_events`);
        const apparmorEvents = JSON.parse(output);
        return apparmorEvents;
    });
}
exports.getApparmorEvents = getApparmorEvents;
/**
* Track active AppArmor profiles.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the active AppArmor profiles, or rejects with an error message.
*/
function getApparmorProfiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM apparmor_profiles`);
        const apparmorProfiles = JSON.parse(output);
        return apparmorProfiles;
    });
}
exports.getApparmorProfiles = getApparmorProfiles;
/**
* Get the current list of APT repositories or software channels.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the list of APT repositories, or rejects with an error message.
*/
function getAptSources() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM apt_sources`);
        const aptSources = JSON.parse(output);
        return aptSources;
    });
}
exports.getAptSources = getAptSources;
/**
* Get the current list of BPF process events.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the list of BPF process events, or rejects with an error message.
*/
function getBpfProcessEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM bpf_process_events`);
        const bpfProcessEvents = JSON.parse(output);
        return bpfProcessEvents;
    });
}
exports.getBpfProcessEvents = getBpfProcessEvents;
/**
* Get the current list of BPF socket events.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the list of BPF socket events, or rejects with an error message.
*/
function getBpfSocketEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM bpf_socket_events`);
        const bpfSocketEvents = JSON.parse(output);
        return bpfSocketEvents;
    });
}
exports.getBpfSocketEvents = getBpfSocketEvents;
/**
* Get the current list of DEB packages.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the list of DEB packages, or rejects with an error message.
*/
function getDebPackages() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM deb_packages`);
        const debPackages = JSON.parse(output);
        return debPackages;
    });
}
exports.getDebPackages = getDebPackages;
/**
* Get the current list of iptables rules.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the list of iptables rules, or rejects with an error message.
*/
function getIptables() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM iptables`);
        const iptables = JSON.parse(output);
        return iptables;
    });
}
exports.getIptables = getIptables;
/**
* Get the current list of kernel keys.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the list of kernel keys, or rejects with an error message.
*/
function getKernelKeys() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM kernel_keys`);
        const kernelKeys = JSON.parse(output);
        return kernelKeys;
    });
}
exports.getKernelKeys = getKernelKeys;
/**
* Get the current list of kernel modules.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the list of kernel modules, or rejects with an error message.
*/
function getKernelModules() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM kernel_modules`);
        const kernelModules = JSON.parse(output);
        return kernelModules;
    });
}
exports.getKernelModules = getKernelModules;
/**
* Get the current list of LXD certificates.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the list of LXD certificates, or rejects with an error message.
*/
function getLxdCertificates() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM lxd_certificates`);
        const lxdCertificates = JSON.parse(output);
        return lxdCertificates;
    });
}
exports.getLxdCertificates = getLxdCertificates;
/**
* Get the current LXD cluster information.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the LXD cluster information, or rejects with an error message.
*/
function getLxdCluster() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM lxd_cluster`);
        const lxdCluster = JSON.parse(output);
        return lxdCluster;
    });
}
exports.getLxdCluster = getLxdCluster;
/**
* Get the current LXD cluster members information.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the LXD cluster members information, or rejects with an error message.
*/
function getLxdClusterMembers() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM lxd_cluster_members`);
        const lxdClusterMembers = JSON.parse(output);
        return lxdClusterMembers;
    });
}
exports.getLxdClusterMembers = getLxdClusterMembers;
/**
* Get the current LXD images information.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the LXD images information, or rejects with an error message.
*/
function getLxdImages() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM lxd_images`);
        const lxdImages = JSON.parse(output);
        return lxdImages;
    });
}
exports.getLxdImages = getLxdImages;
/**
* Get the current LXD instance configuration information.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the LXD instance configuration information, or rejects with an error message.
*/
function getLxdInstanceConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM lxd_instance_config`);
        const lxdInstanceConfig = JSON.parse(output);
        return lxdInstanceConfig;
    });
}
exports.getLxdInstanceConfig = getLxdInstanceConfig;
/**
* Get the current LXD instance devices information.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the LXD instance devices information, or rejects with an error message.
*/
function getLxdInstanceDevices() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM lxd_instance_devices`);
        const lxdInstanceDevices = JSON.parse(output);
        return lxdInstanceDevices;
    });
}
exports.getLxdInstanceDevices = getLxdInstanceDevices;
/**
* Get the current LXD instances information.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the LXD instances information, or rejects with an error message.
*/
function getLxdInstances() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM lxd_instances`);
        const lxdInstances = JSON.parse(output);
        return lxdInstances;
    });
}
exports.getLxdInstances = getLxdInstances;
/**
* Get the current LXD network information.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the LXD network information, or rejects with an error message.
*/
function getLxdNetworks() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM lxd_networks`);
        const lxdNetworks = JSON.parse(output);
        return lxdNetworks;
    });
}
exports.getLxdNetworks = getLxdNetworks;
/**
* Get the current LXD storage pool information.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the LXD storage pool information, or rejects with an error message.
*/
function getLxdStoragePools() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM lxd_storage_pools`);
        const lxdStoragePools = JSON.parse(output);
        return lxdStoragePools;
    });
}
exports.getLxdStoragePools = getLxdStoragePools;
/**
* Get the current Software RAID array settings.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the Software RAID array settings, or rejects with an error message.
*/
function getMdDevices() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM md_devices`);
        const mdDevices = JSON.parse(output);
        return mdDevices;
    });
}
exports.getMdDevices = getMdDevices;
/**
* Get the drive devices used for Software RAID.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the drive devices, or rejects with an error message.
*/
function getMdDrives() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM md_drives`);
        const mdDrives = JSON.parse(output);
        return mdDrives;
    });
}
exports.getMdDrives = getMdDrives;
/**
* Get the software RAID settings supported by the kernel.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the RAID settings, or rejects with an error message.
*/
function getMdPersonalities() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM md_personalities`);
        const mdPersonalities = JSON.parse(output);
        return mdPersonalities;
    });
}
exports.getMdPersonalities = getMdPersonalities;
/**
* Get main memory information in bytes.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the memory information, or rejects with an error message.
*/
function getMemoryInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM memory_info`);
        const memoryInfo = JSON.parse(output);
        return memoryInfo;
    });
}
exports.getMemoryInfo = getMemoryInfo;
/**
* Get the OS memory region map.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the memory map information, or rejects with an error message.
*/
function getMemoryMap() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM memory_map`);
        const memoryMap = JSON.parse(output);
        return memoryMap;
    });
}
exports.getMemoryMap = getMemoryMap;
/**
* Get various pieces of data stored in the model specific register per processor.
* Runs on MacOS and Linux.
* NOTE: the msr kernel module must be enabled, and osquery must be run as root.
* @return A Promise that resolves with the MSR data, or rejects with an error message.
*/
function getMsr() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM msr`);
        const msr = JSON.parse(output);
        return msr;
    });
}
exports.getMsr = getMsr;
/**
* Get a summary about portage configurations like keywords, mask and unmask.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the portage keywords data, or rejects with an error message.
*/
function getPortageKeywords() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM portage_keywords`);
        const portageKeywords = JSON.parse(output);
        return portageKeywords;
    });
}
exports.getPortageKeywords = getPortageKeywords;
/**
* Get a list of currently installed packages.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the portage packages data, or rejects with an error message.
*/
function getPortagePackages() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM portage_packages`);
        const portagePackages = JSON.parse(output);
        return portagePackages;
    });
}
exports.getPortagePackages = getPortagePackages;
/**
* Get a list of enabled portage USE values for specific package.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the portage use data, or rejects with an error message.
*/
function getPortageUse() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM portage_use`);
        const portageUse = JSON.parse(output);
        return portageUse;
    });
}
exports.getPortageUse = getPortageUse;
/**
* Get the File Integrity Monitor implementation using the audit service.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the process file events data, or rejects with an error message.
*/
function getProcessFileEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM process_file_events`);
        const processFileEvents = JSON.parse(output);
        return processFileEvents;
    });
}
exports.getProcessFileEvents = getProcessFileEvents;
/**
* Get Linux namespaces for processes running on the host system.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the process namespaces data, or rejects with an error message.
*/
function getProcessNamespaces() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM process_namespaces`);
        const processNamespaces = JSON.parse(output);
        return processNamespaces;
    });
}
exports.getProcessNamespaces = getProcessNamespaces;
/**
* Get pipes and partner processes for each process.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the process open pipes data, or rejects with an error message.
*/
function getProcessOpenPipes() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM process_open_pipes`);
        const processOpenPipes = JSON.parse(output);
        return processOpenPipes;
    });
}
exports.getProcessOpenPipes = getProcessOpenPipes;
/**
* Get information about RPM packages currently installed on the host system.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the RPM package files data, or rejects with an error message.
*/
function getRpmPackageFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM rpm_package_files`);
        const rpmPackageFiles = JSON.parse(output);
        return rpmPackageFiles;
    });
}
exports.getRpmPackageFiles = getRpmPackageFiles;
/**
* Get information about RPM packages currently installed on the host system.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the RPM packages data, or rejects with an error message.
*/
function getRpmPackages() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM rpm_packages`);
        const rpmPackages = JSON.parse(output);
        return rpmPackages;
    });
}
exports.getRpmPackages = getRpmPackages;
/**
* Get information about seccomp events.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the seccomp events data, or rejects with an error message.
*/
function getSeccompEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM seccomp_events`);
        const seccompEvents = JSON.parse(output);
        return seccompEvents;
    });
}
exports.getSeccompEvents = getSeccompEvents;
/**
* Get information about SELinux events.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the SELinux events data, or rejects with an error message.
*/
function getSelinuxEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM selinux_events`);
        const selinuxEvents = JSON.parse(output);
        return selinuxEvents;
    });
}
exports.getSelinuxEvents = getSelinuxEvents;
/**
* Get information about active SELinux settings.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the SELinux settings data, or rejects with an error message.
*/
function getSelinuxSettings() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM selinux_settings`);
        const selinuxSettings = JSON.parse(output);
        return selinuxSettings;
    });
}
exports.getSelinuxSettings = getSelinuxSettings;
/**
* Get local system users encrypted passwords and related information.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the users data, or rejects with an error message.
*/
function getShadow() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM shadow`);
        const shadow = JSON.parse(output);
        return shadow;
    });
}
exports.getShadow = getShadow;
/**
* Get information about OS shared memory regions.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the shared memory regions data, or rejects with an error message.
*/
function getSharedMemory() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM shared_memory`);
        const sharedMemory = JSON.parse(output);
        return sharedMemory;
    });
}
exports.getSharedMemory = getSharedMemory;
/**
* Get syslog events.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the syslog events data, or rejects with an error message.
*/
function getSyslogEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM syslog_events`);
        const syslogEvents = JSON.parse(output);
        return syslogEvents;
    });
}
exports.getSyslogEvents = getSyslogEvents;
/**
* Get systemd units.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the systemd units data, or rejects with an error message.
*/
function getSystemdUnits() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM systemd_units`);
        const systemdUnits = JSON.parse(output);
        return systemdUnits;
    });
}
exports.getSystemdUnits = getSystemdUnits;
/**
* Get Yum sources.
* Runs on MacOS and Linux.
* @return A Promise that resolves with the Yum sources data, or rejects with an error message.
*/
function getYumSources() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM yum_sources`);
        const yumSources = JSON.parse(output);
        return yumSources;
    });
}
exports.getYumSources = getYumSources;
// 🍎
/**
 * Get Account Policy Data.
 * Runs on MacOS.
 * @return A Promise that resolves with the Account Policy Data, or rejects with an error message.
 */
function getAccountPolicyData() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM account_policy_data`);
        const accountPolicyData = JSON.parse(output);
        return accountPolicyData;
    });
}
exports.getAccountPolicyData = getAccountPolicyData;
/**
* Get Active Directory Configuration.
* Runs on MacOS.
* @return A Promise that resolves with the Active Directory Configuration, or rejects with an error message.
*/
function getAdConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM ad_config`);
        const adConfig = JSON.parse(output);
        return adConfig;
    });
}
exports.getAdConfig = getAdConfig;
/**
* Get ALF details.
* Runs on MacOS.
* @return A Promise that resolves with the ALF details, or rejects with an error message.
*/
function getAlfDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM alf`);
        const alfDetails = JSON.parse(output);
        return alfDetails;
    });
}
exports.getAlfDetails = getAlfDetails;
/**
* Get ALF exceptions.
* Runs on MacOS.
* @return A Promise that resolves with the ALF exceptions, or rejects with an error message.
*/
function getAlfExceptions() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM alf_exceptions`);
        const alfExceptions = JSON.parse(output);
        return alfExceptions;
    });
}
exports.getAlfExceptions = getAlfExceptions;
/**
* Get ALF explicit authorizations.
* Runs on MacOS.
* @return A Promise that resolves with the ALF explicit authorizations, or rejects with an error message.
*/
function getAlfExplicitAuths() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM alf_explicit_auths`);
        const alfExplicitAuths = JSON.parse(output);
        return alfExplicitAuths;
    });
}
exports.getAlfExplicitAuths = getAlfExplicitAuths;
/**
* Get application schemes and their handlers.
* Runs on MacOS.
* @return A Promise that resolves with the application schemes and handlers, or rejects with an error message.
*/
function getAppSchemes() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM app_schemes`);
        const appSchemes = JSON.parse(output);
        return appSchemes;
    });
}
exports.getAppSchemes = getAppSchemes;
/**
* Get information about macOS applications installed in known search paths (e.g., /Applications).
* Runs on MacOS.
* @return A Promise that resolves with the application information, or rejects with an error message.
*/
function getApps() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM apps`);
        const apps = JSON.parse(output);
        return apps;
    });
}
exports.getApps = getApps;
/**
* Get information about system events from the Apple System Log data structure.
* Runs on MacOS.
* @return A Promise that resolves with the system event information, or rejects with an error message.
*/
function getAsl() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM asl`);
        const asl = JSON.parse(output);
        return asl;
    });
}
exports.getAsl = getAsl;
/**
* Get information about macOS Authorization mechanisms database.
* Runs on MacOS.
* @return A Promise that resolves with the authorization mechanisms information, or rejects with an error message.
*/
function getAuthorizationMechanisms() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM authorization_mechanisms`);
        const authorizationMechanisms = JSON.parse(output);
        return authorizationMechanisms;
    });
}
exports.getAuthorizationMechanisms = getAuthorizationMechanisms;
/**
* Get information about macOS Authorization rights database.
* Runs on MacOS.
* @return A Promise that resolves with the authorizations information, or rejects with an error message.
*/
function getAuthorizations() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM authorizations`);
        const authorizations = JSON.parse(output);
        return authorizations;
    });
}
exports.getAuthorizations = getAuthorizations;
/**
* Get information about the internal battery of a Macbook.
* Runs on MacOS.
* @return A Promise that resolves with the battery information, or rejects with an error message.
*/
function getBatteryInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM battery`);
        const batteryInfo = JSON.parse(output);
        return batteryInfo;
    });
}
exports.getBatteryInfo = getBatteryInfo;
/**
* Get all C/NPAPI browser plugin details for all users.
* Runs on MacOS.
* @return A Promise that resolves with the browser plugin information, or rejects with an error message.
*/
function getBrowserPluginInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM browser_plugins`);
        const browserPluginInfo = JSON.parse(output);
        return browserPluginInfo;
    });
}
exports.getBrowserPluginInfo = getBrowserPluginInfo;
/**
* Get application, system, and mobile app crash logs.
* Runs on MacOS.
* @return A Promise that resolves with the crash logs information, or rejects with an error message.
*/
function getCrashLogsInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM crashes`);
        const crashLogsInfo = JSON.parse(output);
        return crashLogsInfo;
    });
}
exports.getCrashLogsInfo = getCrashLogsInfo;
/**
* Get all configured printers.
* Runs on MacOS.
* @return A Promise that resolves with the printers information, or rejects with an error message.
*/
function getConfiguredPrinters() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM cups_destinations`);
        const printersInfo = JSON.parse(output);
        return printersInfo;
    });
}
exports.getConfiguredPrinters = getConfiguredPrinters;
/**
* Get all completed print jobs.
* Runs on MacOS.
* @return A Promise that resolves with the print jobs information, or rejects with an error message.
*/
function getCompletedPrintJobs() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM cups_jobs`);
        const printJobsInfo = JSON.parse(output);
        return printJobsInfo;
    });
}
exports.getCompletedPrintJobs = getCompletedPrintJobs;
/**
* Get the list of discovered firmware versions.
* Runs on MacOS.
* @return A Promise that resolves with the firmware versions information, or rejects with an error message.
*/
function getFirmwareVersions() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM device_firmware`);
        const firmwareInfo = JSON.parse(output);
        return firmwareInfo;
    });
}
exports.getFirmwareVersions = getFirmwareVersions;
/**
* Track DMG disk image events (appearance/disappearance) when opened.
* Runs on MacOS.
* @return A Promise that resolves with the disk events information, or rejects with an error message.
*/
function getDiskEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM disk_events`);
        const diskEvents = JSON.parse(output);
        return diskEvents;
    });
}
exports.getDiskEvents = getDiskEvents;
/**
* Process execution events from EndpointSecurity.
* Runs on MacOS.
* @return A Promise that resolves with the process execution events information, or rejects with an error message.
*/
function getEsProcessEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM es_process_events`);
        const esProcessEvents = JSON.parse(output);
        return esProcessEvents;
    });
}
exports.getEsProcessEvents = getEsProcessEvents;
/**
* Process execution file events from EndpointSecurity.
* Runs on MacOS.
* @return A Promise that resolves with the process execution file events information, or rejects with an error message.
*/
function getEsProcessFileEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM es_process_file_events`);
        const esProcessFileEvents = JSON.parse(output);
        return esProcessFileEvents;
    });
}
exports.getEsProcessFileEvents = getEsProcessFileEvents;
/**
* Get information about installed event taps.
* Runs on MacOS.
* @return A Promise that resolves with the event taps information, or rejects with an error message.
*/
function getEventTaps() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM event_taps`);
        const eventTaps = JSON.parse(output);
        return eventTaps;
    });
}
exports.getEventTaps = getEventTaps;
/**
* Get information about fan speeds.
* Runs on MacOS.
* @return A Promise that resolves with the fan speeds information, or rejects with an error message.
*/
function getFanSpeedSensors() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM fan_speed_sensors`);
        const fanSpeedSensors = JSON.parse(output);
        return fanSpeedSensors;
    });
}
exports.getFanSpeedSensors = getFanSpeedSensors;
/**
* Get information about macOS Gatekeeper.
* Runs on MacOS.
* @return A Promise that resolves with the Gatekeeper information, or rejects with an error message.
*/
function getGatekeeperInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM gatekeeper`);
        const gatekeeperInfo = JSON.parse(output)[0];
        return gatekeeperInfo;
    });
}
exports.getGatekeeperInfo = getGatekeeperInfo;
/**
* Get a list of apps a user has allowed to run.
* Runs on MacOS.
* @return A Promise that resolves with an array of GatekeeperApprovedApps, or rejects with an error message.
*/
function getGatekeeperApprovedApps() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM gatekeeper_approved_apps`);
        const gatekeeperApprovedApps = JSON.parse(output);
        return gatekeeperApprovedApps;
    });
}
exports.getGatekeeperApprovedApps = getGatekeeperApprovedApps;
/**
* Get a list of the installed homebrew packages.
* Runs on MacOS.
* @return A Promise that resolves with an array of HomebrewPackages, or rejects with an error message.
*/
function getHomebrewPackages() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM homebrew_packages`);
        const homebrewPackages = JSON.parse(output);
        return homebrewPackages;
    });
}
exports.getHomebrewPackages = getHomebrewPackages;
/**
* Get information about the Apple iBridge hardware controller.
* Runs on MacOS.
* @return A Promise that resolves with an object of IBridgeInfo, or rejects with an error message.
*/
function getIBridgeInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM ibridge_info`);
        const ibridgeInfo = JSON.parse(output)[0];
        return ibridgeInfo;
    });
}
exports.getIBridgeInfo = getIBridgeInfo;
/**
* Get information about the IOKit registry matching the DeviceTree plane.
* Runs on MacOS.
* @return A Promise that resolves with an array of IOKitDeviceTree objects, or rejects with an error message.
*/
function getIOKitDeviceTree() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM iokit_devicetree`);
        const iokitDeviceTree = JSON.parse(output);
        return iokitDeviceTree;
    });
}
exports.getIOKitDeviceTree = getIOKitDeviceTree;
/**
* Get information about the full IOKit registry without selecting a plane.
* Runs on MacOS.
* @return A Promise that resolves with an array of IOKitRegistry objects, or rejects with an error message.
*/
function getIOKitRegistry() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM iokit_registry`);
        const iokitRegistry = JSON.parse(output);
        return iokitRegistry;
    });
}
exports.getIOKitRegistry = getIOKitRegistry;
/**
* Get information about macOS's kernel extensions.
* Runs on MacOS.
* @return A Promise that resolves with an array of KernelExtensions objects, or rejects with an error message.
*/
function getKernelExtensions() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM kernel_extensions`);
        const kernelExtensions = JSON.parse(output);
        return kernelExtensions;
    });
}
exports.getKernelExtensions = getKernelExtensions;
/**
* Get system kernel panic logs.
* Runs on MacOS.
* @return A Promise that resolves with an array of KernelPanics objects, or rejects with an error message.
*/
function getKernelPanics() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM kernel_panics`);
        const kernelPanics = JSON.parse(output);
        return kernelPanics;
    });
}
exports.getKernelPanics = getKernelPanics;
/**
* Get applications that have ACL entries in the keychain.
* Runs on MacOS.
* @return A Promise that resolves with an array of KeychainAcls objects, or rejects with an error message.
*/
function getKeychainAcls() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM keychain_acls`);
        const keychainAcls = JSON.parse(output);
        return keychainAcls;
    });
}
exports.getKeychainAcls = getKeychainAcls;
/**
* Get generic details about keychain items.
* Runs on MacOS.
* @return A Promise that resolves with an array of KeychainItems objects, or rejects with an error message.
*/
function getKeychainItems() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM keychain_items`);
        const keychainItems = JSON.parse(output);
        return keychainItems;
    });
}
exports.getKeychainItems = getKeychainItems;
/**
 * Get information about LaunchAgents and LaunchDaemons from default search paths.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of Launchd objects, or rejects with an error message.
 */
function getLaunchd() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM launchd`);
        const launchd = JSON.parse(output);
        return launchd;
    });
}
exports.getLaunchd = getLaunchd;
/**
* Get override keys, per user, for LaunchDaemons and Agents.
* Runs on MacOS.
* @return A Promise that resolves with an array of LaunchdOverrides objects, or rejects with an error message.
*/
function getLaunchdOverrides() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM launchd_overrides`);
        const launchdOverrides = JSON.parse(output);
        return launchdOverrides;
    });
}
exports.getLaunchdOverrides = getLaunchdOverrides;
/**
 * Get the status of the Location Services feature of the OS.
 * Runs on MacOS.
 * @return A Promise that resolves with a LocationServices object, or rejects with an error message.
 */
function getLocationServices() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM location_services`);
        const locationServices = JSON.parse(output);
        return locationServices;
    });
}
exports.getLocationServices = getLocationServices;
/**
* Get the managed configuration policies from AD, MDM, MCX, etc.
* Runs on MacOS.
* @return A Promise that resolves with an array of ManagedPolicies objects, or rejects with an error message.
*/
function getManagedPolicies() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM managed_policies`);
        const managedPolicies = JSON.parse(output);
        return managedPolicies;
    });
}
exports.getManagedPolicies = getManagedPolicies;
/**
* Run searches against the spotlight database.
* Runs on MacOS.
* @param query The query to run against the spotlight database.
* @return A Promise that resolves with an array of Mdfind objects, or rejects with an error message.
*/
function getMdfindResults(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM mdfind WHERE query='${query}'`);
        const mdfindResults = JSON.parse(output);
        return mdfindResults;
    });
}
exports.getMdfindResults = getMdfindResults;
/**
* Query file metadata in the Spotlight database.
* Runs on MacOS.
* @param path The path of the file to query.
* @return A Promise that resolves with an array of Mdls objects, or rejects with an error message.
*/
function getMdlsResults(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM mdls WHERE path='${path}'`);
        const mdlsResults = JSON.parse(output);
        return mdlsResults;
    });
}
exports.getMdlsResults = getMdlsResults;
/**
* Retrieve NFS shares exported by the host.
* Runs on MacOS.
* @return A Promise that resolves with an array of NfsShares objects, or rejects with an error message.
*/
function getNfsSharesResults() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM nfs_shares`);
        const nfsSharesResults = JSON.parse(output);
        return nfsSharesResults;
    });
}
exports.getNfsSharesResults = getNfsSharesResults;
/**
* Retrieve Apple NVRAM variable listing.
* Runs on MacOS.
* @return A Promise that resolves with an array of Nvram objects, or rejects with an error message.
*/
function getNvramResults() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM nvram`);
        const nvramResults = JSON.parse(output);
        return nvramResults;
    });
}
exports.getNvramResults = getNvramResults;
/**
 * Retirieve package bill of materials (BOM) file list.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of PackageBom objects, or rejects with an error message.
 * */
function getPackageBomResults() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM package_bom`);
        const packageBomResults = JSON.parse(output);
        return packageBomResults;
    });
}
exports.getPackageBomResults = getPackageBomResults;
/**
 * Retirieve package install history.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of PackageInstallHistory objects, or rejects with an error message.
 * */
function getPackageInstallHistory() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM package_install_history`);
        const packageInstallHistory = JSON.parse(output);
        return packageInstallHistory;
    });
}
exports.getPackageInstallHistory = getPackageInstallHistory;
/**
 * Retirievea package receipts.
 * Runs on MacOS.
 * @return A Promise that resolves with an array of PackageReceipt objects, or rejects with an error message.
 * */
function getPackageReceipts() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM package_receipts`);
        const packageReceipts = JSON.parse(output);
        return packageReceipts;
    });
}
exports.getPackageReceipts = getPackageReceipts;
/**
* Retrieves password policies for macOS.
* Runs on MacOS.
* @return A Promise that resolves with an array of PasswordPolicy objects, or rejects with an error message.
*/
function getPasswordPolicies() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM password_policy`);
        const passwordPolicies = JSON.parse(output);
        return passwordPolicies;
    });
}
exports.getPasswordPolicies = getPasswordPolicies;
/**
* Reads and parses a plist file.
* Runs on MacOS.
* @param path The path to the plist file.
* @return A Promise that resolves with an array of PlistEntry objects, or rejects with an error message.
*/
function getPlist(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM plist WHERE path = '${path}'`);
        const plistEntries = JSON.parse(output);
        return plistEntries;
    });
}
exports.getPlist = getPlist;
/**
 * Retrieves Power Sensor information.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of PowerSensor objects, or rejects with an error message.
 */
function getPowerSensors() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM power_sensors`);
        const powerSensors = JSON.parse(output);
        return powerSensors;
    });
}
exports.getPowerSensors = getPowerSensors;
/**
 * Retrieves Preferences information.
 * Runs on MacOS.
 * @returns A Promise that resolves with Preferences, or rejects with an error message.
 */
function getPreferences() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM preferences`);
        const preferences = JSON.parse(output);
        return preferences;
    });
}
exports.getPreferences = getPreferences;
/**
 * Retrieves QuickLook cache information.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of QuickLookCache objects, or rejects with an error message.
 */
function getQuickLookCache() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM quicklook_cache`);
        const quickLookCache = JSON.parse(output);
        return quickLookCache;
    });
}
exports.getQuickLookCache = getQuickLookCache;
/**
 * Retrieves running apps information.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of RunningApps objects, or rejects with an error message.
 */
function getRunningApps() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM running_apps`);
        const runningApps = JSON.parse(output);
        return runningApps;
    });
}
exports.getRunningApps = getRunningApps;
/**
 * Retrieves Safari extensions information.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of SafariExtensions objects, or rejects with an error message.
 */
function getSafariExtensions() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM safari_extensions`);
        const safariExtensions = JSON.parse(output);
        return safariExtensions;
    });
}
exports.getSafariExtensions = getSafariExtensions;
/**
 * Retrieves macOS application sandboxes container details.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of Sandboxes objects, or rejects with an error message.
 */
function getSandboxes() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM sandboxes`);
        const sandboxes = JSON.parse(output);
        return sandboxes;
    });
}
exports.getSandboxes = getSandboxes;
/**
 * Retrieves macOS screen lock status.
 * Runs on MacOS.
 * @returns A Promise that resolves with the ScreenLock object, or rejects with an error message.
 */
function getScreenlock() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM screen_lock`);
        const screenLock = JSON.parse(output);
        return screenLock;
    });
}
exports.getScreenlock = getScreenlock;
/**
 * Retrieves folders available to others via SMB or AFP.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of SharedFolder objects, or rejects with an error message.
 */
function getSharedFolders() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM shared_folders`);
        const sharedFolders = JSON.parse(output);
        return sharedFolders;
    });
}
exports.getSharedFolders = getSharedFolders;
/**
 * Retrieves macOS sharing preferences.
 * Runs on MacOS.
 * @returns A Promise that resolves with a SharingPreferences object, or rejects with an error message.
 */
function getSharingPreferences() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM sharing_preferences`);
        const sharingPreferences = JSON.parse(output);
        return sharingPreferences;
    });
}
exports.getSharingPreferences = getSharingPreferences;
/**
 * Retrieves file (executable, bundle, installer, disk) code signing status.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of Signature objects, or rejects with an error message.
 */
function getSignature() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM signature`);
        const signature = JSON.parse(output);
        return signature;
    });
}
exports.getSignature = getSignature;
/**
 * Retrieves Apple's System Integrity Protection (rootless) status.
 * Runs on MacOS.
 * @returns A Promise that resolves with the SipConfig object, or rejects with an error message.
 */
function getSipConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM sip_config`);
        const sipConfig = JSON.parse(output);
        return sipConfig;
    });
}
exports.getSipConfig = getSipConfig;
/**
 * Retrieves macOS System Management Controller (SMC) keys.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of SmcKeys objects, or rejects with an error message.
 */
function getSMCKeys() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM smc_keys`);
        const smcKeys = JSON.parse(output);
        return smcKeys;
    });
}
exports.getSMCKeys = getSMCKeys;
/**
 * Retrieves macOS (>= 10.15) system extension table.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of SystemExtensions objects, or rejects with an error message.
 */
function getSystemExtensions() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM system_extensions`);
        const systemExtensions = JSON.parse(output);
        return systemExtensions;
    });
}
exports.getSystemExtensions = getSystemExtensions;
/**
 * Retrieves temperature sensor information.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of TemperatureSensor objects, or rejects with an error message.
 */
function getTemperatureSensors() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM temperature_sensors`);
        const temperatureSensors = JSON.parse(output);
        return temperatureSensors;
    });
}
exports.getTemperatureSensors = getTemperatureSensors;
/**
 * Retrieves backups to drives using TimeMachine.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of TimeMachineBackup objects, or rejects with an error message.
 */
function getTimeMachineBackups() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM time_machine_backups`);
        const timeMachineBackups = JSON.parse(output);
        return timeMachineBackups;
    });
}
exports.getTimeMachineBackups = getTimeMachineBackups;
/**
 * Retrieves backup destinations to drives using TimeMachine.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of TimeMachineDestinations objects, or rejects with an error message.
 */
function getTimeMachineDestinations() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM time_machine_destinations`);
        const timeMachineDestinations = JSON.parse(output);
        return timeMachineDestinations;
    });
}
exports.getTimeMachineDestinations = getTimeMachineDestinations;
/**
 * Retrieves unified logging information.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of UnifiedLog objects, or rejects with an error message.
 */
function getUnifiedLog() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM unified_log`);
        const unifiedLog = JSON.parse(output);
        return unifiedLog;
    });
}
exports.getUnifiedLog = getUnifiedLog;
/**
 * Retrieves user interaction events from macOS' event tapping framework.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of UserInteractionEvents objects, or rejects with an error message.
 */
function getUserInteractionEvents() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM user_interaction_events`);
        const userInteractionEvents = JSON.parse(output);
        return userInteractionEvents;
    });
}
exports.getUserInteractionEvents = getUserInteractionEvents;
/**
 * Retrieves Darwin Virtual Memory statistics.
 * Runs on MacOS.
 * @returns A Promise that resolves with VirtualMemoryInfo object, or rejects with an error message.
 */
function getVirtualMemoryInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM virtual_memory_info`);
        const virtualMemoryInfo = JSON.parse(output);
        return virtualMemoryInfo;
    });
}
exports.getVirtualMemoryInfo = getVirtualMemoryInfo;
/**
 * Retrieves macOS known/remembered Wi-Fi networks list.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of WifiNetworks objects, or rejects with an error message.
 */
function getWifiNetworks() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM wifi_networks`);
        const wifiNetworks = JSON.parse(output);
        return wifiNetworks;
    });
}
exports.getWifiNetworks = getWifiNetworks;
/**
 * Retrieves macOS current WiFi status.
 * Runs on MacOS.
 * @returns A Promise that resolves with WifiStatus, or rejects with an error message.
 */
function getWifiStatus() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM wifi_status`);
        const wifiStatus = JSON.parse(output);
        return wifiStatus;
    });
}
exports.getWifiStatus = getWifiStatus;
/**
 * Retrieves macOS nearby WiFi networks.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of WifiSurvey objects, or rejects with an error message.
 */
function getWifiSurvey() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM wifi_survey`);
        const wifiSurvey = JSON.parse(output);
        return wifiSurvey;
    });
}
exports.getWifiSurvey = getWifiSurvey;
/**
 * Retrieves machine's XProtect entries.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of XProtectEntries objects, or rejects with an error message.
 */
function getXProtectEntries() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM xprotect_entries`);
        const xProtectEntries = JSON.parse(output);
        return xProtectEntries;
    });
}
exports.getXProtectEntries = getXProtectEntries;
/**
 * Retrieves machine's XProtectMeta.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of XProtectMeta objects, or rejects with an error message.
 */
function getXProtectMeta() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM xprotect_meta`);
        const xProtectMeta = JSON.parse(output);
        return xProtectMeta;
    });
}
exports.getXProtectMeta = getXProtectMeta;
/**
 * Retrieves machine's XProtectReports.
 * Runs on MacOS.
 * @returns A Promise that resolves with an array of XProtectReports objects, or rejects with an error message.
 */
function getXProtectReports() {
    return __awaiter(this, void 0, void 0, function* () {
        const output = yield runOsquery(`SELECT * FROM xprotect_reports`);
        const xProtectReports = JSON.parse(output);
        return xProtectReports;
    });
}
exports.getXProtectReports = getXProtectReports;
