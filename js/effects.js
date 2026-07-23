/* ==========================================
   effects.js
   Visual Effects
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Floating Rose Petals
    ========================================== */

    function createPetal() {

        const petal = document.createElement("div");

        petal.className = "petal";

        petal.innerHTML = "🌸";

        petal.style.left =
            Math.random() * window.innerWidth + "px";

        petal.style.animationDuration =
            (8 + Math.random() * 5) + "s";

        petal.style.fontSize =
            (18 + Math.random() * 12) + "px";

        petal.style.opacity =
            (.5 + Math.random() * .5);

        document.body.appendChild(petal);

        petal.addEventListener("animationend", () => {

            petal.remove();

        });

    }

    setInterval(createPetal, 1800);



    /* ==========================================
       Confetti at Ending
    ========================================== */

    const ending = document.querySelector("#ending");

    let fired = false;

    if (ending) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting && !fired) {

                    fired = true;

                    launchConfetti();

                }

            });

        }, {

            threshold: .5

        });

        observer.observe(ending);

    }



    function launchConfetti() {

        for (let i = 0; i < 120; i++) {

            const confetti = document.createElement("div");

            confetti.className = "confetti";

            confetti.style.left =
                Math.random() * 100 + "vw";

            confetti.style.background =
                randomColor();

            confetti.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            confetti.style.transform =
                `rotate(${Math.random()*360}deg)`;

            document.body.appendChild(confetti);

            confetti.addEventListener("animationend", () => {

                confetti.remove();

            });

        }

    }



    function randomColor() {

        const colors = [

            "#D4A373",
            "#FFD166",
            "#EF476F",
            "#06D6A0",
            "#F4A261",
            "#FFFFFF"

        ];

        return colors[
            Math.floor(Math.random() * colors.length)
        ];

    }



    /* ==========================================
       Sparkle Button
    ========================================== */

    document.querySelectorAll("button,.begin-btn").forEach(btn => {

        btn.addEventListener("click", e => {

            const sparkle = document.createElement("span");

            sparkle.className = "sparkle";

            sparkle.style.left =
                e.offsetX + "px";

            sparkle.style.top =
                e.offsetY + "px";

            btn.appendChild(sparkle);

            setTimeout(() => {

                sparkle.remove();

            },700);

        });

    });

});