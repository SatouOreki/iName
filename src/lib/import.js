import { readFileSync } from "fs";
import { jsonc as JSONC } from 'jsonc';
import { join } from "path";

/**
 * @param {String} moduleName File path
 * @param {String} moduleType File type
 */

export default function REQUIRE(moduleName, moduleType = "JSON") {
    let data = readFileSync(join(__dirname, "./src", moduleName)).toString();

    if (moduleType.toLowerCase() === "json") data = JSON.parse(data);
    if (moduleType.toLowerCase() === "jsonc") data = JSONC.parse(data);

    return data;
};