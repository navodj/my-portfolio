import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
export default function Home() {
    return (
        <main className="flex flex-col gap-4 p-4 md:p-8 ">
            <Hero />
            <Skills />
        </main>
    );
}