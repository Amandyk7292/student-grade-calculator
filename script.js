// script.js
function calculateGrade() {
    const rk1 = parseFloat(document.getElementById("rk1").value);
    const rk2 = parseFloat(document.getElementById("rk2").value);
    const session = parseFloat(document.getElementById("session").value);

    // Проверка ввода
    if (isNaN(rk1) || isNaN(rk2) || isNaN(session)) {
        document.getElementById("result").innerText = "Пожалуйста, заполните все поля!";
        document.getElementById("result").className = "";
        return;
    }

    if (rk1 < 0 || rk1 > 100 || rk2 < 0 || rk2 > 100 || session < 0 || session > 100) {
        document.getElementById("result").innerText = "Баллы должны быть от 0 до 100.";
        document.getElementById("result").className = "";
        return;
    }

    // Вычисление рубежного балла и общего балла
    const boundaryScore = (rk1 + rk2) / 2;
    const finalScore = (boundaryScore * 0.6) + (session * 0.4);

    const resultElement = document.getElementById("result");
    resultElement.className = ""; // Сбрасываем предыдущие классы

    // Отображение результатов на основе общего балла
    if (finalScore < 50) {
        resultElement.innerText = `Общий балл: ${finalScore.toFixed(2)}. Вы не пройдете сессию.`;
        resultElement.classList.add("result-fail");
    } else if (finalScore >= 50 && finalScore <= 70) {
        resultElement.innerText = `Общий балл: ${finalScore.toFixed(2)}. Вы пройдете!`;
        resultElement.classList.add("result-success");
    } else {
        resultElement.innerText = `Общий балл: ${finalScore.toFixed(2)}. Вы сохранили стипендию!`;
        resultElement.classList.add("result-scholarship");
    }
}
