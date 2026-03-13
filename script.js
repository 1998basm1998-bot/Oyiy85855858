// دالة لتغيير التبويب المعروض
function showTab(tabId, clickedElement) {
    
    // 1. إخفاء جميع أقسام المحتوى
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    // 2. إظهار القسم المطلوب بناءً على الـ ID
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active-tab');
    }

    // 3. إزالة التفعيل من جميع أزرار الشريط السفلي
    const allNavItems = document.querySelectorAll('.bottom-nav ul li');
    allNavItems.forEach(item => {
        item.classList.remove('active');
    });

    // 4. إضافة التفعيل للزر الذي تم الضغط عليه
    if (clickedElement) {
        clickedElement.classList.add('active');
        
        // كود إضافي صغير: جعل الزر النشط يتمركز في الشاشة عند النقر عليه (مفيد في الهواتف)
        clickedElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
}
