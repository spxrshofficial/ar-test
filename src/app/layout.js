
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
