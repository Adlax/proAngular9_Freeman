import { Injectable, InjectionToken } from '@angular/core';

export const LOG_SERVICE = new InjectionToken("logger");
export const LOG_LEVEL = new InjectionToken("log_level");

export enum LogLevel {
  INFO, DEBUG, ERROR
}

@Injectable()
export class LogService {

  minimumLevel: LogLevel = LogLevel.INFO;

  logMessage(level: LogLevel, message: string) {
    if(level >= this.minimumLevel){
      console.log(`Message (${LogLevel[level]}): ${message}`);
    }
  }

  logInfoMessage(message: string){
    this.logMessage(LogLevel.INFO, message);
  }

  logDebugMessage(message:string){
    this.logMessage(LogLevel.DEBUG, message);
  }

  logErrorMessage(message: string){
    this.logMessage(LogLevel.ERROR, message);
  }

}

@Injectable()
export class SpecialLogService extends LogService {

  constructor(){
    super();
    this.minimumLevel = LogLevel.DEBUG;
  }

  specialLogMessage(level: LogLevel, message: string){
    if(level >= this.minimumLevel){
      console.log(`Special message (${LogLevel[level]}): ${message}`);
    }
  }

}
