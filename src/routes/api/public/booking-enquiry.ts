import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  location: z.string().trim().max(200).optional().or(z.literal("")),
  date: z.string().trim().max(80).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  package: z.string().trim().max(60).optional().or(z.literal("")),
});

export const Route = createFileRoute("/api/public/booking-enquiry")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = enquirySchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: "Please check the form fields and try again." },
            { status: 400 },
          );
        }
        const data = parsed.data;

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin.from("booking_enquiries").insert({
          name: data.name,
          company: data.company || null,
          location: data.location || null,
          ready_date: data.date || null,
          email: data.email,
          package: data.package || null,
        });

        if (error) {
          console.error("[booking-enquiry] insert failed:", error);
          return Response.json({ error: "Something went wrong." }, { status: 500 });
        }

        return Response.json({ ok: true });
      },
    },
  },
});
