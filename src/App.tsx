import { Routes, Route } from 'react-router'
import CursorProvider from '@/components/CursorProvider'
import LenisProvider from '@/components/LenisProvider'
import CustomCursor from '@/components/CustomCursor'
import Home from '@/pages/Home'

export default function App() {
  return (
    <CursorProvider>
      <LenisProvider>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </LenisProvider>
    </CursorProvider>
  )
}
