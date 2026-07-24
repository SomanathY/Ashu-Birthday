/* ==========================================
   Happy Birthday Ashu ❤️
   main.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       Smooth Scroll
    =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    });


    /* ===============================
       Scroll Reveal
    =============================== */

    const revealItems = document.querySelectorAll(
        "section:not(#hero), .timeline-card, .message, video"
    );

    revealItems.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition =
            "all .9s cubic-bezier(.22,.61,.36,1)";

    });

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: .15

    });

    revealItems.forEach(item => observer.observe(item));


    /* ===============================
       Letter Paper Reveal
    =============================== */

    const letterPaper = document.querySelector('.letter-paper');

    if (letterPaper) {

        const paperObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('visible');

                    paperObserver.unobserve(entry.target);

                }

            });

        }, { threshold: 0.10 });

        paperObserver.observe(letterPaper);

    }


    /* ===============================
       Music
    =============================== */

    const music = document.getElementById("music");
    const btn = document.getElementById("musicBtn");

    if (music && btn) {

        // Attempt autoplay; update button if browser blocks it
        const playPromise = music.play();

        if (playPromise !== undefined) {

            playPromise
                .then(() => {
                    btn.innerHTML = "❚❚ Pause Music";
                })
                .catch(() => {
                    // Autoplay blocked — wait for first user interaction
                    btn.innerHTML = "♫ Play Music";

                    const startOnInteraction = () => {
                        music.play();
                        btn.innerHTML = "❚❚ Pause Music";
                        document.removeEventListener("click", startOnInteraction);
                    };

                    document.addEventListener("click", startOnInteraction);
                });

        }

        btn.addEventListener("click", (e) => {

            e.stopPropagation();

            if (music.paused) {

                music.play();

                btn.innerHTML = "❚❚ Pause Music";

            } else {

                music.pause();

                btn.innerHTML = "♫ Play Music";

            }

        });

    }


    /* ===============================
       Hero Confetti
    =============================== */

    (function () {

        const container = document.getElementById('hero-confetti');
        if (!container) return;

        const colors = [
            '#f472b6','#c084fc','#fbbf24',
            '#fb923c','#60a5fa','#34d399',
            '#f87171','#a78bfa','#fde68a'
        ];

        for (let i = 0; i < 50; i++) {

            const el       = document.createElement('div');
            el.className   = 'confetti-p';

            const color    = colors[Math.floor(Math.random() * colors.length)];
            const left     = Math.random() * 100;
            const delay    = Math.random() * 10;
            const dur      = 7 + Math.random() * 9;
            const size     = 5 + Math.random() * 8;
            const isCircle = Math.random() > .45;

            el.style.cssText = [
                `background:${color}`,
                `left:${left}%`,
                `width:${size}px`,
                `height:${isCircle ? size : (size * .45)}px`,
                `border-radius:${isCircle ? '50%' : '2px'}`,
                `animation-delay:${delay}s`,
                `animation-duration:${dur}s`
            ].join(';');

            container.appendChild(el);

        }

    }());


    /* ===============================
       Timeline Stagger
    =============================== */

    const cards = document.querySelectorAll(".timeline-card");

    cards.forEach((card, index) => {

        card.style.transitionDelay = `${index * .12}s`;

    });


    /* ===============================
       Auto Play Video
    =============================== */

    const video = document.querySelector("video");

    if (video) {

        const videoObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    video.muted = true;

                    video.play().catch(() => {});

                }

            });

        }, {

            threshold: .6

        });

        videoObserver.observe(video);

    }


    /* ===============================
       Typewriter
    =============================== */

    const subtitle = document.querySelector(".hero-content p");

    if (subtitle) {

        const text = subtitle.innerText;

        subtitle.innerHTML = "";

        let i = 0;

        function type() {

            if (i < text.length) {

                subtitle.innerHTML += text.charAt(i);

                i++;

                setTimeout(type, 55);

            }

        }

        type();

    }


    /* ===============================
       Floating Hearts ❤️
    =============================== */

    function createHeart() {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * window.innerWidth + "px";

        heart.style.bottom = "-40px";

        heart.style.fontSize =
            (18 + Math.random() * 12) + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "9999";

        heart.style.transition =
            "transform 8s linear, opacity 8s linear";

        document.body.appendChild(heart);

        requestAnimationFrame(() => {

            heart.style.transform =
                `translateY(-${window.innerHeight + 100}px)`;

            heart.style.opacity = "0";

        });

        setTimeout(() => {

            heart.remove();

        }, 8000);

    }

    setInterval(createHeart, 3500);


    /* ===============================
       Image Hover Glow
    =============================== */

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.boxShadow =
                "0 20px 60px rgba(212,163,115,.45)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.boxShadow = "";

        });

    });

});