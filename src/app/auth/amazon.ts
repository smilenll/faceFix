const mockResponse = {
  access_token: "Atza|*****",
  refresh_token: "Atzr|*****",
  token_type: "bearer",
  expires_in: 3600,
};

export const AmazonAuth = async () => {
  // TODO pass from outside
  const credentials = {
    grant_type: "refresh_token",
    refresh_token: process.env["AMAZON_REFRESH_TOKEN"],
    client_id: process.env["MOCK_AMAZON_CLIENT_ID"],
    client_secret: process.env["MOCK_AMAZON_CLIENT_SECRET"],
  };

  try {
    const accessTokens = await fetch("https://api.amazon.com/auth/o2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams(JSON.stringify(credentials)),
    });
    return mockResponse;
  } catch (error) {
    return mockResponse;
  }
};
