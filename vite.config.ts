import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
      {
        name: 'email-middleware',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/send-email' && req.method === 'POST') {
              try {
                const chunks = [];
                req.on('data', (chunk) => chunks.push(chunk));
                
                req.on('end', async () => {
                  try {
                    const data = JSON.parse(Buffer.concat(chunks).toString());
                    const { name, email, subject, message } = data;
                    
                    // Dynamically import nodemailer only when needed
                    const nodemailer = await import('nodemailer');
                    
                    // Create transporter
                    const transporter = nodemailer.default.createTransport({
                      service: 'gmail',
                      auth: {
                        user: process.env.VITE_GMAIL_USER,
                        pass: process.env.VITE_GMAIL_APP_PASSWORD,
                      },
                    });
                    
                    // Create pixel-styled email template
                    const pixelEmailTemplate = `
                      <!DOCTYPE html>
                      <html>
                      <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>New Message from Pixelfolio</title>
                        <style>
                          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
                          
                          body {
                            font-family: monospace;
                            background-color: #121212;
                            color: #e0e0e0;
                            padding: 20px;
                            margin: 0;
                          }
                          
                          .container {
                            max-width: 600px;
                            margin: 0 auto;
                            border: 2px solid #4f46e5;
                            padding: 20px;
                            background-color: #1a1a1a;
                            box-shadow: 0 0 10px rgba(79, 70, 229, 0.5);
                          }
                          
                          .header {
                            text-align: center;
                            margin-bottom: 20px;
                            border-bottom: 2px solid #4f46e5;
                            padding-bottom: 10px;
                          }
                          
                          .title {
                            font-family: 'Courier New', monospace;
                            font-size: 24px;
                            color: #4f46e5;
                            text-transform: uppercase;
                            letter-spacing: 2px;
                            margin: 0;
                          }
                          
                          .subtitle {
                            font-family: 'Courier New', monospace;
                            font-size: 14px;
                            color: #10b981;
                            text-transform: uppercase;
                          }
                          
                          .content {
                            background-color: #262626;
                            border: 1px solid #4f46e5;
                            padding: 15px;
                            margin-bottom: 20px;
                          }
                          
                          .field {
                            margin-bottom: 15px;
                          }
                          
                          .label {
                            color: #10b981;
                            font-size: 12px;
                            text-transform: uppercase;
                            margin-bottom: 5px;
                            font-family: 'Courier New', monospace;
                          }
                          
                          .value {
                            color: #e0e0e0;
                            font-family: monospace;
                            padding: 5px 0;
                            word-break: break-word;
                          }
                          
                          .message-box {
                            background-color: #1a1a1a;
                            border: 1px solid #10b981;
                            padding: 10px;
                          }
                          
                          .footer {
                            text-align: center;
                            font-size: 12px;
                            color: #888;
                            margin-top: 20px;
                            border-top: 1px solid #333;
                            padding-top: 10px;
                          }
                          
                          .pixel-divider {
                            height: 4px;
                            background: repeating-linear-gradient(
                              to right,
                              #4f46e5,
                              #4f46e5 8px,
                              transparent 8px,
                              transparent 16px
                            );
                            margin: 15px 0;
                          }
                          
                          .status {
                            display: inline-block;
                            background-color: #10b981;
                            color: #000;
                            padding: 5px 10px;
                            font-size: 12px;
                            text-transform: uppercase;
                            font-family: 'Courier New', monospace;
                            margin-top: 10px;
                          }
                        </style>
                      </head>
                      <body>
                        <div class="container">
                          <div class="header">
                            <h1 class="title">📡 Communication Hub</h1>
                            <p class="subtitle">⚡ New Message Received</p>
                          </div>
                          
                          <div class="content">
                            <div class="field">
                              <div class="label">NAME.INPUT</div>
                              <div class="value">${name}</div>
                            </div>
                            
                            <div class="field">
                              <div class="label">EMAIL.ADDRESS</div>
                              <div class="value">${email}</div>
                            </div>
                            
                            <div class="field">
                              <div class="label">SUBJECT.LINE</div>
                              <div class="value">${subject}</div>
                            </div>
                            
                            <div class="pixel-divider"></div>
                            
                            <div class="field">
                              <div class="label">MESSAGE.BODY</div>
                              <div class="message-box value">${message.replace(/\n/g, '<br>')}</div>
                            </div>
                          </div>
                          
                          <div style="text-align: center;">
                            <span class="status">MESSAGE_RECEIVED.SUCCESS</span>
                          </div>
                          
                          <div class="footer">
                            <p>TIMESTAMP: ${new Date().toISOString()}</p>
                            <p>SERVER_STATUS: ONLINE</p>
                          </div>
                        </div>
                      </body>
                      </html>
                    `;
                    
                    // Send email
                    await transporter.sendMail({
                      from: `"${name}" <${email}>`,
                      to: process.env.VITE_GMAIL_USER,
                      subject: `[PIXELFOLIO] New Contact: ${subject}`,
                      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
                      html: pixelEmailTemplate,
                    });
                    
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true }));
                  } catch (error) {
                    console.error('Error processing email request:', error);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, error: 'Failed to process email request' }));
                  }
                });
              } catch (error) {
                console.error('Error handling email request:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: 'Failed to handle email request' }));
              }
            } else {
              next();
            }
          });
        }
      }
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
