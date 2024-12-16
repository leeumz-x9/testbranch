console.log("Pennapa Leeja");
console.log("Lee");
// Function to append the clicked number or operator to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to evaluate the expression and log result in console
function calculate() {
    try {
        let expression = document.getElementById('display').value;
        let result = eval(expression);  // คำนวณผลลัพธ์จากค่าที่กรอก
        console.log("Result: " + result);  // แสดงผลลัพธ์ใน console
    } catch (error) {
        console.log("Error: Invalid Expression");  // แสดงข้อผิดพลาดหากการคำนวณไม่ถูกต้อง
    }
}
