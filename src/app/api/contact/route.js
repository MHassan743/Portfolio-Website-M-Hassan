import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import os from "os";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, whatsapp, message } = body;
        const contactInfo = whatsapp || email;

        // Direct validations
        if (!name || !contactInfo || !message) {
            return NextResponse.json(
                { error: "Validation failure. Name, contact info (WhatsApp/Email), and message are required." },
                { status: 400 }
            );
        }

        console.log(`[CONTACT FORM EVENT]: Received message from ${name} (${contactInfo}): ${message}`);

        // Try writing to temp directory on Vercel or local environment safely
        try {
            const tmpDir = os.tmpdir();
            const submissionFilePath = path.join(tmpDir, "contact_submissions.json");

            let submissions = [];
            if (fs.existsSync(submissionFilePath)) {
                try {
                    const fileContent = fs.readFileSync(submissionFilePath, "utf8");
                    submissions = JSON.parse(fileContent);
                } catch (err) {
                    console.error("Error reading existing submissions log:", err);
                }
            }

            const newSubmission = {
                id: Date.now().toString(),
                name,
                email: email || null,
                whatsapp: whatsapp || null,
                message,
                submittedAt: new Date().toISOString(),
            };

            submissions.push(newSubmission);
            fs.writeFileSync(submissionFilePath, JSON.stringify(submissions, null, 2), "utf8");
        } catch (fsErr) {
            // On Vercel serverless environment, filesystem is read-only - log safely
            console.warn("Vercel filesystem notice:", fsErr.message);
        }

        return NextResponse.json(
            { message: "Contact request processed successfully.", data: { name, contactInfo } },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API Server Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error. Unable to process contact submission." },
            { status: 500 }
        );
    }
}
