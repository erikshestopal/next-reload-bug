import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
