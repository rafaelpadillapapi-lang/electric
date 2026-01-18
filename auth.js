// auth.js
const SUPABASE_URL = "PASTE_YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "PASTE_YOUR_ANON_KEY";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function signUp(email, password) {
  const { data, error } = await sb.auth.signUp({ email, password });
  return { data, error };
}

async function signIn(email, password) {
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  return { data, error };
}

async function signOut() {
  const { error } = await sb.auth.signOut();
  return { error };
}

async function requireAuth() {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) {
    window.location.href = "./login.html";
    return null;
  }
  return session;
}

window.ElectricAuth = { sb, signUp, signIn, signOut, requireAuth };
