// دالة لتغيير التبويب المعروض
// تستقبل tabId (اسم القسم) و clickedElement (زر القائمة الذي تم الضغط عليه)
function showTab(tabId, clickedElement) {
    
    // 1. إخفاء جميع أقسام المحتوى
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    // 2. إظهار القسم المطلوب
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active-tab');
    }

    // 3. إزالة التفعيل من جميع أزرار الشريط السفلي
    const allNavItems = document.querySelectorAll('.bottom-nav ul li');
    allNavItems.forEach(item => {
        item.classList.remove('active');
    });

    // 4. إضافة التفعيل (التظليل) للزر الذي تم الضغط عليه للتو
    if (clickedElement) {
        clickedElement.classList.add('active');
    }
}
