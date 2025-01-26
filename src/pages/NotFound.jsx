import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ui/ScrollAnimation';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <ScrollAnimation>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted px-6">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Seite nicht gefunden
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Tut uns leid, aber die gesuchte Seite existiert nicht oder wurde verschoben.
          </p>
          <div className="pt-4">
            <Link to="/">
              <Button size="lg" variant="default">
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </ScrollAnimation>
  );
};

export default NotFound;