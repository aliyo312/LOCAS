function sendMessage() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim() || 'ناشناس';
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const chatBox = document.getElementById('chatBox');
        const messageDiv = document.createElement('div');
        
        // تنظیم کلاس sent برای چت‌های خودمان
        messageDiv.classList.add('message', 'sent');
        
        messageDiv.innerHTML = `<span style="color: #64b5f6; font-size: 0.8rem; display: block; margin-bottom: 2px;">${username}</span>${messageText}`;
        chatBox.appendChild(messageDiv);
        
        chatBox.scrollTop = chatBox.scrollHeight;
        
        messageInput.value = '';
        usernameInput.disabled = true; // قفل شدن اسم بعد از اولین پیام
    }
}
