// 1. Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor.

// let arr = ['red', 'white', 'blue'];
// let [firstColor, secondColor, thirdColor] = arr
// console.log("firstColor: ", firstColor);
// console.log("secondColor:", secondColor);
// console.log("thirdColor:", thirdColor);

//2. Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng.

// let person = {
//     age: 18,
//     name: "Dumb"
// };
// let { name, age } = person;
// console.log("name: ", name);
// console.log("age:", age);

// 3.Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator.

// let arr1 = [1, 2, 3, 4]
// let arr2 = [5, 6, 7, 8]

// let compArr = [...arr1, ...arr2]

// console.log(compArr)

// 4. Thêm một phần tử số 4 vào cuối mảng arr bằng cách sử dụng spread operator.

// let firstArr = [1, 2, 3]
// let seccondArr = [...firstArr, 4]

// console.log(seccondArr);

// 5. Tạo một bản sao của mảng originalArray bằng cách sử dụng spread operator.

// let originalArr = ['hello, world']
// let copyArray = [...originalArr]

// console.log(copyArray);

// 6. Cho hai đối tượng obj1 và obj2, viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng.

// let obj1 = {a: 1}
// let obj2 = {b: 2}
// let compObj = {...obj1, ...obj2}

// console.log(compObj)

// 7.Cho một đối tượng person với các thuộc tính như name, age, và gender, viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là "Vietnam".

// let Person = {
//     name: 'Tuna',
//     age: 18,
//     gender: 'female'
// }

// let update = {...Person, country: 'VietNam'}
// console.log(update);

// 8. Sử dụng filter để lọc ra các số chẵn từ một mảng số nguyên.

// let numbers = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11]
// let evenNumbers = numbers.filter(numbers => numbers % 2 === 0)

// console.log(evenNumbers);

// 9. Sử dụng filter để lọc ra các chuỗi có độ dài lớn hơn một ngưỡng cho trước từ một mảng các chuỗi.

// let string = ['mana', 'hp', 'stamina', 'mind', 'hungry', 'strength', 'defense',];
// let maxLength = 5;
// let maxLenghtString = string.filter(string => string.length > maxLength)

// console.log(maxLenghtString)

// 10. Sử dụng filter để lọc ra các đối tượng từ một mảng các đối tượng dựa trên một điều kiện cho trước.

// let person = [
//     {name: 'Quyen', age: 22},
//     {name: 'Nho', age: 23},
//     {name: 'Nhi', age: 23},
//     {name: 'Linh', age: 25}
// ]

// let teenagers = person.filter(person => person.age === 22)
// console.log(teenagers);

// 11. Sử dụng filter để lọc ra các số nguyên tố từ một mảng số nguyên.

// let isPrime = num => {
//     if(num <=1) return false;
//     if(num === 2) return true;
//     if(num % 2 === 0) return false;

//     for(let i = 3; i < Math.sqrt(num); i++) {
//         if(i % num === 0) return false;
//     }
//     return true;
// };
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let primeNumbers = numbers.filter(numbers => isPrime(numbers));
// console.log(primeNumbers);

// 12. Sử dụng filter để lọc ra các chuỗi không chứa ký tự số từ một mảng các chuỗi.
// - Nhờ thầy sửa giúp em, em không biết ạ.

// 13. Sử dụng reduce để tính tổng của các số trong một mảng số nguyên.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log("Tổng là:" + sum);

// 14. Sử dụng reduce để tính tích của các số trong một mảng số nguyên.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let multi = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// console.log("Tích là:" + multi);

// 15. Sử dụng reduce để tìm giá trị lớn nhất trong một mảng số nguyên.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let max = arr.reduce((maxValue,currentValue) => currentValue > maxValue ? currentValue : maxValue, arr[0])
// console.log( "Giá trị lớn nhất là:" + max);

// 16. Sử dụng reduce để đếm số lần xuất hiện của mỗi phần tử trong một mảng
// - Nhờ thầy sửa giúp em, em không biết ạ.

// 17. Sử dụng reduce để tính tổng của các giá trị số trong một mảng các đối tượng, với mỗi đối tượng có một thuộc tính số cần tính tổng.
// - Nhờ thầy sửa giúp em, em không biết ạ.
