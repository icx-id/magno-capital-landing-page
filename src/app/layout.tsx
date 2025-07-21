import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';

export const metadata = {
  title: 'Magno Capital',
  description: 'Magno Capital',
};

export default async function RootLayout({
  children,
}: PropsWithChildren<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = (await import('../../messages/en.json')).default;

  return (
    <html lang={locale} data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MantineProvider
            theme={{
              fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif`,
              colors: {
                brand: [
                  '#dafff7',
                  '#adffea',
                  '#7effdd',
                  '#4dffcf',
                  '#24ffc1',
                  '#11e6a7',
                  '#00b382',
                  '#00805d',
                  '#004e37',
                  '#001c12',
                ],
              },
              primaryColor: 'brand',
            }}>
            {children}
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
