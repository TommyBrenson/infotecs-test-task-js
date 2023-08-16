import * as path from 'path';
import * as fs from 'fs';

export const createAllureEnvironmentFile = (): void => {
    const reportFolder = path.resolve(process.cwd(), process.env.ALLURE_REPORTS_PATH);
    const environmentContent = Object.entries(process.env).reduce(
      (previousValue, [variableName, value]) => `${previousValue}\n${variableName}=${value}`,
      ''
    );
  
    fs.mkdirSync(reportFolder, { recursive: true });
    fs.writeFileSync(`${reportFolder}/environment.properties`, environmentContent, 'utf-8');
  };