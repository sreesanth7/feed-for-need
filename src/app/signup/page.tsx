import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { HandHeart } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
       <div className="w-full max-w-md">
        <Card className="mx-auto">
           <CardHeader className="text-center">
            <Link href="/" className="flex items-center justify-center gap-2 font-bold text-2xl mb-2">
                <HandHeart className="h-8 w-8 text-primary" />
                <span className="font-headline">WasteNotWantNot</span>
            </Link>
            <CardTitle className="text-2xl">Join Our Community</CardTitle>
            <CardDescription>
              Create an account to start donating or receiving food today.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="full-name">Full Name / Organization Name</Label>
                <Input id="full-name" placeholder="e.g. John Doe or Hope Foundation" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="grid gap-2">
                <Label>I am a...</Label>
                <RadioGroup defaultValue="recipient" className="flex gap-4">
                    <div>
                        <RadioGroupItem value="donor" id="donor" className="peer sr-only" />
                        <Label htmlFor="donor" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            Donor
                        </Label>
                    </div>
                     <div>
                        <RadioGroupItem value="recipient" id="recipient" className="peer sr-only" />
                        <Label htmlFor="recipient" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                            Recipient
                        </Label>
                    </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full" asChild>
                <Link href="/dashboard">Create an account</Link>
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Log in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
