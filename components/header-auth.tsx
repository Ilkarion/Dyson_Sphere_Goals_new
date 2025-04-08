import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";
import style from "@/components/styles/header-auth.module.scss"

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!hasEnvVars) {
    return (
      <>
        <div>
          <div>
            <Badge
              variant={"default"}
            >
              Please update .env.local file with anon key and url
            </Badge>
          </div>
          <div>
            <Button
              asChild
              size="sm"
              variant={"outline"}
              disabled
              
            >
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant={"default"}
              disabled
            >
              <Link href="/sign-up">Sign up</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }
  return user ? (
    <div className="successUser">
      <span>{user.email}</span>
      <form action={signOutAction}>
        <Button type="submit" variant={"outline"} className="successBtn">
          <span>Sign out</span>
        </Button>
      </form>
    </div>
  ) : (
    <div className={style.regBtns}>
      <Button asChild size="sm" variant={"outline"} className={style.signInReg}>
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"} className={style.signInReg}>
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
