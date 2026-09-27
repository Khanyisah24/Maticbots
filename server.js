require("dotenv").config();

const http = require("http");
const fs = require("fs");
const path = require("path");
const { GoogleGenAI } = require("@google/genai");
const qualificationsPath = path.join(__dirname, "data" ,"qualifications.json");

const qualificationsData = JSON.parse(fs.readFileSync(qualificationsPath, "utf-8"));
console.log("Qualifications loaded:", qualificationsData.faculties.length);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});
const conversationHistory = [];

const server = http.createServer(async (req, res) => {

  // Allow the website to communicate with the server
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle browser permission check
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Gemini chat endpoint
  if (req.method === "POST" && req.url === "/chat") {

    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", async () => {
      try {
        const data = JSON.parse(body);
        console.log("CHAT LANGUAGE:", data);
        conversationHistory.push({ role: "user", content: data.message });

        console.log("CONVERSATION HISTORY:", conversationHistory);
       const response = await ai.models.generateContent({
  model: "gemini-3.5-flash-lite",
  contents: `
    You are MaticBot, a friendly and helpful AI assistant and UNIZULU virtual study assistant. Answer the user's question directly. Do not introduce yourself unless the user asks who you are.

    Your job is to help students with:
    - General educational questions
    - Computer science and technology questions
    - UNIZULU qualifications and programmes
    - UNIZULU faculties
    - Admission and APS requirements
    - Subject requirements
    - Study-related questions

    IMPORTANT RULES:

    1. GENERAL KNOWLEDGE:
       1. GENERAL KNOWLEDGE:
   If the user's question is NOT specifically about UNIZULU,
   answer the question directly using your general knowledge.

   Examples of general questions include:
   - What is a noun?
   - What is a computer?
   - What is HTTP?
   - What is a database?
   - Explain artificial intelligence.
   - What is an operating system?

   For these questions, DO NOT search the UNIZULU qualification data.
   DO NOT say that the answer is unavailable in the UNIZULU data.
   DO NOT redirect the user to UNIZULU.

   Simply answer the question clearly and helpfully.

    2. UNIZULU INFORMATION:
       When the question is specifically about UNIZULU, use the
       UNIZULU qualification data below as your main source of truth.

    3. DO NOT INVENT:
       Do not invent UNIZULU programmes, APS requirements,
       subject requirements, qualification codes, closing dates,
       or other UNIZULU-specific information.

    4. MISSING UNIZULU INFORMATION:
       If the requested UNIZULU information is not contained in
       the supplied data, clearly tell the user that the information
       is not available in your current UNIZULU data.

    5. PROGRAMME RECOMMENDATIONS:
       When recommending UNIZULU programmes, use the supplied
       qualification data.

    6. SIMPLE ANSWERS:
       Give clear, simple answers that are easy for a student to understand.

    7. QUALIFICATION DETAILS:
       When discussing a UNIZULU qualification, include relevant
       information such as programme name, APS, duration, and
       subject requirements when available.

    8. MULTIPLE MATCHES:
       If several programmes match the question, list the most relevant ones.

    9. CURRENT INFORMATION:
       Do not claim that UNIZULU information is current beyond the
       data provided.

    10. ADMISSION:
        Remind students to confirm admission requirements using the
        latest official UNIZULU prospectus when appropriate.
    
    11. RESPONSE STYLE:
    Do not introduce yourself at the beginning of every response.
    Do not start answers with "Hello, I am MaticBot",
    "Hi, I'm MaticBot", or similar introductions.
    Answer the user's question directly.
    Only introduce yourself if the user asks who you are.
    UNIZULU QUALIFICATION DATA:
    ${JSON.stringify(qualificationsData)}
    
    CONVERSATION HISTORY:
    ${conversationHistory.map(item => `${item.role}: ${item.content}`).join("\n")}

    CURRENT USER QUESTION:
    ${data.message}
  
    ANSWER LANGUAGE:
    ${data.language ||"en"}

    Answer the user's question in the specified language.
  `
});

        res.writeHead(200, {
          "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
          role: "assistant",
          reply: response.text
        }));
        
      } catch (error) {
        console.error(error);

        res.writeHead(500, {
          "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
          error: "Gemini could not process the message."
        }));
      }
    });

    return;
  }
  if (req.url === "/detect-language" && req.method === "POST") {

  let body = "";

  req.on("data", chunk => {
    body += chunk;
  });

  req.on("end", async () => {

    try {

      const data = JSON.parse(body);

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: `
You are the language detection system for MaticBot.
- Pay special attention to isiZulu greetings such as sawubona, sanibonani, yebo, ngiyabingelela, unjani, and ninjani.
- If the message is an isiZulu greeting or isiZulu sentence, return zu.

Identify the language of the user's message.

Supported languages and codes:

en = English
zu = isiZulu
xh = isiXhosa
st = Sesotho
tn = Setswana
nso = Sepedi
af = Afrikaans
ss = siSwati
ve = Tshivenda
ts = Xitsonga
nr = isiNdebele

IMPORTANT:
- Detect the language from the entire message.
- Do not rely on specific keywords only.
- Understand normal sentences, questions, greetings, spelling variations, and natural language.
- If the message contains multiple languages, identify the main language.
- Return ONLY the language code.
- Do not explain your answer.
- Do not return JSON.
- Do not return quotation marks.

USER MESSAGE:
${data.message}
`

      });
      const language = response.text.trim().toLowerCase();

      const allowedLanguages = [
        "en","zu","xh","st","tn",
        "nso","af","ss","ve","ts","nr"
      ];

      const detectedLanguage =
        allowedLanguages.includes(language)
          ? language
          : "en";

      res.writeHead(200, {
        "Content-Type": "application/json"
      });

      res.end(JSON.stringify({
        language: detectedLanguage
      }));

    } catch (error) {

      console.error("Language detection error:", error);

      res.writeHead(500, {
        "Content-Type": "application/json"
      });

      res.end(JSON.stringify({
        language: "en"
      }));

    }

  });

  return;
}
    if (req.method === "POST" && req.url === "/detect-subjects") {

    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", async () => {

      try {

        const data = JSON.parse(body);
        console.log("CHAT LANGUAGE:", data.language);

        const response = await ai.models.generateContent({
          model: "gemini-3.5-flash-lite",

          contents: `
You are a subject recognition system for MaticBot.

The student wrote:
"${data.message}"

Here is the official list of subject keys:
${JSON.stringify(data.subjects)}

Identify which subjects the student is referring to.

You may understand natural language, abbreviations, spelling variations,
and common ways students refer to subjects.

Examples:
"maths" → "mathematics"
"math" → "mathematics"
"physics" → "physical sciences"
"physical science" → "physical sciences"
"bio" → "life sciences"
"biology" → "life sciences"

IMPORTANT:
- Only return keys that exist in the supplied subject list.
- Do not invent new subject keys.
- Return ONLY a JSON array.
- Example: ["mathematics","physical sciences"]
- If no subjects are identified, return [].
`
        });

        let subjects = [];

        try {
          subjects = JSON.parse(response.text);
        } catch (error) {
          subjects = [];
        }

        res.writeHead(200, {
          "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
          subjects: subjects
        }));

      } catch (error) {

        console.error("Subject detection error:", error);

        res.writeHead(500, {
          "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
          subjects: []
        }));

      }

    });

    return;
  }

  // Server health check
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end("MaticBot Gemini server is running!");
});
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`MaticBot Gemini server is running on port ${PORT}`);
});
