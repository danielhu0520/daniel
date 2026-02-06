function toggleMenu() {
    // 抓到選單元素
    const menu = document.getElementById("hamburger-menu-links");
    // 切換 "active" 這個 class (有的話就刪掉，沒有就加上去)
    menu.classList.toggle("active");
}