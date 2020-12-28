function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

@Logger('ログ出力 - Person')
class Person {
    name = 'Max';

    constructor() {
        console.log('Personオブジェクト作成中...');
    }
}