// 进入页面时自动触发花屏
window.addEventListener('load', function() {
    const glitch = document.querySelector('.glitch-overlay');
    
    // 先显示权限遮罩（模拟系统检查）
    setTimeout(() => {
        glitch.classList.add('active');
        
        // 3秒后停止花屏
        setTimeout(() => {
            glitch.classList.remove('active');
        }, 3000);
    }, 1000); // 延迟1秒开始
});

// 点击页面可手动触发花屏（调试用）
document.addEventListener('click', function() {
    const glitch = document.querySelector('.glitch-overlay');
    glitch.classList.add('active');
    
    setTimeout(() => {
        glitch.classList.remove('active');
    }, 3000);
});