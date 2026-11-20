import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, mobile, email, service, message } = body;

    if (!fullName || !mobile) {
      return NextResponse.json(
        { error: "Name and mobile number are required" },
        { status: 400 }
      );
    }

    const enquiryRecord = {
      id: Date.now().toString(),
      fullName,
      mobile,
      email: email || "",
      service: service || "General Enquiry",
      message: message || "",
      createdAt: new Date().toISOString(),
    };

    // Save to local enquiries log file for easy persistence
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const logFile = path.join(dataDir, "enquiries.json");
      let existing: unknown[] = [];
      if (fs.existsSync(logFile)) {
        const content = fs.readFileSync(logFile, "utf-8");
        try {
          existing = JSON.parse(content);
        } catch {
          existing = [];
        }
      }
      existing.push(enquiryRecord);
      fs.writeFileSync(logFile, JSON.stringify(existing, null, 2), "utf-8");
    } catch (fsErr) {
      console.warn("Could not write enquiry to local file:", fsErr);
    }

    console.log("New enquiry received:", enquiryRecord);

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received successfully",
        enquiry: enquiryRecord,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { error: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
