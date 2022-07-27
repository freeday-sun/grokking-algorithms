export default function simpleSearch(list, item) {
    let i = 0;
    while (i <= list.length - 1) {
        if(list[i] === item){
            return i;
        }
        i++;
    }
    return undefined;
}
