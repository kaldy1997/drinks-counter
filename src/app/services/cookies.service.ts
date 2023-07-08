import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class CookiesService {

    constructor(
        @Inject(DOCUMENT) private document: any,
        private userService: UserService
    ) { }

    public get(): string {
        const regExp: RegExp = CookiesService.getCookieRegExp(encodeURIComponent('user'));
        const result: RegExpExecArray = regExp.exec(this.document.cookie);

        if (result && result[1]) {
            const user = JSON.parse(result[1]);
            this.userService.set(user);
            return decodeURIComponent(user);
        } else {
            return '';
        }
    }

    public set(): void {
        this.document.cookie = `user=${JSON.stringify(this.userService.user)}`;
    }

    public delete(): void {
        this.document.cookie = 'user=';
    }

    private static getCookieRegExp(name: string): RegExp {
        const escapedName: string = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');

        return new RegExp(`(?:^${escapedName}|;\\s*${escapedName})=(.*?)(?:;|$)`, 'g');
    }
}
