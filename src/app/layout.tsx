import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Nick Fit Home Gym - Private Gym tại Phú Nhuận, TP.HCM`,
  description: `Nick Fit Home Gym là phòng tập gym riêng tư tại quận Phú Nhuận, TP.HCM. Cung cấp không gian tập luyện hiện đại, riêng tư và thoải mái.`,
  keywords: `Nick Fit Home Gym, private gym Phú Nhuận, phòng gym riêng tư TP.HCM, gym hiện đại, gym Phú Nhuận, fitness Phú Nhuận, phòng tập cá nhân, phòng tập riêng, private fitness studio, gym cao cấp, phòng tập hiện đại, private gym Ho Chi Minh, personal gym Ho Chi Minh, modern gym Ho Chi Minh, luxury gym Ho Chi Minh, fitness studio Ho Chi Minh`,
  openGraph: {
    title: `Nick Fit Home Gym - Private Gym tại Phú Nhuận, TP.HCM`,
    description: `Khám phá Nick Fit Home Gym - phòng tập gym riêng tư với trang thiết bị hiện đại tại quận Phú Nhuận, TP.HCM.`,
    url: `https://private-gym.vercel.app`,
    type: `website`,
    images: [
      {
        url: `https://private-gym.vercel.app/service-3.jpg`,
        width: 1200,
        height: 630,
        alt: `Nick Fit Home Gym`,
      },
    ],
  },
  robots: `index, follow`,
  twitter: {
    card: `summary_large_image`,
    site: `@NickFitHomeGym`,
    title: `Nick Fit Home Gym - Private Gym tại Phú Nhuận, TP.HCM`,
    description: `Khám phá Nick Fit Home Gym - phòng tập gym riêng tư với trang thiết bị hiện đại tại quận Phú Nhuận, TP.HCM.`,
    images: [`https://private-gym.vercel.app/service-3.jpg`],
  },
  authors: [{ name: `Nick Fit Home Gym` }],
  publisher: `Nick Fit Home Gym`,
  alternates: {
    canonical: `https://private-gym.vercel.app`,
    languages: {
      en: `https://private-gym.vercel.app/en`,
      vi: `https://private-gym.vercel.app/vi`,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
