import { ReactNode, Suspense } from 'react'
import Header from '../../components/header'
import { CartProvider } from '../../contexts/cart-context'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-x-[1600px] grid-rows-app gap-5 p-8">
        <Suspense>
          <Header />
          {children}
        </Suspense>
      </div>
    </CartProvider>
  )
}
