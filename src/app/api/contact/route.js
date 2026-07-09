import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Direct validations
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Validation failure. Name, email, and message are required." },
                { status: 400 }
            );
        }

        console.log(`[CONTACT FORM EVENT]: Logged message from ${name} (${email}): ${message}`);

        // Create a local log of submission queries
        const submissionsDir = path.join(process.cwd(), "submissions");
        if (!fs.existsSync(submissionsDir)) {
            fs.mkdirSync(submissionsDir, { recursive: true });
        }

        const submissionFilePath = path.join(submissionsDir, "contact_submissions.json");

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
            email,
            message,
            submittedAt: new Date().toISOString(),
        };

        submissions.push(newSubmission);
        fs.writeFileSync(submissionFilePath, JSON.stringify(submissions, null, 2), "utf8");

        return NextResponse.json(
            { message: "Contact request processed successfully.", data: newSubmission },
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
