body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease, color 0.3s ease;
    position: relative;
}

#star-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* 防止影響頁面交互 */
    z-index: -1; /* 保證星星在背景 */
    display: none; /* 默認隱藏星星容器 */
}

.star {
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    opacity: 0.8;
    animation: twinkle 1.5s infinite ease-in-out;
}

@keyframes twinkle {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
}

.dark-mode #star-container {
    display: block; /* 夜間模式顯示星星 */
}

.light-mode #star-container {
    display: none; /* 白天模式不顯示星星 */
}
