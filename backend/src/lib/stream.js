import { StreamChat } from "stream-chat";
import "dotenv/config";

if (!process.env.STREAM_API_KEY || !process.env.STREAM_API_SECRET) {
  throw new Error(
    "STREAM_API_KEY and STREAM_API_SECRET must be set in .env file"
  );
}

const client = StreamChat.getInstance(
  process.env.STREAM_API_KEY,
  process.env.STREAM_API_SECRET
);

export const upsertStreamUser = async (user) => {
  try {
    await client.upsertUser(user);
    return user;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
    throw new Error("Failed to upsert Stream user");
  }
};

export const generateStreamToken = (userId) => {
  try {
    const userID = userId.toString();
    return client.createToken(userID);
  } catch (error) {
    console.error("Error generating Stream token:", error);
    throw new Error("Failed to generate Stream token");
  }
};
