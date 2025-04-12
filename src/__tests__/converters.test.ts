import { base64Encode, base64Decode } from '../utils/converters';

describe('Base64 Operations', () => {
  test('base64Encode should correctly encode strings', () => {
    expect(base64Encode('Hello, World!')).toBe('SGVsbG8sIFdvcmxkIQ==');
    expect(base64Encode('')).toBe('');
  });

  test('base64Encode should throw error for invalid input', () => {
    const invalidInput = String.fromCharCode(0xFFFF);
    expect(() => base64Encode(invalidInput)).toThrow();
  });

  test('base64Decode should correctly decode strings', () => {
    expect(base64Decode('SGVsbG8sIFdvcmxkIQ==')).toBe('Hello, World!');
    expect(base64Decode('')).toBe('');
  });

  test('base64Decode should throw error for invalid base64', () => {
    expect(() => base64Decode('Invalid base64!')).toThrow();
  });
});