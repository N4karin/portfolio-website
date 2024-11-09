// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
    try {
        // Ensure body is properly parsed
        const body = await req.json();
        console.log('Received body:', body);  // Log to check the parsed data

        const { email, subject, message } = body;

        // Check for missing data
        if (!email || !subject || !message) {
            return new Response(
                JSON.stringify({ error: 'Missing required fields' }),
                { status: 400 }
            );
        }

        // Proceed with sending the email
        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: ['nakarin@gmx.ch', email],
            subject: `Contact via nakarin.dev: ${subject}`,
            react: (
                <>
                    <p>Thank you for contacting me! Here is a copy of your message!</p>
                    <p>{message}</p>
                </>
            ),
        });

        if (error) {
            return new Response(
                JSON.stringify({ error: 'Failed to send email' }),
                { status: 500 }
            );
        }

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({ error: 'Internal Server Error' }),
            { status: 500 }
        );
    }
}

