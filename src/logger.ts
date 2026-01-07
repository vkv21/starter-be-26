import pino from 'pino';
import { pinoHttp } from 'pino-http';
import * as colorette from 'colorette';
const isProd = process.env.NODE_ENV === 'production';
const level = process.env.LOG_LEVEL || (isProd ? 'info' : 'debug');

const transport = !isProd
  ? pino.transport({
      target: 'pino-pretty',
      options: {
        colorize: colorette.isColorSupported,
        translateTime: 'HH:mm:ss',
        levelFirst: true,
      },
    })
  : undefined;

const logger = pino(
  {
    level,
    base: { pid: false, hostname: false },
    messageKey: 'msg',
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  transport
);

logger.info(`Logger initialized at level: ${level}`);

export const httpLogger = pinoHttp({ logger });
export default logger;

process.on('uncaughtException', (err) => {
  logger.fatal({ err }, 'uncaughtException');
  process.exit(1);
});
process.on('unhandledRejection', (reason) => {
  logger.error({ reason }, 'unhandledRejection');
});
