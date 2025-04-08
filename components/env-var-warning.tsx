import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
export function EnvVarWarning() {
  return (
    <div>
      <Badge variant={"outline"}>
        Supabase environment variables required
      </Badge>
      <div>
        <Button
          asChild
          size="sm"
          variant={"outline"}
          disabled
        >
          <Link href="/sign-in" >Sign in</Link>
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
  );
}
