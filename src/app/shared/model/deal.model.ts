import {ISubject} from './subject.model';

export interface IDeal {
    id?: number;
    subject?: ISubject;
    fio?: string;
    email?: string;
    created?: Date;
    provided?: Date;
}

export class Deal implements IDeal {
    constructor(
        public id?: number,
        public subject?: ISubject,
        public fio?: string,
        public email?: string,
        public created?: Date,
        public provided?: Date
    ) {}
}
