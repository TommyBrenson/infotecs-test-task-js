declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CI: string;
            ENV_NAME: string;
            ALLURE_REPORTS_PATH: string;
            BASE_URL: string;
            TEST_USER_LOGIN: string;
            TEST_USER_PASSWORD: string;
        }
    }
}

export {};