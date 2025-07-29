import axios from 'axios';
import { store } from '../store/store';
import { toast } from 'sonner';
import { router } from '@/routes/Router';

const sleep = (delay: number) => {
    return new Promise(resolve => setTimeout(resolve, delay));
}

const agente = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

agente.interceptors.response.use(config => {
    store.uiStore.isBusy();
    return config;
});

agente.interceptors.response.use(
    async response => {
        await sleep(1000);
        store.uiStore.isIdle();
        return response;
    },
    async error => {
        await sleep(1000);
        store.uiStore.isIdle();
        const { status, data } = error.response;

        switch (status) {
            case 400:
                if (data.errors) {
                    const modelStateErrors = [];
                    for (const key in data.errors){
                        if(data.errors[key]){
                            modelStateErrors.push(data.errors[key]);
                        }
                    }
                    throw modelStateErrors.flat();
                } else {
                    toast.error(data);
                }
                break;
            case 401:
                toast.error('Usuário ou senha invalida');
                break;
            case 404:
                router.navigate('not-found');
                break;
            case 500:
                router.navigate('server-error', {state: {error: data}});
                break;
            default:
                toast.error('Unknown error');
                break;
        }

        return Promise.reject(error);
    }
);

export default agente;