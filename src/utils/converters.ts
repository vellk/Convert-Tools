export const base64Encode = (input: string): string => {
  try {
    return btoa(input);
  } catch (error) {
    throw new Error("Invalid input for Base64 encoding");
  }
};

export const base64Decode = (input: string): string => {
  try {
    return atob(input);
  } catch (error) {
    throw new Error("Invalid Base64 string");
  }
};

export const convertToUpperCase = (input: string): string => {
  return input.toUpperCase();
};

export const generateAppsecretProof = async (
  accessToken: string,
  appSecret: string
): Promise<string> => {
  if (!accessToken || !appSecret) {
    throw new Error("Access token and app secret are required");
  }

  try {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(appSecret);
    const messageData = encoder.encode(accessToken);

    const key = await crypto.subtle.importKey(
      "raw",
      keyData,
      {
        name: "HMAC",
        hash: { name: "SHA-256" }
      },
      false,
      ["sign"]
    );

    const signature = await crypto.subtle.sign(
      "HMAC",
      key,
      messageData
    );

    // Convert to hex string
    return Array.from(new Uint8Array(signature))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Failed to generate appsecret_proof");
  }
};