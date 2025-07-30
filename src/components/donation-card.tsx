"use client"

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Donation } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';
import { useToast } from "@/hooks/use-toast";

interface DonationCardProps {
    donation: Donation;
}

export default function DonationCard({ donation }: DonationCardProps) {
    const { toast } = useToast();

    const handleRequest = () => {
        toast({
            title: "Request Sent!",
            description: `Your request for "${donation.foodType}" has been sent to ${donation.donorName}.`,
        });
    }

    return (
        <Card className="flex flex-col">
            <CardHeader className="p-0">
                 <div className="relative h-48 w-full">
                    <Image
                        src={donation.imageUrl}
                        alt={donation.foodType}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                        data-ai-hint={donation.imageHint}
                    />
                    {donation.status === 'requested' && (
                        <Badge className="absolute top-2 right-2" variant="secondary">Requested</Badge>
                    )}
                 </div>
                 <div className="p-6 pb-2">
                    <CardTitle className="font-headline text-xl mb-1">{donation.foodType}</CardTitle>
                    <CardDescription>By {donation.donorName}</CardDescription>
                 </div>
            </CardHeader>
            <CardContent className="flex-grow grid gap-2 px-6">
                 <p className="text-sm text-muted-foreground">Quantity: {donation.quantity}</p>
                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{donation.location}</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Expires in {formatDistanceToNow(new Date(donation.expiresAt))}</span>
                 </div>
            </CardContent>
            <CardFooter className="p-6 pt-2">
                 <Button className="w-full" onClick={handleRequest} disabled={donation.status !== 'available'}>
                    {donation.status === 'available' ? 'Request Food' : 'Request Pending'}
                </Button>
            </CardFooter>
        </Card>
    )
}
