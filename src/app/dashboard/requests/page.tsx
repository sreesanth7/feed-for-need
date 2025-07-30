import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockRequests } from "@/lib/mock-data";
import { MoreHorizontal } from "lucide-react";
import { format } from "date-fns";

export default function RequestsPage() {
    const requests = mockRequests; // Fetch for the current recipient

     const getBadgeVariant = (status: string) => {
        switch (status) {
        case 'pending':
            return 'default';
        case 'accepted':
            return 'secondary';
        case 'completed':
            return 'outline';
        default:
            return 'destructive';
        }
    };

    return (
         <div className="grid gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">
                My Food Requests
                </h1>
                <p className="text-muted-foreground">
                Track the status of your food donation requests.
                </p>
            </div>

             <Card>
                <CardHeader>
                <CardTitle>All Requests</CardTitle>
                <CardDescription>A history of all the food you've requested.</CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Food Item</TableHead>
                        <TableHead>Donor</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Requested At</TableHead>
                        <TableHead>
                        <span className="sr-only">Actions</span>
                        </TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {requests.map((request) => (
                        <TableRow key={request.id}>
                        <TableCell className="font-medium">{request.donation.foodType}</TableCell>
                        <TableCell>{request.donation.donorName}</TableCell>
                        <TableCell>
                            <Badge variant={getBadgeVariant(request.status)} className="capitalize">
                            {request.status}
                            </Badge>
                        </TableCell>
                        <TableCell>{format(new Date(request.requestedAt), "PPP")}</TableCell>
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
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                {request.status === 'completed' && <DropdownMenuItem>Leave Feedback</DropdownMenuItem>}
                                {request.status === 'pending' && <DropdownMenuItem className="text-destructive">Cancel Request</DropdownMenuItem>}
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
    )
}
