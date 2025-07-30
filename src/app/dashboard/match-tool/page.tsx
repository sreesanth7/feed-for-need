import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockDonations, mockSuggestions } from "@/lib/mock-data";
import { Award, Send } from "lucide-react";

export default function MatchToolPage() {
  const suggestions = mockSuggestions;

  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          AI-Powered Matching
        </h1>
        <p className="text-muted-foreground">
          Find the best recipients for your donation based on location, needs, and feedback.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
             <Card>
                <CardHeader>
                    <CardTitle>Find Matches</CardTitle>
                    <CardDescription>Select one of your active donations to find recommended recipients.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a donation..." />
                        </SelectTrigger>
                        <SelectContent>
                            {mockDonations.filter(d => d.status === 'available').map(d => (
                                <SelectItem key={d.id} value={d.id}>{d.foodType}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button>Find Best Matches</Button>
                </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Top Recommendations</CardTitle>
                    <CardDescription>Our AI has identified these organizations as a great fit.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {suggestions.map(suggestion => (
                            <div key={suggestion.id} className="flex items-start gap-4 p-4 border rounded-lg">
                                <div className="bg-primary/10 text-primary p-3 rounded-full">
                                    <Award className="h-6 w-6" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="font-semibold">{suggestion.recipientName}</p>
                                            <p className="text-sm text-muted-foreground">{suggestion.recipientLocation}</p>
                                        </div>
                                         <p className="text-sm font-bold text-primary">{suggestion.matchScore}% Match</p>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-2">{suggestion.reason}</p>
                                </div>
                                <Button size="sm" variant="outline"><Send className="mr-2 h-4 w-4" /> Notify</Button>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
