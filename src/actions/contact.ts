'use server';

import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
});

export async function submitContact(formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log('Enviando e-mail:', validatedFields.data);

  // Simulando um atraso de rede
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: 'Mensagem enviada com sucesso!' };
}
