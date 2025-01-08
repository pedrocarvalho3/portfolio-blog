import { Brain } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-5xl font-bold text-white">
          Sobre Mim
        </h2>

        <div className="mx-auto mb-12 flex max-w-7xl flex-col items-center gap-32 md:flex-row">
          <div className="relative h-64 w-64 overflow-hidden rounded-full shadow-lg">
            <Image
              src="/me.jpeg"
              alt="Minha foto"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="flex-1 space-y-6 rounded-lg bg-teal-200 p-8 shadow-lg">
            <p className="text-lg">
              Sou Pedro Vinícius de Carvalho, um desenvolvedor apaixonado por
              criar soluções tecnológicas que impactam positivamente as pessoas
              e as empresas. Com um foco constante em aprimorar minhas
              habilidades e explorar novas tecnologias, estou sempre em busca de
              desafios que me permitam crescer como profissional e fazer a
              diferença nos projetos que desenvolvo.
            </p>
            <p className="text-lg">
              Minha jornada como desenvolvedor começou com uma curiosidade
              natural pela tecnologia e uma vontade constante de aprender. Desde
              então, venho acumulando experiências práticas e teóricas, que me
              permitiram dominar uma variedade de ferramentas e metodologias,
              desde o desenvolvimento front-end até a arquitetura de sistemas
              back-end.
            </p>
            <p className="text-lg">
              Trabalho com uma mentalidade orientada à resolução de problemas,
              buscando sempre a solução mais eficiente, escalável e de fácil
              manutenção. Sou um entusiasta de tecnologias modernas como
              Next.js, TypeScript e Node.js, mas também estou sempre pronto para
              aprender novas linguagens e frameworks, conforme as necessidades
              do projeto.
            </p>
            <p className="text-lg">
              Sou um defensor da colaboração e acredito que o trabalho em equipe
              é essencial para o sucesso de qualquer projeto. A troca de ideias
              e a colaboração com pessoas de diferentes áreas me ajudam a
              desenvolver soluções mais completas e inovadoras. Além disso, a
              comunicação clara e objetiva é uma das minhas maiores prioridades,
              sempre mantendo as partes envolvidas bem informadas e alinhadas
              com os objetivos do projeto.
            </p>
            <p className="text-lg">
              Acredito que a experiência do usuário deve estar no centro de cada
              decisão, seja no desenvolvimento de uma interface visualmente
              atraente ou na implementação de funcionalidades que atendam de
              forma eficaz às necessidades dos usuários. Busco constantemente um
              equilíbrio entre estética e funcionalidade, garantindo que a
              experiência seja fluida, intuitiva e eficiente.
            </p>
            <p className="text-lg">
              Fora do ambiente profissional, sou alguém curioso, que adora
              explorar novas ideias, técnicas e ferramentas. Estou sempre em
              busca de novos desafios e oportunidades de aprendizado, seja
              participando de cursos, hackathons ou projetos paralelos, para
              continuar expandindo meu conhecimento e contribuindo de forma
              significativa para a evolução da tecnologia.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="flex items-center justify-center text-lg font-semibold text-teal-100">
            <Brain className="mr-2" />
            Sempre em busca de novos desafios e oportunidades de aprendizado!
          </p>
        </div>
      </div>
    </section>
  );
}
