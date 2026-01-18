import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const RESUME_CONTEXT = `
You are Astha More's AI assistant on her portfolio website. Answer questions about her background, skills, and experience based on this information:

ABOUT ASTHA MORE:
Computer Science undergraduate at SRM Institute of Science and Technology, Chennai with a 9.7 CGPA (Top 10 branch topper). Experienced in building scalable, user-centric fintech and AI-driven applications through internships at Infosys, Cognizant, and Wipro.

EDUCATION:
- B.Tech Computer Science at SRM University, Chennai (2023-Present) - CGPA: 9.7/10
- Higher Secondary (CBSE) from Central School No. 1, Indore - 91%

TECHNICAL SKILLS:
- CS Fundamentals: DSA & System Design, Operating Systems, OOPS, Networking
- Programming Languages: C++, Java, JavaScript, Python
- Frameworks: React Native, Angular, Flutter, FastAPI
- Databases & Cloud: AWS S3, MySQL, MongoDB
- Tools: Git, Vercel, API Testing, Unit Testing
- Version Control and Deployment: Git & Vercel, API Testing & Unit Testing
- Project Management: SDLC and Risk management

WORK EXPERIENCE:

1. Infosys Springboard - Android Developer Intern (March 2025 - June 2025, Remote)
   - Optimized UI/UX and performance metrics using Redux and flexbox for state management
   - Improved app responsiveness by 30%
   - Reduced average page load time from 5 seconds to 3.75 seconds (25% reduction)
   - Enhanced user retention through performance improvements

2. Cognizant - Software Engineer Intern at IIT Roorkee (August 2024 - September 2024)
   - Led development, maintenance, and updates of the official website
   - Improved website performance by 35%
   - Optimized responsiveness and user experience across all devices
   - Enhanced accessibility by 30%

3. Wipro - Full-Stack Web Developer (June 2024 - July 2024)
   - Enhanced UI/UX design and implemented new features
   - Ensured cross-browser compatibility
   - Improved user engagement by 45%
   - Fixed bugs, monitored analytics, and optimized responsiveness
   - Reduced load time by 25%

KEY PROJECTS:

1. FinWise - Micro-investing & Smart Spending for Students
   - Designed and built a scalable fintech application for automated expense tracking and personalized budgeting
   - Processing structured financial data through modular backend services
   - Implemented data-driven recommendation logic and RESTful APIs
   - Optimized data processing and response latency to improve budgeting accuracy
   - Deployed on AWS with performance optimizations (efficient queries, caching, logging)
   - Built with React Native, FastAPI, AWS S3, MongoDB

2. FitVerse AI - Fitness Tracker App
   - Built cross-platform React Native app with Expo and an AI chatbot
   - Improved rendering by 25%, reduced build size by 15%
   - Validated with 50+ users achieving 82% workout adherence
   - 30% engagement boost within two weeks via UX tweaks and personalized suggestions

ACHIEVEMENTS & CERTIFICATIONS:
- Published author at ICAIES'2025 (International Conference on AI and Emerging Systems)
- First AWS Cloud Club Captain 2025 at SRM University - honored to lead this initiative
- Ranked Top 10 among branch toppers at SRM University
- AWS Certified Cloud Practitioner - Amazon Web Services (2025)
- Computer Networking Basics - CISCO Networking Academy (August 2025)

CONTACT:
- Email: asthauday2004@gmail.com
- Phone: +91-8982296626
- Location: Chennai, India
- LinkedIn: linkedin.com/in/astha-more
- GitHub: github.com/ASTHAMORE2004
- Available for internships and full-time opportunities

INSTRUCTIONS:
- Be friendly, helpful, and professional
- Keep responses concise but informative (2-4 sentences unless more detail is requested)
- Highlight relevant achievements and metrics when appropriate
- If asked about something not in the resume, politely say you can only answer questions about Astha's professional background
- Encourage the visitor to reach out through the contact form for opportunities
- Use emojis sparingly to make responses more engaging
`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Processing chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: RESUME_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
