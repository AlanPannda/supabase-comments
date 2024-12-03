import { createClient } from "@supabase/supabase-js";
import React from "react";
import ReactDOM from "react-dom/client";
import CommentsSection from "@/components/CommentsSection";

const SUPABASE_URL = "https://jengzmzwtufxjsvqsjtd.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Implbmd6bXp3dHVmeGpzdnFzanRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxOTYxMjIsImV4cCI6MjA0ODc3MjEyMn0.YQVvjbV56rpVy9lDRrGjGDPLaQUgPBH5oDEVG2G-SrU";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CommentsSection
      topic="Single Topic"
      supabaseClient={supabase}
      mode="light"
    />
  </React.StrictMode>,
);
