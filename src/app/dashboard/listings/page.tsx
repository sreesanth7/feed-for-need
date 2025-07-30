import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockDonations } from "@/lib/mock-data";
import { MoreHorizontal } from "lucide-react";
import { format } from "date-fns";

export default function ListingsPage() {
  const donations = mockDonations; // In a real app, fetch for the current user

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'available':
        return 'default';
      case 'requested':
        return 'secondary';
      case 'confirmed':
        return 'outline'; // Or another color
      case 'completed':
        return 'destructive'; // Using destructive for completed to show it's "gone"
      default:
        return 'outline';
    }
  };


  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          My Food Listings
        </h1>
        <p className="text-muted-foreground">
          Manage your current and past donations.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Donations</CardTitle>
          <CardDescription>A record of all the food you've listed for donation.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Food Item</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Expires At</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donations.map((donation) => (
                <TableRow key={donation.id}>
                  <TableCell className="font-medium">{donation.foodType}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(donation.status)} className="capitalize">
                      {donation.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{donation.quantity}</TableCell>
                  <TableCell>{format(new Date(donation.expiresAt), "PPP p")}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View Requests</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Cancel Donation
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
