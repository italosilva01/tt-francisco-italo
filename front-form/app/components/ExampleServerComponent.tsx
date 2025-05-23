import { serverLogger } from '../lib/serverLogger';

interface ApiData {
    id: string;
    // adicione outros campos conforme necessário
}

async function getData() {
    serverLogger.info('Iniciando busca de dados');

    try {
        const res = await fetch('https://api.example.com/data');
        const data = (await res.json()) as ApiData;

        serverLogger.log('Dados recebidos:', data);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            serverLogger.error('Erro ao buscar dados:', error.message);
        } else {
            serverLogger.error('Erro desconhecido ao buscar dados');
        }
        throw error;
    }
}

export default async function ExampleServerComponent() {
    const data = await getData();

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Dados da API</h1>
            <pre className="mt-4 p-4 bg-gray-100 rounded">
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
} 