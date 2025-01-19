import z from "zod";

export const CreateTaskValidation = z
    .string({ message: "Nome e um campo obrigatorio" })
    .min(3, { message: "Nome da tarefa deve ter no minimo 3 caracteres" })