/*Write a function shortcut that takes two strings and returns the initial letters of theses strings.

Example: shortcut('Amnesty', 'International') should return 'AI'. */

function shortcut(x,y){
    let inx = x.charAt(0);
    let iny = y.charAt(0);

    return inx+iny;
}