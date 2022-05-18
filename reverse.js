let input = prompt("Type a word")

function reverse(list){
    let reversed = [];
    for( i = list.length - 1; i >= 0; i--){
    reversed.push(list[i])
    }
    return reversed
}
reverse(input);


