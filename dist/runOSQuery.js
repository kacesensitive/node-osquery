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
Object.defineProperty(exports, "__esModule", { value: true });
exports.runOsquery = exports.OsType = void 0;
const child_process_1 = require("child_process");
const os = __importStar(require("os"));
var OsType;
(function (OsType) {
    OsType["LINUX"] = "linux";
    OsType["DARWIN"] = "darwin";
    OsType["WINDOWS_NT"] = "windows_nt";
})(OsType || (exports.OsType = OsType = {}));
/**
 * Executes an osquery command and returns the output.
 * @param query The osquery command to be executed.
 * @param osTypes The list of operating systems on which the command can be executed.
 * @return A Promise that resolves with the command output, or rejects with an error message.
 */
function runOsquery(query, osTypes) {
    return new Promise((resolve, reject) => {
        const currentOsType = os.type().toLowerCase();
        if (!osTypes.includes(currentOsType)) {
            reject(`Unsupported operating system: ${currentOsType}`);
            return;
        }
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
