import { WcwData } from 'components/Navigation/slice/types';

const ACCOUNT_INFOR = 'account_infor';

export function removeAccount() {
    localStorage.removeItem(ACCOUNT_INFOR);
}

export function saveAccount(data: WcwData): boolean {
    try {
        const jsonString: string = JSON.stringify(data);
        window.localStorage && localStorage.setItem(ACCOUNT_INFOR, jsonString);
        return true;
    } catch (error) {
        return false;
    }
}

export function getAccount(): WcwData | undefined {
    let data: WcwData | undefined;
    try {
        if (window.localStorage) {
            const jsonString = localStorage.getItem(ACCOUNT_INFOR);
            if (jsonString) {
                data = JSON.parse(jsonString);
            }
        }
    } catch (error) {
        data = undefined;
    }

    return data;
}

export const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
