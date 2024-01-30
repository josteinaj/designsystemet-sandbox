import "@digdir/design-system-tokens/brand/digdir/tokens.css";
import { Button, Heading } from "@digdir/design-system-react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Heading level={1} size="xlarge">
        Designsystemet
      </Heading>
      <Button>Knapp</Button>
    </div>
  );
}
