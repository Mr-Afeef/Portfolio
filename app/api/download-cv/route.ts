// app/api/download-cv/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // Path to your PDF file
    const filePath = path.join(process.cwd(), "public", "cv", "Muhammad_Afeef_CV.pdf");

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "CV file not found" }, { status: 404 });
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath);

    // Return the file as response
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Muhammad_Afeef_CV.pdf"',
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error downloading CV:", error);
    return NextResponse.json({ error: "Failed to download CV" }, { status: 500 });
  }
}
