import '@/app/_styles/globals.css';
import { Big_Shoulders_Inline_Text } from 'next/font/google';
import { Noto_Sans } from 'next/font/google';

export const metadata = {
  title: 'Ashish Gahlot | Front-end Developer',
};

const stylishFont = Big_Shoulders_Inline_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--big-shoulders-inline-text',
});

const primaryFont = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--noto-sans',
});

export default function Layout({ children }) {
  return (
    <html
      lang='en'
      className={`${stylishFont.variable} ${primaryFont.variable}`}
    >
      <body className='bg-neutral-300 h-screen font-primary overflow-x-hidden'>
        {children}
      </body>
    </html>
  );
}
