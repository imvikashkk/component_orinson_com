import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch HTML from the external URL
    const { data } = await axios.get(
      "https://components-orinson.vercel.app/footer"
    );

    // Return the fetched HTML content
    return new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*", // Allow all origins, replace with specific domain if needed
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error fetching footer:", error);
    return new NextResponse("<p>Error fetching footer</p>", { status: 500 });
  }
}

// Handle OPTIONS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}