import { useState } from "react";

type ApiFn<TArgs, TResult> = (args: TArgs) => Promise<TResult>;

export function useApi<TArgs, TResult>(apiFn: ApiFn<TArgs, TResult>) {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<TResult | null>(null);

    const execute = async (args: TArgs): Promise<TResult | null> => {
        setLoading(true);
        setError(null);
        try {
            const result = await apiFn(args);
            setData(result);
            return result;
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unknown error occurred.");
            }
            return null;
        } finally {
            setLoading(false);
        }
    };
    return { execute, loading, error, data };
}