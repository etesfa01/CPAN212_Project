// import * as React from "react";
'use client'
// 1. import `HeroUIProvider` component
import {HeroUIProvider} from "@heroui/react";
import {ThemeProvider as NextThemesProvider} from 'next-themes';

export default function Providers({children}: {children:React.ReactNode}) {
  // 2. Wrap HeroUIProvider at the root of your app
  return (
    <HeroUIProvider>
      <NextThemesProvider
        attribute='class'
        defaultTheme='dark'
        themes={['light', 'dark', 'modern']}
      >
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}