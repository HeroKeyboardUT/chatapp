import { generateStreamToken } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    const token = await generateStreamToken(req.user._id);
    res.status(200).json({
      message: "Stream token generated successfully",
      token,
    });
  } catch (error) {
    console.error("Error generating Stream token:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
