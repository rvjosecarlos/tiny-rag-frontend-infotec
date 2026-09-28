import z from "zod";

export const DataIngestaSchema = z.object({
    pdf: z.object({
      version: z.string().optional(),
      info: z.object({
        PDFFormatVersion: z.string(),
            Language: z.string().nullable(),
            EncryptFilterName: z.string().nullable(),
            IsLinearized: z.boolean().optional(),
            IsAcroFormPresent: z.boolean().optional(),
            IsXFAPresent: z.boolean().optional(),
            IsCollectionPresent: z.boolean().optional(),
            IsSignaturesPresent: z.boolean().optional(),
            CreationDate: z.string().optional(),
            Creator: z.string().optional(),
            ModDate: z.string().optional(),
            Producer: z.string().optional(),
            Title: z.string().optional()
        }),
      totalPages: z.number()
    }),
    user: z.string(),
    titleCard: z.string()
});

export const ResponseIngestaSchema = z.object({
    success: z.boolean(),
    message: z.string(),
    errors: z.array(z.object({ message: z.string() })),
    data: DataIngestaSchema
});