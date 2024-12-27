import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
    })
  }

  try {
    const { name, email, message } = await req.json()

    // Log the received data
    console.log("Received contact form submission:", { name, email, message })

    // Here you would typically integrate with an email service
    // For now, we'll just return a success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Message received successfully",
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 200,
      }
    )
  } catch (error) {
    console.error("Error processing request:", error)
    return new Response(
      JSON.stringify({
        error: error.message,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 400,
      }
    )
  }
})