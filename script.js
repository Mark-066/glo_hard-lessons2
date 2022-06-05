const getArgument = function(str) {
    if (typeof str != 'string') {
        alert("Вы ввели не строку");
    }else {
        if (str.length >= 30) {
            str = str.slice(0, 30) + '...';
            str = str.trim();
            console.log(str);
        } 
    }     
};
console.log(getArgument(123));
console.log(getArgument('test_test_test_test_test_test'));
