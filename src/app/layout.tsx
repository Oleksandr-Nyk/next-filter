import { ThemeProvider } from "./components/ThemeProvider"
import "./globals.css";
import "leaflet/dist/leaflet.css";


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
