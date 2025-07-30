import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart, UtensilsCrossed, Truck, Smile, Quote } from "lucide-react";
import LandingHeader from "@/components/landing-header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <LandingHeader />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Turn Surplus into Sustenance
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            WasteNotWantNot is a non-profit platform connecting restaurants and event organizers with surplus food to NGOs and orphanages. Together, we can fight hunger and reduce food waste.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/signup">Donate Food</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
               <Link href="/signup">Receive Food</Link>
            </Button>
          </div>
        </section>

        <section id="how-it-works" className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-headline font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit">
                    <HandHeart className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline mt-4">1. Donors List Surplus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Restaurants & event organizers with extra food post a listing with details like food type, quantity, and pickup time.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                   <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit">
                    <UtensilsCrossed className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline mt-4">2. Recipients Browse</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Orphanages and NGOs browse available listings in their area and find food that meets their needs.</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                   <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit">
                    <Truck className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline mt-4">3. Schedule Pickup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Recipients request the food and schedule a convenient pickup time directly through the platform.</p>
                </CardContent>
              </Card>
               <Card className="text-center">
                <CardHeader>
                   <div className="mx-auto bg-primary/20 text-primary rounded-full p-3 w-fit">
                    <Smile className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline mt-4">4. Community Thrives</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Food waste is reduced, and our communities are strengthened by ensuring nutritious meals reach those who need them most.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-headline font-bold text-center mb-12">What Our Partners Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card>
                        <CardContent className="pt-6">
                            <Quote className="w-8 h-8 text-accent mb-4" />
                            <p className="mb-4">"WasteNotWantNot has transformed our food donation process. It's so simple to list our surplus, and we know it's going to a good cause immediately. An essential tool for any restaurant."</p>
                            <p className="font-bold">- Maria, Owner of The Corner Bistro</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <Quote className="w-8 h-8 text-accent mb-4" />
                            <p className="mb-4">"As an NGO, finding consistent food sources can be challenging. This platform has been a blessing, providing us with regular, quality meals for the children we support. We are so grateful."</p>
                            <p className="font-bold">- David Chen, Hope Foundation</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <Quote className="w-8 h-8 text-accent mb-4" />
                            <p className="mb-4">"The real-time notifications are a game-changer. We can quickly see new listings and arrange pickups, ensuring the food is fresh. It has streamlined our operations immensely."</p>
                            <p className="font-bold">- Sarah Jenkins, Community Shelter</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
