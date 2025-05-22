"use client"
import { z } from 'zod';
import FormSimulation from './components/molecule/FormSimulation';
import { simulationFormSchema } from './components/utils/zodSchemas';

export default function Home() {
  const handleSubmit = (data: z.infer<typeof simulationFormSchema>) => {
    console.log('Dados do formulário:', data);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <FormSimulation onSubmit={handleSubmit} />
      </main>
    </div>
  );
}
