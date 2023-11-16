// Görev listesi
let tasks = [];

// Görev ekleme fonksiyonu
function addTask() {
    const taskInput = document.getElementById("taskInput");
    // const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Büyük harf
        const formattedTask = taskText.replace(/\b\w/g, l => l.toUpperCase());

        // Yeni görevi listeye ekle
        tasks.push(formattedTask);

        // Görev listesini güncelle
        renderTasks();

        // Input'u temizle
        taskInput.value = "";
    }
}

// Görev listesini ekrana render etme fonksiyonu
function renderTasks() {
    const taskList = document.getElementById("taskList");

    // Liste öğelerini temizle
    taskList.innerHTML = "";

    // Her görev için yeni bir liste öğesi oluştur
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("d-flex", "justify-content-between")
        li.innerHTML = `
            <label for="taskText">
                <input type="checkbox" class="me-3" id="taskText" onclick="taskUnderline()">
                <span id="taskTextUnderline">${task}</span>
            </label>
            <span onclick="removeTask(${index})" id="taskDelete">x</span>
        `;
        taskList.appendChild(li);
    });
}

function taskUnderline() {
    const taskCheckbox = document.getElementById("taskText");
    const taskTextUnderline = document.getElementById("taskTextUnderline");
    
    if (taskCheckbox.checked) {
        taskTextUnderline.classList.add('task-text-underline');
    } else {
        taskTextUnderline.classList.remove('task-text-underline')
    }
}

// Görev silme fonksiyonu
function removeTask(index) {
    // Index'e göre görevi sil
    tasks.splice(index, 1);

    // Görev listesini güncelle
    renderTasks();
}


// Sayfa yüklendiğinde görev listesini göster
document.addEventListener("DOMContentLoaded", renderTasks);
