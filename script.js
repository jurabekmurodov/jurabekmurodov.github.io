let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

document.querySelectorAll('.open-modal').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = "block";
    });
});

document.querySelectorAll('.close').forEach(item => {
    item.addEventListener('click', function() {
        this.closest('.modal').style.display = "none";
    });
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
};

document.querySelectorAll('.open-modal').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = "block";
    });
});

document.querySelectorAll('.close').forEach(item => {
    item.addEventListener('click', function() {
        this.closest('.modal').style.display = "none";
    });
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
};

function openModal(modalId) {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = "none"; 
    });
    document.getElementById(modalId).style.display = "block"; 
}

document.querySelectorAll('.nav-button.next').forEach(button => {
    button.addEventListener('click', function() {
        const nextModal = this.getAttribute('data-next');
        openModal(nextModal);
    });
});

document.querySelectorAll('.nav-button.prev').forEach(button => {
    button.addEventListener('click', function() {
        const prevModal = this.getAttribute('data-prev');
        openModal(prevModal);
    });
});

document.querySelectorAll('.open-modal').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        openModal(modalId);
    });
});

document.querySelectorAll('.close').forEach(item => {
    item.addEventListener('click', function() {
        this.closest('.modal').style.display = "none";
    });
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
};
