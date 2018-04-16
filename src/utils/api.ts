import Job from "../models/job";
import User from "../models/user";
import ReceivedJobMessage from "../messages/receivedJobMessage";

const io = require('socket.io-client');

export default class Api {
  public socket: any;

  constructor() {
    this.socket = io('http://localhost:8000');
  }

  async join(name: string) {
    this.socket.emit('Join', name);
    return new Promise<User>(resolve => {
      this.socket.on('Joined', (user: User) => {
        resolve(user);
      });
    });
  }

  async adminJoin(password: string) {
    this.socket.emit('AdminJoin', password);
    return new Promise<User>(resolve => {
      this.socket.on('Joined', (user: User) => {
        resolve(user);
      });
    });
  }

  async job(job: Job) {
    this.socket.emit('Job', job);
    return new Promise<ReceivedJobMessage>((resolve, reject) => {
      this.socket.on('ReceivedJob', (message: ReceivedJobMessage) => {
        if (message.isSuccess) {
          resolve(message);
        } else {
          reject(message);
        }
      });
    });
  }

  async cancel() {
    this.socket.emit('cancel');
    return new Promise(resolve => {
      this.socket.on('Canceled', () => {
        resolve();
      });
    });
  }

  async status() {
    this.socket.emit('')
  }
}