"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ProfilePage() {
    const { toast } = useToast();
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Profile Updated",
            description: "Your information has been successfully saved.",
        });
    }

  return (
    <div className="grid gap-8 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          My Profile
        </h1>
        <p className="text-muted-foreground">
          Manage your account settings and information.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your name and contact details.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name / Organization Name</Label>
              <Input id="name" defaultValue="The Corner Bistro" />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="donor@example.com" />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="location">Location / Address</Label>
              <Input id="location" defaultValue="123 Main St, New York, NY" />
            </div>
            <div className="flex justify-end">
                <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>
            For security, please choose a strong password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
             <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <div className="flex justify-end">
                <Button>Update Password</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
