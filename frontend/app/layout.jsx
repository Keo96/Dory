import "./globals.css";

export const metadata = {
  title: "Dory",
  description: "AI-Powered Learning Accessibility",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
