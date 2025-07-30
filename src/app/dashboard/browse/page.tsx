import { Input } from "@/components/ui/input";
import { mockDonations } from "@/lib/mock-data";
import DonationCard from "@/components/donation-card";
import { Search } from "lucide-react";

export default function BrowsePage() {
    const availableDonations = mockDonations.filter(d => d.status === 'available' || d.status === 'requested');

  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Available Food Donations
        </h1>
        <p className="text-muted-foreground">
          Browse surplus food from generous donors in your area.
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search by food type, e.g., 'pizza', 'bread'..." className="pl-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {availableDonations.map(donation => (
            <DonationCard key={donation.id} donation={donation} />
        ))}
      </div>
    </div>
  );
}
