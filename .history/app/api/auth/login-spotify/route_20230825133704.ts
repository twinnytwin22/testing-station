import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();


  const supabase = createRouteHandlerClient({ cookies });

  await supabaseAuth.auth.signInWithOAuth({
    provider: 'spotify'
  });

  return NextResponse.redirect(`${requestUrl.origin}/`, {
    status: 301,
  });
}
