"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Basic redirect to the default language or user preferred language
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('vi')) {
      router.push('/vi');
    } else {
      router.push('/en');
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      {/* Optional loading state */}
    </div>
  );
}
