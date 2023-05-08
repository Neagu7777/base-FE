const list = [12, 4, 32, 5, 43]

for (let i = 0; i < list.length; i++){
    console.log(list[i]);
}




const list1 = [12, 4, -55, 32, -12, -3, 5, 43]
// 1) Написать цикл который выводить только 
// положительные числа
for (let i = 0; i < list1.length; i++ ) { 
    if (list1[i] > 0) {
        console.log(list1[i]);
    }
}
