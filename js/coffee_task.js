function calculateChange() {
            const amount = parseInt(document.getElementById("amount").value);
            const result = document.getElementById("result");

            if (isNaN(amount) || amount < 0) {
                result.textContent = "Пожалуйста, введите корректную положительную сумму.";
                return;
            }

            let remaining = amount;
            let count500 = Math.floor(remaining / 500);
            remaining %= 500;

            let count100 = Math.floor(remaining / 100);
            remaining %= 100;

            let count10 = Math.floor(remaining / 10);
            remaining %= 10;

            let count2 = Math.floor(remaining / 2);
            remaining %= 2;

            if (remaining !== 0) {
                result.textContent = "Эту сумму невозможно разменять купюрами 500, 100, 10 и монетой 2 рубля.";
            } else {
                result.innerHTML = `
                    <p>Размен для суммы ${amount} руб:</p>
                    <ul>
                        <li>Купюры по 500 руб: ${count500}</li>
                        <li>Купюры по 100 руб: ${count100}</li>
                        <li>Купюры по 10 руб: ${count10}</li>
                        <li>Монеты по 2 руб: ${count2}</li>
                    </ul>
                `;
            }
        }