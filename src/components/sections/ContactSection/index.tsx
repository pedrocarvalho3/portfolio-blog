'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { submitContact } from '@/actions/contact';
import { useToast } from '@/hooks/use-toast';
import { RefreshCcw } from 'lucide-react';

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
});

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function onSubmit(data: z.infer<typeof schema>) {
    setIsLoading(true);
    const result = await submitContact(
      new FormData(document.querySelector('form') as HTMLFormElement),
    );
    setIsLoading(false);

    if (result.success) {
      toast({
        title: 'Sucesso!',
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        title: 'Erro',
        description:
          'Houve um problema ao enviar sua mensagem. Por favor, tente novamente.',
        variant: 'destructive',
      });
    }
  }

  return (
    <main className="mx-auto max-w-4xl py-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400">Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400">E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-400">Mensagem</FormLabel>
                <FormControl>
                  <Textarea placeholder="Sua mensagem" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between">
            <Button type="submit" disabled={isLoading}>
              {isLoading && (
                <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
              )}
              Enviar mensagem
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open('/seu-curriculo.pdf', '_blank')}
            >
              Baixar Currículo
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
}
