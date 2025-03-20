import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch HTML from the external URL
    const { data } = await axios.get("https://components-orinson.vercel.app/header");

    // Return the fetched HTML content
    return new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    });
  } catch (error) {
    console.error("Error fetching footer:", error);
    return new NextResponse("<p>Error fetching footer</p>", { status: 500 });
  }
}
