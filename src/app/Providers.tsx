"use client"
import { ThemeProvider } from "next-themes";
function Providers({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        
      {children}
    </ThemeProvider>
  )
}

export default Providers
