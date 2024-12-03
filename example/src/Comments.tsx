import { createClient } from "@supabase/supabase-js";
import { CommentsSection } from "supabase-comments";
import "supabase-comments/style.css";
import "./shadecn-theme.css"

const SUPABASE_URL = "https://jengzmzwtufxjsvqsjtd.supabase.co";
const SUPABASE_ANON_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Implbmd6bXp3dHVmeGpzdnFzanRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxOTYxMjIsImV4cCI6MjA0ODc3MjEyMn0.YQVvjbV56rpVy9lDRrGjGDPLaQUgPBH5oDEVG2G-SrU"

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function Comments() {
  return (
    <CommentsSection
      topic="supabase-comments-demo-topic"
      supabaseClient={supabase}
      mode={"dark"}
    />
  );
}

export default Comments;
