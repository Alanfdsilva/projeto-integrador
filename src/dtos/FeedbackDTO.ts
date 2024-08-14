import { Decimal, DecimalJsLike } from "@prisma/client/runtime/library";

export type Feedback = {
    id?: number;
    user_name: string,
    viewed_temperature: string | number | Decimal | DecimalJsLike,
    perceived_temperature: string | number | Decimal | DecimalJsLike,
    rate: number,
    description?: string | null,
    created_at?: Date,
    updated_at?: Date,
    city: string,
    lon: string,
    lat: string
}