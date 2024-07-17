const userList: Record<string, string> = {}

userList['INX User 1'] = 'inxbuyer@mailinator.com';

export class UserList {
    public static getUserList(userName : string) {
        return userList[userName];
    }
}