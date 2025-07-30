"use client"

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CalendarIcon, Upload } from "lucide-react";
import { format } from "date-fns";
import React from "react";
import { useToast } from "@/hooks/use-toast";

export default function DonatePage() {
    const [date, setDate] = React.useState<Date>();
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Donation Listed!",
            description: "Your surplus food is now visible to recipients. Thank you for your generosity!",
        });
    }

  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Create a New Donation
        </h1>
        <p className="text-muted-foreground">
          Fill out the form below to list your surplus food.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Food Details</CardTitle>
          <CardDescription>
            Provide as much detail as possible to help recipients understand your donation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
                 <div className="grid gap-2">
                    <Label htmlFor="food-type">Food Type / Name</Label>
                    <Input id="food-type" placeholder="e.g., Fresh Bread & Pastries" />
                 </div>
                 <div className="grid gap-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input id="quantity" placeholder="e.g., 5 boxes or approx. 20 meals" />
                </div>
            </div>

            <div className="grid gap-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea id="description" placeholder="Any additional details, like ingredients or potential allergens." />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="location">Pickup Location</Label>
                    <Input id="location" placeholder="123 Main St, New York, NY" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="expiry-date">Best Before / Expiry</Label>
                     <Popover>
                        <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                            "justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            <div className="grid gap-2">
                <Label>Photo</Label>
                <div className="border-2 border-dashed border-muted rounded-lg p-10 flex flex-col items-center justify-center text-center">
                    <Upload className="h-12 w-12 text-muted-foreground" />
                    <p className="mt-4 text-muted-foreground">Drag & drop an image here, or click to select one</p>
                    <Input type="file" className="sr-only" />
                </div>
            </div>

            <div className="flex justify-end gap-2">
                <Button variant="outline">Save as Draft</Button>
                <Button type="submit">List Donation</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
