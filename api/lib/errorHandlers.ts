import type { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";

export type PrismaError = PrismaClientKnownRequestError | PrismaClientValidationError

export function formatPrismaError(
	e: PrismaError
): { error: string[] } {
	return {
		error: e.message.trim().split("\n").splice(1).filter(m => m !== "")
	};
}
