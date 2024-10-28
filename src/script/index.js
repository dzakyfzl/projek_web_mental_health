const sidebar = document.getElementById('Sidebar');

// Fungsi untuk membuka sidebar
function openSidebar(){
    sidebar.classList.remove('-translate-x-full');
};

//Fungsi untuk menutup sidebar
function closeSidebar(){
    sidebar.classList.add('-translate-x-full');
}

//Konfigurasi Map Indonesia


function showmap(){
    province = document.getElementById('province-selector').value
    console.log(`${province} Selected`)
    map = document.getElementById('maps');
    map.setAttribute('src',`/src/image/map/${province}.svg`);
}
