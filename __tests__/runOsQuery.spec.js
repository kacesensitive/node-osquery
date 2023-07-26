"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const child_process_1 = require("child_process");
const os = __importStar(require("os"));
const runOSQuery_1 = require("../src/runOSQuery");
// Mock child_process.exec
jest.mock('child_process', () => ({
    exec: jest.fn((command, callback) => callback(null, 'command output', ''))
}));
// Mock os.type
jest.mock('os', () => ({
    type: jest.fn(),
}));
describe('runOsquery', () => {
    it('resolves with command output on success', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockExec = child_process_1.exec;
        const mockOsType = os.type;
        mockOsType.mockReturnValue('Linux');
        yield expect((0, runOSQuery_1.runOsquery)('select * from users', [runOSQuery_1.OsType.LINUX])).resolves.toEqual('command output');
        expect(mockExec).toHaveBeenCalledWith('osqueryi --json "select * from users"', expect.any(Function));
    }));
    it('rejects with error on command failure', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockExec = child_process_1.exec;
        const mockOsType = os.type;
        mockOsType.mockReturnValue('Linux');
        //@ts-ignore
        mockExec.mockImplementationOnce((command, callback) => callback(new Error('Command failed'), '', 'stderr message'));
        yield expect((0, runOSQuery_1.runOsquery)('select * from users', [runOSQuery_1.OsType.LINUX])).rejects.toEqual('Execution error: Command failed');
    }));
    it('rejects with error on unsupported OS', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockOsType = os.type;
        mockOsType.mockReturnValue('Windows_NT');
        yield expect((0, runOSQuery_1.runOsquery)('select * from users', [runOSQuery_1.OsType.LINUX])).rejects.toEqual('Unsupported operating system: windows_nt');
    }));
});
