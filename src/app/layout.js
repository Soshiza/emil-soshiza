
import "./globals.css";



export const metadata = {
  title: "Antonio Emil Muñoz",
  description: "Instructor yoga,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
