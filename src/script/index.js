const sidebar = document.getElementById('Sidebar');

// Fungsi untuk membuka sidebar
function openSidebar(){
    sidebar.classList.remove('-translate-x-full');
};

//Fungsi untuk menutup sidebar
function closeSidebar(){
    sidebar.classList.add('-translate-x-full');
}