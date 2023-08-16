import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const mailerliteApiKey = process.env.MAILERLITE_API_KEY; // Make sure to define this in your .env file

    const response = await fetch("https://connect.mailerlite.com/api/groups", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${mailerliteApiKey}`,
      },
    });

    const data = await response.json();

    // Do something with the data if needed
    // ...

    // Send the data as the response
    console.log("data", data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An error occurred while fetching the groups from MailerLite");
  }
}
