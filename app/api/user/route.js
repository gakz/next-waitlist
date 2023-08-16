import { NextResponse } from "next/server";

const mailerlite = process.env.MAILERLITE_API_KEY;

export async function POST(req) {
  const { email } = await req.json();
  console.log("email", email);

  try {
    const url = "https://connect.mailerlite.com/api/subscribers";
    const body = {
      email: email,
      groups: ["96430121320187853"],
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${mailerlite}`,
      },
      body: JSON.stringify(body),
    });
    return NextResponse.json({
      success: true,
      message: "Success",
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Failed",
      status: 500,
    });
  }
}
