import { Toaster } from "@/components/ui/toaster";
import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
// import  Footer  from "@/components/layout/Footer";

// Pages
// import Index from "./pages/Index";
// import Rooms from "./pages/Rooms";
// import Dining from "./pages/Dining";
// import Spa from "./pages/Spa";
// import Gallery from "./pages/Gallery";
// import Offers from "./pages/Offers";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Privacy from "./pages/Privacy";
// import Terms from "./pages/Terms";
// import NotFound from "./pages/NotFound";
// import Decor from "./pages/Decor";
// import Weather from "./pages/Weather";
// import Review from "./pages/Review" ;
const Index = lazy(() => import("./pages/Index"));
const Rooms = lazy(() => import("./pages/Rooms"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Offers = lazy(() => import("./pages/Offers"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const TermsAndCondition = lazy(() => import("./pages/TermsAndCondition"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Decor = lazy(() => import("./pages/Decor"));
const Weather = lazy(() => import("./pages/Weather"));
const Review = lazy(() => import("./pages/Review"));
const Faqs = lazy(() => import("./pages/Faqs"));
const Booking = lazy(() => import("./pages/Booking"));
// Loading component
import FrontLogo from "@/components/layout/FrontLogo";
// testing route
import ConfirmationDialog from "./components/ConfirmationDialog";
import BookingFoam from "./components/BookingFoam";
import BookingFormpage from "./pages/BookingFormpage";
import BookingCard from "./components/cards/BookingCard";
import BookingWidget from "./components/BookingWidget";
import Hero from "./components/Hero";
import Aminities from "./pages/Aminities";
import WhatsAppButton from "@/components/buttons/Whatsapp";
const queryClient = new QueryClient();

const App = () => (
  <Suspense fallback={<FrontLogo />}>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Header />
              {/* <main className="flex-1"> */}
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/rooms" element={<Rooms />} />
                {/* <Route path="/dining" element={<Dining />} /> */}
                {/* <Route path="/spa" element={<Spa />} /> */}
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<TermsAndCondition />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/decor" element={<Decor />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/reviews" element={<Review />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/book" element={<Booking />} />
                <Route path="/aminities" element={<Aminities />} />
                <Route path="/logo" element={<FrontLogo />} />
                <Route path="/bookingform" element={<BookingFormpage />} />
                {/* <Route path="/logo" element={<Hero />} /> */}
              </Routes>
              {/* </main> */}
              {/* <Footer /> */}
            </div>

            {/* Add DevTools */}
            <ReactQueryDevtools initialIsOpen={false} />
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  </Suspense>
);

export default App;
