import SkillsEditor from '@/components/commons/SkillsEditor';
import { Code } from 'lucide-react';

export default function Skills() {
  return (
    <main className="py-16">
      <div className="flex items-center justify-center gap-4 pb-8 text-5xl font-bold text-teal-200">
        <h1>Habilidades</h1>
        <Code className="h-12 w-12" />
      </div>
      <SkillsEditor />
    </main>
  );
}