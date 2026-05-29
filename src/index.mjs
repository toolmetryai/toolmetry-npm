/**
 * toolmetry — ESM Entry Point
 * Comprehensive Developer Tools Library
 * Built by ToolmetryAI | https://toolmetryai.com
 *
 * @module toolmetry
 * @version 3.1.0
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cjs = require('./index.js');

// Re-export everything as named ESM exports
export const base64 = cjs.base64;
export const base64Encode = cjs.base64Encode;
export const base64Decode = cjs.base64Decode;
export const base64EncodeURL = cjs.base64EncodeURL;
export const base64DecodeURL = cjs.base64DecodeURL;
export const base64IsValid = cjs.base64IsValid;
export const base64EncodeBuffer = cjs.base64EncodeBuffer;
export const base64DecodeToBuffer = cjs.base64DecodeToBuffer;

export const url = cjs.url;
export const urlEncode = cjs.urlEncode;
export const urlDecode = cjs.urlDecode;
export const urlBuildQuery = cjs.urlBuildQuery;
export const urlParseQuery = cjs.urlParseQuery;

export const hash = cjs.hash;
export const hashGenerate = cjs.hashGenerate;
export const hashAsync = cjs.hashAsync;
export const hmacGenerate = cjs.hmacGenerate;
export const hashAll = cjs.hashAll;
export const ALGORITHMS = cjs.ALGORITHMS;

export const jwt = cjs.jwt;
export const jwtDecode = cjs.jwtDecode;
export const jwtDecodeHeader = cjs.jwtDecodeHeader;
export const jwtDecodePayload = cjs.jwtDecodePayload;
export const jwtIsExpired = cjs.jwtIsExpired;
export const jwtIsValidFormat = cjs.jwtIsValidFormat;
export const jwtGetAlgorithm = cjs.jwtGetAlgorithm;
export const jwtTimeUntilExpiry = cjs.jwtTimeUntilExpiry;

export const uuid = cjs.uuid;
export const uuidV4 = cjs.uuidV4;
export const uuidV4Short = cjs.uuidV4Short;
export const uuidV4Batch = cjs.uuidV4Batch;
export const uuidIsValid = cjs.uuidIsValid;
export const uuidGetVersion = cjs.uuidGetVersion;
export const uuidNil = cjs.uuidNil;
export const uuidIsNil = cjs.uuidIsNil;

export const encrypt = cjs.encrypt;
export const aesEncrypt = cjs.aesEncrypt;
export const aesDecrypt = cjs.aesDecrypt;
export const aesEncryptAsync = cjs.aesEncryptAsync;
export const aesDecryptAsync = cjs.aesDecryptAsync;

export const random = cjs.random;
export const randomString = cjs.randomString;
export const randomInt = cjs.randomInt;
export const randomHex = cjs.randomHex;
export const randomAlphanumeric = cjs.randomAlphanumeric;
export const randomPick = cjs.randomPick;
export const randomShuffle = cjs.randomShuffle;
export const randomBoolean = cjs.randomBoolean;
export const randomFloat = cjs.randomFloat;

export const color = cjs.color;
export const colorConvert = cjs.colorConvert;
export const colorIsValidHex = cjs.colorIsValidHex;
export const colorLighten = cjs.colorLighten;
export const colorDarken = cjs.colorDarken;
export const hexToRgb = cjs.hexToRgb;
export const rgbToHex = cjs.rgbToHex;
export const rgbToHsl = cjs.rgbToHsl;
export const hslToRgb = cjs.hslToRgb;
export const hexToHsl = cjs.hexToHsl;
export const hslToHex = cjs.hslToHex;

export const htmlEntity = cjs.htmlEntity;
export const htmlEntityEncode = cjs.htmlEntityEncode;
export const htmlEntityDecode = cjs.htmlEntityDecode;
export const htmlEntityEncodeAll = cjs.htmlEntityEncodeAll;
export const htmlEntityEncodeChars = cjs.htmlEntityEncodeChars;

export const numberBase = cjs.numberBase;
export const baseConvert = cjs.baseConvert;
export const toBinary = cjs.toBinary;
export const toOctal = cjs.toOctal;
export const toHex = cjs.toHex;
export const fromBinary = cjs.fromBinary;
export const fromHex = cjs.fromHex;
export const convertAllBases = cjs.convertAllBases;

export const text = cjs.text;
export const toCamelCase = cjs.toCamelCase;
export const toPascalCase = cjs.toPascalCase;
export const toSnakeCase = cjs.toSnakeCase;
export const toKebabCase = cjs.toKebabCase;
export const toConstantCase = cjs.toConstantCase;
export const slugify = cjs.slugify;
export const wordCount = cjs.wordCount;
export const charCount = cjs.charCount;
export const reverse = cjs.reverse;
export const truncate = cjs.truncate;
export const removeExtraWhitespace = cjs.removeExtraWhitespace;
export const removeLineBreaks = cjs.removeLineBreaks;
export const escapeRegex = cjs.escapeRegex;

export const json = cjs.json;
export const jsonFormat = cjs.jsonFormat;
export const jsonMinify = cjs.jsonMinify;
export const jsonValidate = cjs.jsonValidate;
export const jsonGetType = cjs.jsonGetType;
export const jsonStats = cjs.jsonStats;
export const jsonFlatten = cjs.jsonFlatten;

export const password = cjs.password;
export const passwordGenerate = cjs.passwordGenerate;
export const passwordPassphrase = cjs.passwordPassphrase;
export const passwordStrength = cjs.passwordStrength;
export const passwordGenerateBatch = cjs.passwordGenerateBatch;

export const morse = cjs.morse;
export const morseEncode = cjs.morseEncode;
export const morseDecode = cjs.morseDecode;
export const morseIsValid = cjs.morseIsValid;

export const roman = cjs.roman;
export const romanToRoman = cjs.romanToRoman;
export const romanFromRoman = cjs.romanFromRoman;
export const romanIsValid = cjs.romanIsValid;

export const cron = cjs.cron;
export const cronValidate = cjs.cronValidate;
export const cronDescribe = cjs.cronDescribe;

export const diff = cjs.diff;
export const diffCheck = cjs.diffCheck;
export const diffUnified = cjs.diffUnified;
export const diffIsSame = cjs.diffIsSame;

export const lorem = cjs.lorem;
export const loremWords = cjs.loremWords;
export const loremSentences = cjs.loremSentences;
export const loremParagraphs = cjs.loremParagraphs;

// Default export — full namespace
export default cjs;
