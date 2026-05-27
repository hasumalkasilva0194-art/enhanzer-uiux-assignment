// Real-time table searching/filtering logic
document.getElementById('employeeQuery').addEventListener('keyup', function() {
    const queryValue = this.value.toLowerCase();
    const dataRows = document.querySelectorAll('#employeeDataTable tbody tr');
    
    dataRows.forEach(row => {
        const combinedRowText = row.textContent.toLowerCase();
        if (combinedRowText.includes(queryValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Tab selection engine
const actionTabs = document.querySelectorAll('.tab-item');
actionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        actionTabs.forEach(item => item.classList.remove('active'));
        tab.classList.add('active');
    });
});