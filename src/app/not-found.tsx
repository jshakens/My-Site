import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <Container className="text-center">
        <p className="font-mono text-6xl font-bold text-cyan-500">404</p>
        <h1 className="mt-4 text-2xl font-bold text-gray-100">
          Page not found
        </h1>
        <p className="mt-2 text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/">
            <Home size={16} /> Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
