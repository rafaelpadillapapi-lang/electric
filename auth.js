const SUPABASE_URL = "https://masknjbfxadqoashvrro.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hc2tuamJmeGFkcW9hc2h2cnJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3MDY4MzQsImV4cCI6MjA4NDI4MjgzNH0.pII8GzC3xuhJViTlC5qPcwEgHb1TaNDdCs-PWyfbLxM";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function signUp(email, password) {
  return await supabase.auth.signUp({ email, password });
}
async function signIn(email, password) {
  return await supabase.auth.signInWithPassword({ email, password });
}
async function signOut() {
  return await supabase.auth.signOut();
}
async function requireAuth() {
  const { data } = await supabase.auth.getSession();
  if (!data.session) window.location.href = "./login.html";
  return data.session;
}

window.ElectricAuth = { signUp, signIn, signOut, requireAuth };
